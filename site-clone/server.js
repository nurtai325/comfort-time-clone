const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));

/* in-memory lead store (resets on server restart) */
const leads = new Map();

function token() {
  return crypto.randomBytes(16).toString('hex');
}

function computeAnalysis(score) {
  const cat = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
  const count = cat === 'high' ? 10 : cat === 'medium' ? 6 : 2;
  const banks = CONFIG.banks.slice(0, count);
  const matched = banks.map(b => {
    const seed = (score * 7 + b.id * 13) % 1000;
    const pc = cat === 'high' ? 4 + (seed % 3) : cat === 'medium' ? 3 + (seed % 2) : 2;
    return { bank_id: b.id, programs_count: pc };
  });
  return {
    score_category: cat,
    matched_banks_count: count,
    matched_programs_total: matched.reduce((s, m) => s + m.programs_count, 0),
    matched_banks: matched,
  };
}

/* ── Config ─────────────────────────────────────────────────── */
app.get('/public/lead-capture/:slug', (req, res) => {
  res.json({
    slug: CONFIG.slug,
    instagram_reviews_url: CONFIG.instagram_reviews_url || '',
    city_options: CONFIG.city_options || [],
    banks: CONFIG.banks || [],
    branches: CONFIG.branches || [],
  });
});

/* ── Visit ──────────────────────────────────────────────────── */
app.post('/public/lead-capture/:slug/visit', (req, res) => {
  res.json({ ok: true });
});

/* ── Phone → create lead ────────────────────────────────────── */
app.post('/public/lead-capture/:slug/phone', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(422).json({ detail: 'phone required' });
  const client_token = token();
  leads.set(client_token, { phone, slug: req.params.slug, step: 'phone' });
  res.json({ client_token });
});

/* ── Service type ───────────────────────────────────────────── */
app.patch('/public/lead-capture/leads/:token/service-type', (req, res) => {
  const lead = leads.get(req.params.token);
  if (!lead) return res.status(404).json({ detail: 'not found' });
  lead.service_type = req.body.service_type;
  res.json({ ok: true });
});

/* ── Profile ────────────────────────────────────────────────── */
app.patch('/public/lead-capture/leads/:token/profile', (req, res) => {
  const lead = leads.get(req.params.token);
  if (!lead) return res.status(404).json({ detail: 'not found' });
  Object.assign(lead, req.body);
  res.json({ ok: true });
});

/* ── Quiz → return analysis ─────────────────────────────────── */
app.patch('/public/lead-capture/leads/:token/quiz', (req, res) => {
  const lead = leads.get(req.params.token);
  if (!lead) return res.status(404).json({ detail: 'not found' });
  const score = req.body.preapproval_score || 35;
  Object.assign(lead, req.body);
  res.json(computeAnalysis(score));
});

/* ── Appointment ────────────────────────────────────────────── */
app.post('/public/lead-capture/leads/:token/appointment', (req, res) => {
  const lead = leads.get(req.params.token);
  if (!lead) return res.status(404).json({ detail: 'not found' });
  Object.assign(lead, req.body);
  lead.step = 'booked';
  res.json({ ok: true, appointment_id: crypto.randomBytes(8).toString('hex') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Comfort Time clone running at http://localhost:${PORT}`));
