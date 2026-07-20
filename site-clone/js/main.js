/* lead_capture.js — 4-step mortgage lead form (v3) */
'use strict';

/* ── i18n ──────────────────────────────────────────────────── */
const I18N = {
  ru: {
    'score.label':  'Предварительная готовность',
    'score.hint':   'Онлайн-оценка, не решение банка',
    'trust.instagram': 'Отзывы клиентов в Instagram',
    'offer.title':  'Публичная оферта',
    'offer.body':   'Отправляя данные, вы даёте согласие Comfort Time на сбор, хранение и обработку указанных персональных данных для связи с вами, консультации по выбранной услуге и обработки заявки. Согласие действует до его отзыва.',
    'step.label':   'Шаг {n} из 4',
    's1.kicker':    'Ипотека — просто',
    's1.title':     'Проверьте вероятность одобрения онлайн',
    's1.subtitle':  'Ответьте на несколько вопросов и получите предварительную онлайн-оценку.',
    's1.perks':     ['Бесплатно, без обязательств', 'Ответим в рабочее время', 'Лучшие ставки Казахстана'],
    's1.phone':     'Номер телефона',
    's1.phone.ph':  '+7 (___) ___-__-__',
    's1.offer':     'Отправляя данные, соглашаюсь с ',
    's1.offer.lnk': 'публичной офертой',
    's1.cta':       'Проверить онлайн →',
    's1.err.empty': 'Введите номер телефона',
    's1.err.short': 'Введите 10 или 11 цифр',
    's2.kicker':    'Ваш запрос',
    's2.title':     'Расскажите о себе',
    's2.subtitle':  'Это поможет подобрать лучшие условия.',
    's2.name':      'Ваше имя',
    's2.name.ph':   'Как вас зовут?',
    's2.city':      'Город проживания',
    's2.city.ph':   'Начните вводить…',
    's2.tcity':     'Город для покупки',
    's2.tcity.ph':  'Где хотите квартиру?',
    's2.cta':       'Далее →',
    's2.err.name':  'Введите имя',
    's2.err.city':  'Укажите город',
    's2.err.tcity': 'Укажите город покупки',
    's2.err.city.invalid':  'Выберите город из списка',
    's2.err.tcity.invalid': 'Выберите город покупки из списка',
    's3.kicker':    'Быстрая проверка',
    's3.title':     'Три вопроса',
    's3.yn.yes':    'Да',
    's3.yn.no':     'Нет',
    's3.q1a.label': 'Есть действующие просрочки?',
    's3.q1b.label': 'Были просрочки ранее?',
    's3.q1c.label': 'Когда закрылись?',
    's3.q1c.old':   'Более года назад',
    's3.q1c.recent':'Менее года назад',
    's3.q1d.label': 'Длительность просрочки:',
    's3.q1d.short': 'До 90 дней',
    's3.q1d.long':  '90+ дней',
    's3.q2.label':  'Есть первоначальный взнос?',
    's3.q2sub.label':'Примерный размер:',
    's3.q2sub.u1m': 'До 1 млн ₸',
    's3.q2sub.1to5':'От 1 до 5 млн ₸',
    's3.q2sub.5m+': 'От 5 млн ₸',
    's3.q3.label':  'Есть официальный доход?',
    's3.q3sub.label':'Работаете официально дольше 6 месяцев?',
    's3.cta':       'Узнать результат →',
    's3.err':       'Ответьте на все вопросы',
    's35.analysing':  'Анализируем ваши ответы',
    's35.sub':        'Проверяем предварительное соответствие ипотечным программам',
    's35.cat.high':   'Высокий результат',
    's35.cat.medium': 'Средний результат',
    's35.cat.low':    'Сложная ситуация',
    's35.cat.high.desc':   'По вашим ответам могут подойти предложения нескольких банков.',
    's35.cat.medium.desc': 'Есть варианты. Подберём наилучшие условия вместе.',
    's35.cat.low.desc':    'Разберёмся вместе. Наш эксперт найдёт решение.',
    's35.programs': 'Предварительно найдено {n} подходящих программ',
    's35.legal':    'Подбор является предварительным. Точные условия и решение определяются после консультации и проверки документов.',
    's35.specialist.note': 'Наш специалист свяжется с вами в рабочее время и подберёт лучшие условия.',
    'toast.q1': '+балл за историю кредитов',
    'toast.q2': '+балл за первоначальный взнос',
    'toast.q3': '+балл за подтверждение дохода',
    'disclaimer': 'Предварительная оценка не является решением банка и не гарантирует одобрение ипотеки.',
    'disclaimer.credit': 'Предварительная оценка не является решением банка и не гарантирует одобрение кредита.',
    's15.kicker':       'Шаг 1 из 4',
    's15.title':        'Что вас интересует?',
    's15.sub':          'Выберите нужный продукт',
    's15.mortgage':     'Ипотека',
    's15.mortgage.sub': 'Покупка жилья',
    's15.credit':       'Кредит',
    's15.credit.sub':   'Потребительский кредит',
    's35.cta.credit':   'Продолжить к записи →',
    's35.sub.credit':   'Проверяем предварительное соответствие кредитным программам',
    'assist.auto.label': 'Автопереход',
    'assist.auto.seconds': 'сек',
    'assist.product.title': 'Продолжим по ипотеке, если клиент не выбрал сам',
    'assist.product.caption': 'Ипотека выбрана по умолчанию, чтобы заявка не останавливалась.',
    'success.ig':  'Написать в Instagram',
    'success.wa':  'Поделиться с близкими',
    'success.wa.msg': 'Проверь вероятность одобрения ипотеки онлайн, бесплатно за 2 минуты 👉 ',
  },
  kk: {
    'score.label':  'Алдын ала дайындық',
    'score.hint':   'Онлайн-бағалау, банк шешімі емес',
    'trust.instagram': 'Instagram-дағы пікірлер',
    'offer.title':  'Жария оферта',
    'offer.body':   'Деректерді жіберу арқылы сіз Comfort Time компаниясына көрсетілген жеке деректерді сізбен байланысу, таңдалған қызмет бойынша кеңес беру және өтінімді өңдеу мақсатында жинауға, сақтауға және өңдеуге келісім бересіз. Келісімді кері қайтарып алуға болады.',
    'step.label':   '4-тен {n} қадам',
    's1.kicker':    'Ипотека — оңай',
    's1.title':     'Ипотеканы мақұлдау ықтималдығын онлайн тексеріңіз',
    's1.subtitle':  'Бірнеше сұраққа жауап беріп, алдын ала онлайн-бағалау алыңыз.',
    's1.perks':     ['Тегін, міндетсіз', 'Жұмыс уақытында жауап береміз', 'Қазақстанның үздік мөлшерлемелері'],
    's1.phone':     'Телефон нөміріңіз',
    's1.phone.ph':  '+7 (___) ___-__-__',
    's1.offer':     'Деректерді жіберу арқылы ',
    's1.offer.lnk': 'жария офертамен',
    's1.cta':       'Онлайн тексеру →',
    's1.err.empty': 'Телефон нөмірін енгізіңіз',
    's1.err.short': '10 немесе 11 цифр енгізіңіз',
    's2.kicker':    'Сіздің сұраныс',
    's2.title':     'Өзіңіз туралы айтыңыз',
    's2.subtitle':  'Бұл ең жақсы шарттарды табуға көмектеседі.',
    's2.name':      'Атыңыз',
    's2.name.ph':   'Сізді қалай атайды?',
    's2.city':      'Тұрғылықты қала',
    's2.city.ph':   'Теруді бастаңыз…',
    's2.tcity':     'Сатып алатын қала',
    's2.tcity.ph':  'Пәтер қайда керек?',
    's2.cta':       'Келесі →',
    's2.err.name':  'Атыңызды енгізіңіз',
    's2.err.city':  'Қаланы көрсетіңіз',
    's2.err.tcity': 'Сатып алатын қаланы көрсетіңіз',
    's2.err.city.invalid':  'Қаланы тізімнен таңдаңыз',
    's2.err.tcity.invalid': 'Сатып алатын қаланы тізімнен таңдаңыз',
    's3.kicker':    'Жылдам тексеру',
    's3.title':     'Үш сұрақ',
    's3.yn.yes':    'Иә',
    's3.yn.no':     'Жоқ',
    's3.q1a.label': 'Белсенді кешіктірулер бар ма?',
    's3.q1b.label': 'Бұрын кешіктірулер болды ма?',
    's3.q1c.label': 'Қашан жабылды?',
    's3.q1c.old':   'Бір жылдан астам бұрын',
    's3.q1c.recent':'Бір жылдан аз бұрын',
    's3.q1d.label': 'Кешіктіру ұзақтығы:',
    's3.q1d.short': '90 күнге дейін',
    's3.q1d.long':  '90+ күн',
    's3.q2.label':  'Бастапқы жарна бар ма?',
    's3.q2sub.label':'Шамалас мөлшері:',
    's3.q2sub.u1m': '1 млн ₸ дейін',
    's3.q2sub.1to5':'1 млн ₸-ден 5 млн ₸-ге дейін',
    's3.q2sub.5m+': '5 млн ₸-ден бастап',
    's3.q3.label':  'Ресми кіріс бар ма?',
    's3.q3sub.label':'Ресми жұмыста 6 айдан көп істейсіз бе?',
    's3.cta':       'Нәтижені білу →',
    's3.err':       'Барлық сұрақтарға жауап беріңіз',
    's35.analysing':  'Деректеріңізді талдап жатырмыз',
    's35.sub':        'Ипотекалық бағдарламаларға алдын ала сәйкестікті тексеруде',
    's35.cat.high':   'Жоғары нәтиже',
    's35.cat.medium': 'Орташа нәтиже',
    's35.cat.low':    'Қиын жағдай',
    's35.cat.high.desc':   'Жауаптарыңызға қарай бірнеше банктің ұсыныстары сәйкес келуі мүмкін.',
    's35.cat.medium.desc': 'Нұсқалар бар. Бірге ең жақсы шарттарды табамыз.',
    's35.cat.low.desc':    'Бірге шешеміз. Сарапшымыз шешім табады.',
    's35.programs': 'Алдын ала {n} сәйкес бағдарлама табылды',
    's35.legal':    'Іріктеу алдын ала болып табылады. Нақты шарттар мен шешім кеңестен кейін анықталады.',
    's35.specialist.note': 'Сарапшымыз жұмыс уақытында хабарласып, ең жақсы шарттарды ұсынады.',
    'success.ig':  'Instagram-да жазу',
    'success.wa':  'Жақындарыңызбен бөлісу',
    'success.wa.msg': 'Ипотеканы мақұлдау ықтималдығын онлайн тексер, 2 минутта тегін 👉 ',
    'toast.q1': '+ұпай несие тарихы үшін',
    'toast.q2': '+ұпай бастапқы жарна үшін',
    'toast.q3': '+ұпай кіріс расталуы үшін',
    'disclaimer': 'Алдын ала бағалау банктің шешімі емес және ипотеканың мақұлдануына кепілдік бермейді.',
    'disclaimer.credit': 'Алдын ала бағалау банктің шешімі емес және несиенің мақұлдануына кепілдік бермейді.',
    's15.kicker':       '4-тен 1 қадам',
    's15.title':        'Сізді не қызықтырады?',
    's15.sub':          'Қажетті өнімді таңдаңыз',
    's15.mortgage':     'Ипотека',
    's15.mortgage.sub': 'Тұрғын үй сатып алу',
    's15.credit':       'Несие',
    's15.credit.sub':   'Тұтынушылық несие',
    's35.cta.credit':   'Жазылуға өту →',
    's35.sub.credit':   'Несиелік бағдарламаларға алдын ала сәйкестікті тексеруде',
    'assist.auto.label': 'Автоөту',
    'assist.auto.seconds': 'сек',
    'assist.product.title': 'Клиент өзі таңдамаса, ипотекамен жалғастырамыз',
    'assist.product.caption': 'Өтінім тоқтап қалмауы үшін ипотека әдепкі таңдау.',
  },
};

function t(key) { return (I18N[state.lang] || I18N.ru)[key] || key; }

/* ── KZ Cities ─────────────────────────────────────────────── */
let KZ_CITIES = [
  'Алматы','Астана','Шымкент','Актобе','Актау','Атырау',
  'Қарағанды','Қостанай','Павлодар','Семей','Тараз','Өскемен',
  'Орал','Петропавл','Қызылорда','Екібастұз','Рудный','Талдықорған',
  'Темиртау','Туркестан','Жезқазған','Балқаш','Риддер',
  'Шу','Жаңаөзен','Қонаев','Ленгір','Сатпаев',
];

/* ── State ──────────────────────────────────────────────────── */
const SLUG = window.__LEAD_SLUG__ || document.body.dataset.slug || '';
const URL_PARAMS = new URLSearchParams(window.location.search || '');
const STORAGE_KEY = 'lc_' + SLUG;

const state = {
  lang: 'kk',
  step: 1,
  product: null,  /* 'mortgage' | 'credit' */
  phone: '',
  clientToken: null,
  visitUid: _uid(),
  offerAccepted: true,
  name: '',
  city: '',
  targetCity: '',
  /* quiz step 3 */
  q1_active:   null,
  q1_past:     null,
  q1_when:     null,
  q1_period:   null,
  q2_has:      null,
  q2_pct:      null,  /* 'under_1m' | 'from_1m_to_5m' | 'from_5m' */
  q3_official: null,
  q3_stable:   null,
  credit_income_range: null,
  credit_burden_status: null,
  /* analysis result (step 3.5) */
  analysisResult: null,
  /* step 4 callback */
  selectedCalltime: null,
  /* config */
  score: 20,
  banks: [],
  branches: [],
  instagramUrl: '',
  abVariant: 'A',
  visitSent: false,
  booking: null,
};

/* ── Helpers ────────────────────────────────────────────────── */
function _uid() {
  return 'v' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function _save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      step: state.step, product: state.product, phone: state.phone, clientToken: state.clientToken,
      name: state.name, city: state.city, targetCity: state.targetCity,
      q1_active: state.q1_active, q1_past: state.q1_past,
      q1_when: state.q1_when, q1_period: state.q1_period,
      q2_has: state.q2_has, q2_pct: state.q2_pct,
      q3_official: state.q3_official, q3_stable: state.q3_stable,
      credit_income_range: state.credit_income_range,
      credit_burden_status: state.credit_burden_status,
      analysisResult: state.analysisResult,
      selectedCalltime: state.selectedCalltime,
      score: state.score, lang: state.lang,
      visitUid: state.visitUid, abVariant: state.abVariant,
    }));
  } catch (_) {}
}

function _restore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    Object.assign(state, d);
  } catch (_) {}
}

function _clearStorage() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
}

let _autoAssistTimer = null;

function _clearAutoAssist() {
  if (_autoAssistTimer) {
    clearTimeout(_autoAssistTimer);
    _autoAssistTimer = null;
  }
}

function _autoAssistHtml(kind, seconds) {
  return '<div class="lc-auto-assist" data-auto-assist="' + _esc(kind) + '">' +
    '<div class="lc-auto-assist-head">' +
      '<span class="lc-auto-assist-label">' + _esc(t('assist.auto.label')) + '</span>' +
      '<span class="lc-auto-assist-timer">' +
        '<span class="lc-auto-assist-count">' + seconds + '</span>' +
        '<span>' + _esc(t('assist.auto.seconds')) + '</span>' +
      '</span>' +
    '</div>' +
    '<div class="lc-auto-assist-copy">' +
      '<strong>' + _esc(t('assist.' + kind + '.title')) + '</strong>' +
      '<span>' + _esc(t('assist.' + kind + '.caption')) + '</span>' +
    '</div>' +
    '<div class="lc-auto-assist-track" aria-hidden="true">' +
      '<div class="lc-auto-assist-fill"></div>' +
    '</div>' +
  '</div>';
}

function _startAutoAssist(kind, seconds, callback) {
  _clearAutoAssist();
  const root = document.querySelector('[data-auto-assist="' + kind + '"]');
  if (!root || typeof callback !== 'function') return;
  const fill = root.querySelector('.lc-auto-assist-fill');
  const count = root.querySelector('.lc-auto-assist-count');
  const total = Math.max(1, seconds) * 1000;
  const startedAt = Date.now();

  function tick() {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, total - elapsed);
    const pct = Math.max(0, Math.min(100, remaining / total * 100));
    if (fill) fill.style.width = pct + '%';
    if (count) count.textContent = Math.max(0, Math.ceil(remaining / 1000));
    if (remaining <= 0) {
      _clearAutoAssist();
      callback();
      return;
    }
    _autoAssistTimer = setTimeout(tick, 100);
  }

  tick();
}

function _api(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  return fetch(path, opts).then(async function(r) {
    const json = await r.json().catch(function() { return {}; });
    if (!r.ok) {
      const detail = json.detail;
      let msg;
      if (Array.isArray(detail)) {
        msg = detail.map(function(d) {
          const field = d.loc ? d.loc[d.loc.length - 1] : '';
          return field ? field + ': ' + d.msg : d.msg;
        }).join('; ');
      } else {
        msg = String(detail || r.statusText);
      }
      throw new Error(msg);
    }
    return json;
  });
}

function _setScoreColor(arc, score) {
  arc.className = 'lc-score-arc' + (score >= 65 ? ' green' : score >= 45 ? ' amber' : '');
}

function _animScore(from, to, numEl, arcEl) {
  const dur = 600;
  const start = performance.now();
  const step = ts => {
    const p = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const cur = Math.round(from + (to - from) * ease);
    numEl.textContent = cur + '%';
    _setScoreColor(arcEl, cur);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

let _toastTimer;
function _toast(msg) {
  let el = document.getElementById('lc-score-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'lc-score-toast';
    el.className = 'lc-score-toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  clearTimeout(_toastTimer);
  el.classList.remove('show');
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

function _formatPhone(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11) {
    return '+7 (' + digits.slice(1,4) + ') ' + digits.slice(4,7) + '-' + digits.slice(7,9) + '-' + digits.slice(9,11);
  }
  if (digits.length === 10) {
    return '+7 (' + digits.slice(0,3) + ') ' + digits.slice(3,6) + '-' + digits.slice(6,8) + '-' + digits.slice(8,10);
  }
  return raw;
}

function _esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Quiz value computation ─────────────────────────────────── */
function _computeQ1() {
  if (!state.q1_active) return null;
  if (state.q1_active === 'yes') return 'active';
  if (!state.q1_past) return null;
  if (state.q1_past === 'no') return 'none';
  if (!state.q1_when || !state.q1_period) return null;
  return 'closed_' + state.q1_when + '_' + state.q1_period;
}

function _computeQ2() {
  if (!state.q2_has) return null;
  if (state.q2_has === 'no') return 'none';
  return state.q2_pct || null;
}

function _computeQ3() {
  if (_isCredit()) return state.credit_income_range || null;
  if (!state.q3_official) return null;
  if (state.q3_official === 'no') return 'unofficial';
  if (!state.q3_stable) return null;
  return state.q3_stable === 'yes' ? 'official_stable' : 'official_new';
}

function _computeQ4() {
  return state.credit_burden_status || null;
}

/* ── Score formula (mirrors backend v3) ─────────────────────── */
const SCORE_MAP = {
  delinquency: {
    none: 22, active: 2,
    closed_old_short: 16, closed_old_long: 10,
    closed_recent_short: 8, closed_recent_long: 4,
    closed: 12, unknown: 6,
  },
  downPayment: {
    'from_5m': 18, 'from_1m_to_5m': 14, 'under_1m': 8,
    '5plus': 18, '1to5m': 14, 'under1m': 8,
    'none': 2, 'calculate': 5,
    '20plus': 18, '10to19': 14, 'under10': 8,
  },
  income: {
    official_stable: 15, official_new: 10, unofficial: 5, none: 1,
    full_official: 15, partial_official: 10, self_employed: 9,
    regular_unofficial: 5, no_income: 1, unknown: 3,
  },
  creditIncome: {
    over_1m: 18,
    from_500k_to_1m: 14,
    under_500k: 8,
  },
  creditBurden: {
    low: 12,
    medium: 7,
    high: 1,
  },
};

function _calcScore() {
  const base = state.clientToken ? 35 : 20;
  const q1 = _computeQ1();
  const q2 = _isCredit() ? 'none' : _computeQ2();
  const q3 = _computeQ3();
  const q4 = _computeQ4();
  const d = (q1 && SCORE_MAP.delinquency[q1]) || 0;
  const burden = (q4 && SCORE_MAP.creditBurden[q4]) || 0;
  if (_isCredit()) {
    const ci = (q3 && SCORE_MAP.creditIncome[q3]) || 0;
    return Math.min(base + d + ci + burden, 90);
  }
  const p = (q2 && SCORE_MAP.downPayment[q2]) || 0;
  const i = (q3 && SCORE_MAP.income[q3]) || 0;
  return Math.min(base + d + p + i + burden, 90);
}

/* ── Local analysis (mirrors backend compute_analysis) ──────── */
function _localAnalysis(score) {
  const cat = score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low';
  const count = cat === 'high' ? 10 : cat === 'medium' ? 6 : 2;
  const banks = (state.banks || []).slice(0, count);
  const matched = banks.map(function(b) {
    const seed = (score * 7 + b.id * 13) % 1000;
    const pc = cat === 'high' ? 4 + (seed % 3) : cat === 'medium' ? 3 + (seed % 2) : 2;
    return { bank_id: b.id, programs_count: pc };
  });
  return {
    score_category: cat,
    matched_banks_count: count,
    matched_programs_total: matched.reduce(function(s, m) { return s + m.programs_count; }, 0),
    matched_banks: matched,
  };
}

function _programsWord(n) {
  if (state.lang === 'kk') return 'бағдарлама';
  if (n % 10 === 1 && n % 100 !== 11) return 'подходящая программа';
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'подходящие программы';
  return 'подходящих программ';
}

/* ── Date helpers ───────────────────────────────────────────── */

/* ── UI helpers ─────────────────────────────────────────────── */
function _progress(step) {
  const topbar = document.getElementById('lc-topbar');
  const fill   = document.getElementById('lc-progress-fill');
  const label  = document.getElementById('lc-step-label');
  if (!topbar) return;
  const n = Math.min(Math.ceil(step), 4);
  if (n >= 2) {
    topbar.hidden = false;
    fill.style.width = ((n - 1) / 3 * 100) + '%';
    label.textContent = t('step.label').replace('{n}', n);
  } else {
    topbar.hidden = true;
  }
}

function _scoreBar(step, animate, prevScore) {
  const bar = document.getElementById('lc-score-bar');
  if (!bar) return;
  if (step >= 2) {
    bar.hidden = false;
    const numEl = document.getElementById('lc-score-num');
    const arcEl = document.getElementById('lc-score-arc');
    if (animate && prevScore !== undefined && prevScore !== state.score) {
      _animScore(prevScore, state.score, numEl, arcEl);
    } else {
      numEl.textContent = state.score + '%';
      _setScoreColor(arcEl, state.score);
    }
  } else {
    bar.hidden = true;
  }
}

function _trustBlock(show) {
  const trust = document.getElementById('lc-trust');
  const link  = document.getElementById('lc-instagram-link');
  if (!trust) return;
  if (show && state.instagramUrl) {
    trust.hidden = false;
    link.href = state.instagramUrl;
    link.querySelector('[data-i18n]').textContent = t('trust.instagram');
  } else {
    trust.hidden = true;
  }
}

function _setContent(html) {
  _clearAutoAssist();
  document.getElementById('lc-content').innerHTML = html;
}

/* ── Autocomplete ───────────────────────────────────────────── */
function _autocomplete(inputEl, listEl, onSelect) {
  let focusIdx = -1;

  function show(items) {
    if (!items.length) { listEl.classList.remove('open'); return; }
    listEl.innerHTML = items.map(function(c, i) {
      const q = inputEl.value.trim();
      const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i');
      const marked = _esc(c).replace(re, '<mark>$1</mark>');
      return '<div class="lc-ac-item" data-idx="' + i + '" data-val="' + _esc(c) + '">' + marked + '</div>';
    }).join('');
    listEl.classList.add('open');
    focusIdx = -1;
  }

  inputEl.addEventListener('input', function() {
    const q = inputEl.value.trim().toLowerCase();
    if (!q) { listEl.classList.remove('open'); return; }
    const matches = KZ_CITIES.filter(function(c) {
      return c.toLowerCase().startsWith(q) || c.toLowerCase().includes(q);
    }).slice(0, 6);
    show(matches);
  });

  inputEl.addEventListener('keydown', function(e) {
    const items = listEl.querySelectorAll('.lc-ac-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') focusIdx = Math.min(focusIdx + 1, items.length - 1);
    else if (e.key === 'ArrowUp') focusIdx = Math.max(focusIdx - 1, 0);
    else if (e.key === 'Enter' && focusIdx >= 0) {
      e.preventDefault();
      const val = items[focusIdx].dataset.val;
      inputEl.value = val; onSelect(val); listEl.classList.remove('open');
    } else return;
    items.forEach(function(el, i) { el.classList.toggle('focused', i === focusIdx); });
  });

  listEl.addEventListener('mousedown', function(e) {
    const item = e.target.closest('.lc-ac-item');
    if (!item) return;
    inputEl.value = item.dataset.val;
    onSelect(item.dataset.val);
    listEl.classList.remove('open');
  });

  document.addEventListener('click', function(e) {
    if (!inputEl.contains(e.target) && !listEl.contains(e.target))
      listEl.classList.remove('open');
  });
}

/* ── Alert helper ───────────────────────────────────────────── */
function _showAlert(parent, beforeEl, msg) {
  const e = document.createElement('div');
  e.className = 'lc-alert error';
  e.textContent = msg;
  parent.insertBefore(e, beforeEl);
  setTimeout(function() { e.remove(); }, 4000);
}

/* ── Analytics ──────────────────────────────────────────────── */
function _track(event, extra) {
  try {
    const payload = Object.assign({
      event_category: 'lead_form',
      slug: SLUG,
      lang: state.lang,
      step: state.step,
    }, extra || {});
    if (window.gtag) window.gtag('event', event, payload);
    if (window.ym && window._ymId) window.ym(window._ymId, 'reachGoal', event, payload);
  } catch (_) {}
}

/* ─────────────────────────────────────────────────────────────
   STEP 1 — Phone
───────────────────────────────────────────────────────────── */
function renderStep1() {
  state.step = 1;
  const perks = (t('s1.perks') || []).map(function(p) {
    return '<div class="lc-perk"><div class="lc-perk-dot"><svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,8 8,3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>' + _esc(p) + '</span></div>';
  }).join('');

  _setContent(
    '<div class="lc-step-head">' +
      '<div class="lc-kicker">' + _esc(t('s1.kicker')) + '</div>' +
      '<h1>' + _esc(t('s1.title')) + '</h1>' +
      '<p class="lc-step-subtitle">' + _esc(t('s1.subtitle')) + '</p>' +
    '</div>' +
    '<div class="lc-perks">' + perks + '</div>' +
    '<div class="lc-body">' +
      '<div class="lc-field">' +
        '<label for="lc-phone">' + _esc(t('s1.phone')) + '</label>' +
        '<input id="lc-phone" class="lc-input" type="tel" inputmode="tel" autocomplete="tel"' +
          ' placeholder="' + _esc(t('s1.phone.ph')) + '" value="' + _esc(state.phone) + '" maxlength="20">' +
        '<span class="lc-err" id="lc-phone-err"></span>' +
      '</div>' +
    '</div>' +
    '<div class="lc-offer-row">' +
      '<input type="checkbox" id="lc-offer-cb"' + (state.offerAccepted ? ' checked' : '') + '>' +
      '<label for="lc-offer-cb">' + _esc(t('s1.offer')) + '<a href="#" id="lc-offer-link">' + _esc(t('s1.offer.lnk')) + '</a>.</label>' +
    '</div>' +
    '<div class="lc-cta-wrap">' +
      '<button class="lc-btn lc-btn-primary" id="lc-s1-submit">' + _esc(t('s1.cta')) + '</button>' +
    '</div>' +
    '<p class="lc-disclaimer">' + _esc(_isCredit() ? t('disclaimer.credit') : t('disclaimer')) + '</p>'
  );

  _progress(1);
  _scoreBar(1);
  _trustBlock(true);

  const phoneEl = document.getElementById('lc-phone');
  const errEl   = document.getElementById('lc-phone-err');
  const offerCb = document.getElementById('lc-offer-cb');

  phoneEl.addEventListener('input', function() { state.phone = phoneEl.value; errEl.classList.remove('visible'); });
  offerCb.addEventListener('change', function() { state.offerAccepted = offerCb.checked; });
  document.getElementById('lc-offer-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('lc-offer-overlay').hidden = false;
    _track('offer_opened');
  });
  document.getElementById('lc-s1-submit').addEventListener('click', submitStep1);
}

async function submitStep1() {
  const phoneRaw = state.phone.trim();
  const digits   = phoneRaw.replace(/\D/g, '');
  const errEl    = document.getElementById('lc-phone-err');

  if (!phoneRaw) { errEl.textContent = t('s1.err.empty'); errEl.classList.add('visible'); return; }
  if (digits.length < 10) { errEl.textContent = t('s1.err.short'); errEl.classList.add('visible'); return; }

  const btn = document.getElementById('lc-s1-submit');
  btn.disabled = true;
  btn.innerHTML = '<div class="lc-spinner"></div>';

  if (!state.visitSent) {
    _api('POST', '/public/lead-capture/' + SLUG + '/visit', { visitor_uid: state.visitUid })
      .then(function() { state.visitSent = true; _save(); })
      .catch(function() {});
  }
  const phoneNorm = digits.length === 10 ? '7' + digits : digits;
  state.phone = phoneNorm;
  state.score = 20;
  _save();
  _track('step_1_completed', { step: 1 });
  renderStep15();
}

/* ─────────────────────────────────────────────────────────────
   STEP 1.5 — Product selection
───────────────────────────────────────────────────────────── */
function _isCredit() { return state.product === 'credit'; }

function _creditIncomeText(key) {
  const ru = {
    label: '\u0412\u0430\u0448 \u0434\u043e\u0445\u043e\u0434 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442',
    under_500k: '\u0414\u043e 500\u041a \u20b8 \u0432 \u043c\u0435\u0441\u044f\u0446',
    from_500k_to_1m: '\u041e\u0442 500\u041a \u0434\u043e 1 \u043c\u043b\u043d \u20b8',
    over_1m: '\u0411\u043e\u043b\u0435\u0435 1 \u043c\u043b\u043d \u20b8',
  };
  const kk = {
    label: '\u0410\u0439\u043b\u044b\u049b \u0442\u0430\u0431\u044b\u0441\u044b\u04a3\u044b\u0437',
    under_500k: '\u0410\u0439\u044b\u043d\u0430 500\u041a \u20b8-\u0433\u0435 \u0434\u0435\u0439\u0456\u043d',
    from_500k_to_1m: '500\u041a-\u0434\u0435\u043d 1 \u043c\u043b\u043d \u20b8-\u0433\u0435 \u0434\u0435\u0439\u0456\u043d',
    over_1m: '1 \u043c\u043b\u043d \u20b8-\u0434\u0435\u043d \u0436\u043e\u0493\u0430\u0440\u044b',
  };
  return (state.lang === 'kk' ? kk : ru)[key] || key;
}

function _creditBurdenText(key) {
  const ru = {
    label: '\u041a\u0430\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u0440\u0435\u0434\u0438\u0442\u043e\u0432 \u0443 \u0432\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441?',
    low: '\u0414\u043e 2 \u043c\u043b\u043d \u20b8',
    medium: '\u041e\u0442 3 \u0434\u043e 6 \u043c\u043b\u043d \u20b8',
    high: '7 \u043c\u043b\u043d \u20b8 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435',
  };
  const kk = {
    label: '\u049a\u0430\u0437\u0456\u0440 \u0431\u0435\u043b\u0441\u0435\u043d\u0434\u0456 \u043a\u0440\u0435\u0434\u0438\u0442\u0442\u0435\u0440\u0456\u04a3\u0456\u0437\u0434\u0456\u04a3 \u0436\u0430\u043b\u043f\u044b \u0441\u043e\u043c\u0430\u0441\u044b \u049b\u0430\u043d\u0448\u0430?',
    low: '2 \u043c\u043b\u043d \u20b8-\u0493\u0430 \u0434\u0435\u0439\u0456\u043d',
    medium: '3-6 \u043c\u043b\u043d \u20b8',
    high: '7 \u043c\u043b\u043d \u20b8 \u0436\u04d9\u043d\u0435 \u0436\u043e\u0493\u0430\u0440\u044b',
  };
  return (state.lang === 'kk' ? kk : ru)[key] || key;
}

function _cityValue(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  return KZ_CITIES.find(function(city) { return String(city).toLowerCase() === raw; }) || '';
}

function _citySelectOptions(selected, placeholderKey) {
  const current = _cityValue(selected);
  const placeholder = '<option value="" disabled' + (!current ? ' selected' : '') + '>' + _esc(t(placeholderKey)) + '</option>';
  const options = KZ_CITIES.map(function(city) {
    return '<option value="' + _esc(city) + '"' + (city === current ? ' selected' : '') + '>' + _esc(city) + '</option>';
  }).join('');
  return placeholder + options;
}

function selectProduct(product) {
  state.product = product;
  state.credit_burden_status = null;
  if (product === 'credit') {
    state.q2_has = null;
    state.q2_pct = null;
    state.q3_official = null;
    state.q3_stable = null;
  } else {
    state.credit_income_range = null;
  }
  _save();
  _track('product_selected', { product });
  renderStep2();
}

function renderStep15() {
  state.step = 1.5;

  _setContent(
    '<div class="lc-step-head">' +
      '<div class="lc-kicker">' + _esc(t('s15.kicker')) + '</div>' +
      '<h2>' + _esc(t('s15.title')) + '</h2>' +
      '<p class="lc-step-subtitle">' + _esc(t('s15.sub')) + '</p>' +
    '</div>' +
    '<div class="lc-product-grid">' +
      '<button class="lc-product-card" id="lc-product-mortgage">' +
        '<div class="lc-product-icon">' +
          '<svg viewBox="0 0 48 48" fill="none"><path d="M8 20L24 6L40 20V42H30V30H18V42H8V20Z" fill="currentColor" opacity=".15"/><path d="M8 20L24 6L40 20V42H30V30H18V42H8V20Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>' +
        '</div>' +
        '<div class="lc-product-name">' + _esc(t('s15.mortgage')) + '</div>' +
        '<div class="lc-product-sub">' + _esc(t('s15.mortgage.sub')) + '</div>' +
        '<div class="lc-product-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
      '</button>' +
      '<button class="lc-product-card" id="lc-product-credit">' +
        '<div class="lc-product-icon">' +
          '<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="12" width="40" height="26" rx="4" fill="currentColor" opacity=".15"/><rect x="4" y="12" width="40" height="26" rx="4" stroke="currentColor" stroke-width="2.5"/><rect x="4" y="20" width="40" height="7" fill="currentColor" opacity=".25"/><rect x="4" y="20" width="40" height="7" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="30" width="10" height="4" rx="1" fill="currentColor" opacity=".5"/></svg>' +
        '</div>' +
        '<div class="lc-product-name">' + _esc(t('s15.credit')) + '</div>' +
        '<div class="lc-product-sub">' + _esc(t('s15.credit.sub')) + '</div>' +
        '<div class="lc-product-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
      '</button>' +
    '</div>' +
    _autoAssistHtml('product', 10)
  );

  _progress(2);
  _scoreBar(2);
  _trustBlock(true);

  document.getElementById('lc-product-mortgage').addEventListener('click', function() { selectProduct('mortgage'); });
  document.getElementById('lc-product-credit').addEventListener('click', function() { selectProduct('credit'); });
  _startAutoAssist('product', 10, function() {
    if (state.step === 1.5 && !state.product) {
      _track('product_auto_selected', { product: 'mortgage' });
      selectProduct('mortgage');
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   STEP 2 — Profile
───────────────────────────────────────────────────────────── */
function renderStep2() {
  state.step = 2;
  _setContent(
    '<div class="lc-step-head">' +
      '<div class="lc-kicker">' + _esc(t('s2.kicker')) + '</div>' +
      '<h2>' + _esc(t('s2.title')) + '</h2>' +
      '<p class="lc-step-subtitle">' + _esc(t('s2.subtitle')) + '</p>' +
    '</div>' +
    '<div class="lc-body">' +
      '<div class="lc-field">' +
        '<label for="lc-name">' + _esc(t('s2.name')) + '</label>' +
        '<input id="lc-name" class="lc-input" type="text" autocomplete="given-name"' +
          ' placeholder="' + _esc(t('s2.name.ph')) + '" value="' + _esc(state.name) + '">' +
        '<span class="lc-err" id="lc-name-err"></span>' +
      '</div>' +
      '<div class="lc-field">' +
        '<label for="lc-city">' + _esc(t('s2.city')) + '</label>' +
        '<select id="lc-city" class="lc-input lc-select" required>' + _citySelectOptions(state.city, 's2.city.ph') + '</select>' +
        '<span class="lc-err" id="lc-city-err"></span>' +
      '</div>' +
      '<div class="lc-field">' +
        '<label for="lc-tcity">' + _esc(t('s2.tcity')) + '</label>' +
        '<select id="lc-tcity" class="lc-input lc-select" required>' + _citySelectOptions(state.targetCity, 's2.tcity.ph') + '</select>' +
        '<span class="lc-err" id="lc-tcity-err"></span>' +
      '</div>' +
    '</div>' +
    '<div class="lc-cta-wrap">' +
      '<button class="lc-btn lc-btn-primary" id="lc-s2-submit">' + _esc(t('s2.cta')) + '</button>' +
    '</div>'
  );

  _progress(2);
  _scoreBar(2, false, 20);
  _trustBlock(false);

  const nameEl    = document.getElementById('lc-name');
  const cityEl    = document.getElementById('lc-city');
  const tcityEl   = document.getElementById('lc-tcity');

  nameEl.addEventListener('input',  function() { state.name = nameEl.value; });
  cityEl.addEventListener('change',  function() { state.city = cityEl.value; });
  tcityEl.addEventListener('change', function() { state.targetCity = tcityEl.value; });

  document.getElementById('lc-s2-submit').addEventListener('click', submitStep2);
}

async function submitStep2() {
  const nameErr  = document.getElementById('lc-name-err');
  const cityErr  = document.getElementById('lc-city-err');
  const tcityErr = document.getElementById('lc-tcity-err');
  let ok = true;

  if (!state.name.trim())       { nameErr.textContent  = t('s2.err.name');  nameErr.classList.add('visible');  ok = false; }
  if (!state.city.trim())       { cityErr.textContent  = t('s2.err.city');  cityErr.classList.add('visible');  ok = false; }
  if (!state.targetCity.trim()) { tcityErr.textContent = t('s2.err.tcity'); tcityErr.classList.add('visible'); ok = false; }
  const normalizedCity = _cityValue(state.city);
  const normalizedTargetCity = _cityValue(state.targetCity);
  if (state.city.trim() && !normalizedCity) {
    cityErr.textContent = t('s2.err.city.invalid');
    cityErr.classList.add('visible');
    ok = false;
  }
  if (state.targetCity.trim() && !normalizedTargetCity) {
    tcityErr.textContent = t('s2.err.tcity.invalid');
    tcityErr.classList.add('visible');
    ok = false;
  }
  if (!ok) return;
  state.city = normalizedCity;
  state.targetCity = normalizedTargetCity;

  state.score = Math.max(state.score, 35);
  _save();
  _track('step_2_completed', { step: 2 });
  renderStep3();
}

/* ─────────────────────────────────────────────────────────────
   STEP 3 — Progressive Quiz
───────────────────────────────────────────────────────────── */
function _ynBtn(val, label) {
  return '<button type="button" class="lc-yn-btn" data-val="' + val + '">' + _esc(label) + '</button>';
}

function _subBtn(val, label) {
  return '<button type="button" class="lc-sub-option" data-val="' + val + '">' + _esc(label) + '</button>';
}

function _reveal(id) {
  const el = document.getElementById(id);
  if (el && el.hidden) {
    el.hidden = false;
    setTimeout(function() { el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 60);
  }
}

function _selectYN(groupId, val) {
  document.querySelectorAll('#' + groupId + ' .lc-yn-btn').forEach(function(b) {
    b.classList.toggle('selected', b.dataset.val === val);
  });
}

function _selectSub(groupId, val) {
  document.querySelectorAll('#' + groupId + ' .lc-sub-option').forEach(function(b) {
    b.classList.toggle('selected', b.dataset.val === val);
  });
}

function _scoreUpdate(toastKey) {
  const prev = state.score;
  const ns = _calcScore();
  state.score = Math.max(state.score, ns);
  if (state.score > prev) {
    _scoreBar(3, true, prev);
    _toast(t(toastKey) + ': +' + (state.score - prev) + '%');
  }
  _save();
}

function _q1Done() { return _computeQ1() !== null; }
function _q2Done() { return _computeQ2() !== null; }
function _q3Done() { return _computeQ3() !== null; }
function _q4Done() { return _computeQ4() !== null; }

function renderStep3() {
  state.step = 3;

  _setContent(
    '<div class="lc-step-head">' +
      '<div class="lc-kicker">' + _esc(t('s3.kicker')) + '</div>' +
      '<h2>' + _esc(t('s3.title')) + '</h2>' +
    '</div>' +

    '<div class="lc-quiz-section" id="lc-s3-q1a">' +
      '<div class="lc-quiz-q-label">1. ' + _esc(t('s3.q1a.label')) + '</div>' +
      '<div class="lc-yn-group" id="lc-q1a">' +
        _ynBtn('yes', t('s3.yn.yes')) +
        _ynBtn('no',  t('s3.yn.no')) +
      '</div>' +
    '</div>' +

    '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q1b" hidden>' +
      '<div class="lc-quiz-q-label">' + _esc(t('s3.q1b.label')) + '</div>' +
      '<div class="lc-yn-group" id="lc-q1b">' +
        _ynBtn('yes', t('s3.yn.yes')) +
        _ynBtn('no',  t('s3.yn.no')) +
      '</div>' +
    '</div>' +

    '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q1c" hidden>' +
      '<div class="lc-quiz-q-label">' + _esc(t('s3.q1c.label')) + '</div>' +
      '<div class="lc-sub-options" id="lc-q1when">' +
        _subBtn('old',    t('s3.q1c.old')) +
        _subBtn('recent', t('s3.q1c.recent')) +
      '</div>' +
      '<div class="lc-quiz-sub-label">' + _esc(t('s3.q1d.label')) + '</div>' +
      '<div class="lc-sub-options" id="lc-q1period">' +
        _subBtn('short', t('s3.q1d.short')) +
        _subBtn('long',  t('s3.q1d.long')) +
      '</div>' +
    '</div>' +

    (_isCredit() ? '' :
      '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q2" hidden>' +
        '<div class="lc-quiz-q-label">2. ' + _esc(t('s3.q2.label')) + '</div>' +
        '<div class="lc-yn-group" id="lc-q2">' +
          _ynBtn('yes', t('s3.yn.yes')) +
          _ynBtn('no',  t('s3.yn.no')) +
        '</div>' +
      '</div>' +

      '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q2sub" hidden>' +
        '<div class="lc-quiz-q-label">' + _esc(t('s3.q2sub.label')) + '</div>' +
        '<div class="lc-sub-options lc-sub-options-3" id="lc-q2pct">' +
          _subBtn('under_1m',     t('s3.q2sub.u1m')) +
          _subBtn('from_1m_to_5m', t('s3.q2sub.1to5')) +
          _subBtn('from_5m',      t('s3.q2sub.5m+')) +
        '</div>' +
      '</div>'
    ) +

    '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q3" hidden>' +
      '<div class="lc-quiz-q-label">' + (_isCredit() ? '2. ' + _esc(_creditIncomeText('label')) : '3. ' + _esc(t('s3.q3.label'))) + '</div>' +
      (_isCredit()
        ? '<div class="lc-sub-options lc-sub-options-3" id="lc-q3income">' +
            _subBtn('under_500k', _creditIncomeText('under_500k')) +
            _subBtn('from_500k_to_1m', _creditIncomeText('from_500k_to_1m')) +
            _subBtn('over_1m', _creditIncomeText('over_1m')) +
          '</div>'
        : '<div class="lc-yn-group" id="lc-q3">' +
            _ynBtn('yes', t('s3.yn.yes')) +
            _ynBtn('no',  t('s3.yn.no')) +
          '</div>'
      ) +
    '</div>' +

    (_isCredit() ? '' :
      '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q3sub" hidden>' +
        '<div class="lc-quiz-q-label">' + _esc(t('s3.q3sub.label')) + '</div>' +
        '<div class="lc-yn-group" id="lc-q3stable">' +
          _ynBtn('no',  t('s3.yn.no')) +
          _ynBtn('yes', t('s3.yn.yes')) +
        '</div>' +
      '</div>'
    ) +

    '<div class="lc-quiz-section lc-quiz-reveal" id="lc-s3-q4" hidden>' +
      '<div class="lc-quiz-q-label">' + (_isCredit() ? '3. ' : '4. ') + _esc(_creditBurdenText('label')) + '</div>' +
      '<div class="lc-sub-options lc-sub-options-3" id="lc-q4burden">' +
        _subBtn('low', _creditBurdenText('low')) +
        _subBtn('medium', _creditBurdenText('medium')) +
        _subBtn('high', _creditBurdenText('high')) +
      '</div>' +
    '</div>' +

    '<div class="lc-cta-wrap lc-quiz-reveal" id="lc-s3-cta" hidden>' +
      '<span class="lc-err" id="lc-q-err">' + _esc(t('s3.err')) + '</span>' +
      '<button class="lc-btn lc-btn-primary" id="lc-s3-submit">' + _esc(t('s3.cta')) + '</button>' +
    '</div>'
  );

  _progress(3);
  _scoreBar(3, false, state.score);
  _trustBlock(false);

  /* Restore saved answers */
  if (state.q1_active) {
    _selectYN('lc-q1a', state.q1_active);
    if (state.q1_active === 'no') {
      document.getElementById('lc-s3-q1b').hidden = false;
      if (state.q1_past) {
        _selectYN('lc-q1b', state.q1_past);
        if (state.q1_past === 'yes') {
          document.getElementById('lc-s3-q1c').hidden = false;
          if (state.q1_when)   _selectSub('lc-q1when',  state.q1_when);
          if (state.q1_period) _selectSub('lc-q1period', state.q1_period);
        }
      }
    }
    if (_q1Done()) {
      if (_isCredit()) {
        document.getElementById('lc-s3-q3').hidden = false;
        if (state.credit_income_range) _selectSub('lc-q3income', state.credit_income_range);
        if (_q3Done()) {
          document.getElementById('lc-s3-q4').hidden = false;
          if (state.credit_burden_status) _selectSub('lc-q4burden', state.credit_burden_status);
          if (_q4Done()) document.getElementById('lc-s3-cta').hidden = false;
        }
      } else {
        document.getElementById('lc-s3-q2').hidden = false;
        if (state.q2_has) {
          _selectYN('lc-q2', state.q2_has);
          if (state.q2_has === 'yes') {
            document.getElementById('lc-s3-q2sub').hidden = false;
            if (state.q2_pct) _selectSub('lc-q2pct', state.q2_pct);
          }
        }
        if (_q2Done()) {
          document.getElementById('lc-s3-q3').hidden = false;
          if (state.q3_official) {
            _selectYN('lc-q3', state.q3_official);
            if (state.q3_official === 'yes') {
              document.getElementById('lc-s3-q3sub').hidden = false;
              if (state.q3_stable) _selectYN('lc-q3stable', state.q3_stable);
            }
          }
          if (_q3Done()) {
            document.getElementById('lc-s3-q4').hidden = false;
            if (state.credit_burden_status) _selectSub('lc-q4burden', state.credit_burden_status);
            if (_q4Done()) document.getElementById('lc-s3-cta').hidden = false;
          }
        }
      }
    }
  }

  document.getElementById('lc-q1a').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-yn-btn');
    if (!btn) return;
    state.q1_active = btn.dataset.val;
    state.q1_past = null; state.q1_when = null; state.q1_period = null;
    _selectYN('lc-q1a', state.q1_active);
    if (state.q1_active === 'yes') {
      document.getElementById('lc-s3-q1b').hidden = true;
      document.getElementById('lc-s3-q1c').hidden = true;
      _scoreUpdate('toast.q1');
      _reveal(_isCredit() ? 'lc-s3-q3' : 'lc-s3-q2');
    } else {
      _reveal('lc-s3-q1b');
      if (!_isCredit()) document.getElementById('lc-s3-q2').hidden = true;
    }
    _save();
  });

  document.getElementById('lc-q1b').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-yn-btn');
    if (!btn) return;
    state.q1_past = btn.dataset.val;
    state.q1_when = null; state.q1_period = null;
    _selectYN('lc-q1b', state.q1_past);
    if (state.q1_past === 'no') {
      document.getElementById('lc-s3-q1c').hidden = true;
      _scoreUpdate('toast.q1');
      _reveal(_isCredit() ? 'lc-s3-q3' : 'lc-s3-q2');
    } else {
      _reveal('lc-s3-q1c');
      if (!_isCredit()) document.getElementById('lc-s3-q2').hidden = true;
    }
    _save();
  });

  document.getElementById('lc-q1when').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-sub-option');
    if (!btn) return;
    state.q1_when = btn.dataset.val;
    _selectSub('lc-q1when', state.q1_when);
    if (state.q1_when && state.q1_period) { _scoreUpdate('toast.q1'); _reveal(_isCredit() ? 'lc-s3-q3' : 'lc-s3-q2'); }
    _save();
  });

  document.getElementById('lc-q1period').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-sub-option');
    if (!btn) return;
    state.q1_period = btn.dataset.val;
    _selectSub('lc-q1period', state.q1_period);
    if (state.q1_when && state.q1_period) { _scoreUpdate('toast.q1'); _reveal(_isCredit() ? 'lc-s3-q3' : 'lc-s3-q2'); }
    _save();
  });

  if (!_isCredit()) {
    document.getElementById('lc-q2').addEventListener('click', function(e) {
      const btn = e.target.closest('.lc-yn-btn');
      if (!btn) return;
      state.q2_has = btn.dataset.val;
      state.q2_pct = null;
      _selectYN('lc-q2', state.q2_has);
      if (state.q2_has === 'no') {
        document.getElementById('lc-s3-q2sub').hidden = true;
        _scoreUpdate('toast.q2');
        _reveal('lc-s3-q3');
      } else {
        _reveal('lc-s3-q2sub');
        document.getElementById('lc-s3-q3').hidden = true;
      }
      _save();
    });

    document.getElementById('lc-q2pct').addEventListener('click', function(e) {
      const btn = e.target.closest('.lc-sub-option');
      if (!btn) return;
      state.q2_pct = btn.dataset.val;
      _selectSub('lc-q2pct', state.q2_pct);
      _scoreUpdate('toast.q2');
      _reveal('lc-s3-q3');
      _save();
    });
  }

  if (_isCredit()) {
    document.getElementById('lc-q3income').addEventListener('click', function(e) {
      const btn = e.target.closest('.lc-sub-option');
      if (!btn) return;
      state.credit_income_range = btn.dataset.val;
      state.credit_burden_status = null;
      _selectSub('lc-q3income', state.credit_income_range);
      _scoreUpdate('toast.q3');
      document.getElementById('lc-s3-cta').hidden = true;
      _reveal('lc-s3-q4');
      _save();
    });
  } else {
    document.getElementById('lc-q3').addEventListener('click', function(e) {
      const btn = e.target.closest('.lc-yn-btn');
      if (!btn) return;
      state.q3_official = btn.dataset.val;
      state.q3_stable = null;
      state.credit_burden_status = null;
      _selectYN('lc-q3', state.q3_official);
      if (state.q3_official === 'no') {
        document.getElementById('lc-s3-q3sub').hidden = true;
        _scoreUpdate('toast.q3');
        document.getElementById('lc-s3-cta').hidden = true;
        _reveal('lc-s3-q4');
      } else {
        _reveal('lc-s3-q3sub');
        document.getElementById('lc-s3-cta').hidden = true;
      }
      _save();
    });

    document.getElementById('lc-q3stable').addEventListener('click', function(e) {
      const btn = e.target.closest('.lc-yn-btn');
      if (!btn) return;
      state.q3_stable = btn.dataset.val;
      state.credit_burden_status = null;
      _selectYN('lc-q3stable', state.q3_stable);
      _scoreUpdate('toast.q3');
      document.getElementById('lc-s3-cta').hidden = true;
      _reveal('lc-s3-q4');
      _save();
    });
  }

  document.getElementById('lc-q4burden').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-sub-option');
    if (!btn) return;
    state.credit_burden_status = btn.dataset.val;
    _selectSub('lc-q4burden', state.credit_burden_status);
    _scoreUpdate('toast.q3');
    _reveal('lc-s3-cta');
    _save();
  });

  document.getElementById('lc-s3-submit').addEventListener('click', submitStep3);
}

async function submitStep3() {
  const q1val = _computeQ1();
  const q2val = _isCredit() ? 'none' : _computeQ2();
  const q3val = _computeQ3();
  const q4val = _computeQ4();

  const errEl = document.getElementById('lc-q-err');
  if (!q1val || !q2val || !q3val || !q4val) { errEl.classList.add('visible'); return; }
  errEl.classList.remove('visible');

  const finalScore = _calcScore();
  state.score = Math.max(state.score, finalScore);
  if (isNaN(state.score) || state.score < 0) state.score = 35;

  const btn = document.getElementById('lc-s3-submit');
  btn.disabled = true;

  _setContent(
    '<div class="lc-analysis-loading">' +
      '<div class="lc-analysis-rings">' +
        '<div class="lc-ring lc-ring-1"></div>' +
        '<div class="lc-ring lc-ring-2"></div>' +
        '<div class="lc-ring lc-ring-3"></div>' +
      '</div>' +
      '<p class="lc-analysis-title">' + _esc(t('s35.analysing')) + '</p>' +
      '<p class="lc-analysis-sub">' + _esc(_isCredit() ? t('s35.sub.credit') : t('s35.sub')) + '</p>' +
    '</div>'
  );
  document.getElementById('lc-topbar').hidden = true;
  document.getElementById('lc-score-bar').hidden = true;

  const payload = {
    phone: state.phone,
    full_name: state.name.trim(),
    city: state.city,
    target_city: state.targetCity,
    service_type: state.product,
    form_language: state.lang,
    offer_accepted: state.offerAccepted,
    visitor_uid: state.visitUid,
    landing_version: state.abVariant,
    delinquency_status: q1val,
    down_payment_status: q2val,
    down_payment_percent_range: (q2val && q2val !== 'none') ? q2val : null,
    income_confirmation_type: q3val,
    monthly_income_status: _isCredit() ? q3val : null,
    credit_income_range: _isCredit() ? q3val : null,
    credit_burden_status: q4val,
    preapproval_score: state.score,
  };

  try {
    const res = await _api('POST', '/public/lead-capture/' + SLUG + '/submit', payload);
    if (res && res.score_category) {
      state.analysisResult = {
        score_category: res.score_category,
        matched_banks_count: res.matched_banks_count,
        matched_programs_total: res.matched_programs_total,
        matched_banks: res.matched_banks,
      };
    } else {
      state.analysisResult = _localAnalysis(state.score);
    }
  } catch (err) {
    state.analysisResult = _localAnalysis(state.score);
  }

  _track('step_3_completed', { step: 3, score: state.score });
  state.step = 3.5;
  _save();
  await new Promise(function(r) { setTimeout(r, 1200); });
  renderAnalysisResult();
}

/* ─────────────────────────────────────────────────────────────
   STEP 3.5 — Analysis Result
───────────────────────────────────────────────────────────── */
function renderAnalysisResult() {
  state.step = 3.5;
  const score    = state.score;
  const analysis = state.analysisResult || _localAnalysis(score);
  const cat      = analysis.score_category || (score >= 75 ? 'high' : score >= 50 ? 'medium' : 'low');
  const banks    = state.banks || [];
  const matched  = analysis.matched_banks || [];
  const total    = analysis.matched_programs_total || 0;

  const catClass = 'cat-' + cat;
  const catText  = t('s35.cat.' + cat);
  const catDesc  = t('s35.cat.' + cat + '.desc');
  const prgText  = t('s35.programs').replace('{n}', total);

  const bankCards = matched.map(function(m) {
    const bank = banks.find(function(b) { return b.id === m.bank_id; });
    if (!bank) return '';
    const name   = state.lang === 'kk' ? (bank.name_kk || bank.name_ru) : bank.name_ru;
    const abbr   = bank.abbr || name.slice(0, 2).toUpperCase();
    const color  = bank.color || '#6366f1';
    const prg    = m.programs_count + ' ' + _programsWord(m.programs_count);
    const logoInner = bank.logo_url
      ? '<img class="lc-bank-logo-img" src="' + _esc(bank.logo_url) + '" alt="' + _esc(name) + '" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<span class="lc-bank-logo-abbr">' + _esc(abbr) + '</span>'
      : '<span class="lc-bank-logo-abbr">' + _esc(abbr) + '</span>';
    return '<div class="lc-bank-card">' +
      '<div class="lc-bank-logo" style="background:' + _esc(color) + '">' + logoInner + '</div>' +
      '<div class="lc-bank-name">' + _esc(name) + '</div>' +
      '<div class="lc-bank-programs">' + _esc(prg) + '</div>' +
    '</div>';
  }).join('');

  const shareUrl = window.location.origin + '/stream/' + SLUG;
  const waMsg = encodeURIComponent(t('success.wa.msg') + shareUrl);
  const waBtn = '<a href="https://wa.me/?text=' + waMsg + '" class="lc-btn lc-btn-wa" target="_blank" rel="noopener" onclick="_track(\'whatsapp_share_clicked\')">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    _esc(t('success.wa')) + '</a>';

  _setContent(
    '<div class="lc-result-screen">' +
      '<div class="lc-result-pct-wrap ' + catClass + '">' +
        '<div class="lc-result-pct">' + score + '<span class="lc-result-pct-sign">%</span></div>' +
        '<div class="lc-result-cat-label">' + _esc(catText) + '</div>' +
      '</div>' +
      '<p class="lc-result-desc">' + _esc(catDesc) + '</p>' +
      '<div class="lc-programs-found">' + _esc(prgText) + '</div>' +
      '<div class="lc-banks-grid lc-banks-' + cat + '">' + bankCards + '</div>' +
      '<p class="lc-result-legal">' + _esc(t('s35.legal')) + '</p>' +
      '<div class="lc-specialist-note">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>' +
        '<span>' + _esc(t('s35.specialist.note')) + '</span>' +
      '</div>' +
      '<div class="lc-success-actions">' +
        (state.instagramUrl ? '<a href="' + _esc(state.instagramUrl) + '" class="lc-btn lc-btn-outline" target="_blank" rel="noopener">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>' +
          _esc(t('success.ig')) + '</a>' : '') +
        waBtn +
      '</div>' +
    '</div>'
  );

  _progress(3);
  document.getElementById('lc-topbar').hidden = false;
  _scoreBar(3, true, score - 5 < 20 ? 20 : score - 5);
  document.getElementById('lc-score-bar').hidden = false;
  _trustBlock(false);

  _track('analysis_result_viewed', { score: score, category: cat });
  _clearStorage();
}

/* ─────────────────────────────────────────────────────────────
   STEP 4 — Appointment (guided UX)
───────────────────────────────────────────────────────────── */
function _isoDateLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}


/* ── Lang switch ────────────────────────────────────────────── */
function initLang() {
  document.querySelectorAll('.lc-lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = btn.dataset.lang;
      if (lang === state.lang) return;
      state.lang = lang;
      document.documentElement.lang = lang;
      document.querySelectorAll('.lc-lang-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.lang === lang);
      });
      _save();
      const s = state.step;
      if      (s === 1)   renderStep1();
      else if (s === 1.5) renderStep15();
      else if (s === 2)   renderStep2();
      else if (s === 3)   renderStep3();
      else if (s === 3.5) renderAnalysisResult();
    });
  });
}

/* ── Offer modal ────────────────────────────────────────────── */
function initOfferModal() {
  const overlay = document.getElementById('lc-offer-overlay');
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) overlay.hidden = true;
  });
  document.getElementById('lc-offer-close').addEventListener('click', function() {
    overlay.hidden = true;
  });
}

/* ── A/B variant ────────────────────────────────────────────── */
function _initAB() {
  try {
    let v = localStorage.getItem('lc_ab');
    if (!v) { v = Math.random() < 0.5 ? 'A' : 'B'; localStorage.setItem('lc_ab', v); }
    state.abVariant = v;
  } catch (_) {}
}

/* ── Boot ───────────────────────────────────────────────────── */
async function boot() {
  _initAB();
  _restore();

  document.documentElement.lang = state.lang;
  document.querySelectorAll('.lc-lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });

  initLang();
  initOfferModal();

  try {
    const cfg = await _api('GET', '/public/lead-capture/' + SLUG);
    state.banks       = cfg.banks       || [];
    if (Array.isArray(cfg.city_options) && cfg.city_options.length) {
      KZ_CITIES = cfg.city_options;
    }
    state.instagramUrl = cfg.instagram_reviews_url || '';
    if (state.instagramUrl) {
      const igLink = document.getElementById('lc-instagram-link');
      if (igLink) igLink.href = state.instagramUrl;
    }
    if (!state.visitSent) {
      _api('POST', '/public/lead-capture/' + SLUG + '/visit', { visitor_uid: state.visitUid })
        .then(function() { state.visitSent = true; _save(); })
        .catch(function() {});
    }
  } catch (_) {}

  const s = state.step;
  if (state.phone && s >= 1.5) {
    if      (s === 1.5) renderStep15();
    else if (s === 2)   renderStep2();
    else if (s === 3)   renderStep3();
    else if (s === 3.5 && state.analysisResult) renderAnalysisResult();
    else renderStep15();
  } else {
    renderStep1();
  }
}

document.addEventListener('DOMContentLoaded', boot);
