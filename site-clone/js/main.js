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
    's35.cta':      'Продолжить к записи →',
    's4.kicker':    'Встреча',
    's4.title':     'Выберите удобный офис и время консультации',
    's4.subtitle':  'Выберите филиал, дату и время. Мы подготовим специалиста к вашему визиту.',
    's4.branch.hint': 'Сначала выберите удобный филиал',
    's4.date.hint':   'Теперь выберите удобную дату',
    's4.time.hint':   'Выберите удобное время',
    's4.branch.label': 'Шаг 1 — Выберите офис',
    's4.date.label':   'Шаг 2 — Выберите дату',
    's4.time.label':   'Шаг 3 — Выберите время',
    's4.rail.branch':  'Офис',
    's4.rail.date':    'Дата',
    's4.rail.time':    'Время',
    's4.primer.title': 'Осталось выбрать посещение',
    's4.primer.text':  'Идите по шагам ниже: сначала офис, затем дата, затем время. Активный блок подсвечен оранжевым.',
    's4.branch.choose':'Выбрать этот офис',
    's4.branch.selected':'Офис выбран',
    's4.date.today':   'Сегодня',
    's4.date.tomorrow':'Завтра',
    's4.date.other':   'Другая дата',
    's4.nolocal':      'В вашем городе пока нет офиса. Выберите ближайший:',
    's4.nobranch':     'Нет доступных офисов.',
    's4.summary.title':'Ваша консультация',
    's4.summary.branch': 'Офис',
    's4.summary.date':   'Дата',
    's4.summary.time':   'Время',
    's4.summary.addr':   'Адрес',
    's4.summary.name':   'Имя',
    's4.summary.phone':  'Телефон',
    's4.cta':       'Закрепить время →',
    's4.err.branch':'Выберите офис',
    's4.err.date':  'Выберите дату',
    's4.err.time':  'Выберите время',
    'success.title':    'Вы записаны!',
    'success.sub':      'Мы ждём вас в офисе',
    'success.branch':   'Офис',
    'success.datetime': 'Дата и время',
    'success.name':     'Имя',
    'success.note':     'Наш менеджер свяжется с вами для подтверждения.',
    'success.ig':       'Смотрите отзывы в Instagram',
    'success.wa':       'Проверка кредитной истории близких',
    'success.wa.msg':   'Проверь вероятность одобрения ипотеки онлайн, бесплатно за 2 минуты 👉 ',
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
    'assist.banks.title': 'Следующий шаг - запись в офис',
    'assist.banks.caption': 'Подбор предварительный. Следующий шаг - выбрать офис и время.',
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
    's35.cta':      'Жазылуға өту →',
    's4.kicker':    'Кездесу',
    's4.title':     'Ыңғайлы кеңсе мен кеңес алу уақытын таңдаңыз',
    's4.subtitle':  'Филиалды, күнді және уақытты таңдаңыз. Сіздің келуіңізге маман дайындаймыз.',
    's4.branch.hint': 'Алдымен ыңғайлы филиалды таңдаңыз',
    's4.date.hint':   'Енді ыңғайлы күнді таңдаңыз',
    's4.time.hint':   'Ыңғайлы уақытты таңдаңыз',
    's4.branch.label': '1-қадам — Кеңсені таңдаңыз',
    's4.date.label':   '2-қадам — Күнді таңдаңыз',
    's4.time.label':   '3-қадам — Уақытты таңдаңыз',
    's4.rail.branch':  'Кеңсе',
    's4.rail.date':    'Күн',
    's4.rail.time':    'Уақыт',
    's4.primer.title': 'Келу уақытын таңдаңыз',
    's4.primer.text':  'Төмендегі қадамдармен өтіңіз: алдымен кеңсе, кейін күн, кейін уақыт. Белсенді блок қызғылт түспен белгіленген.',
    's4.branch.choose':'Осы кеңсені таңдау',
    's4.branch.selected':'Кеңсе таңдалды',
    's4.date.today':   'Бүгін',
    's4.date.tomorrow':'Ертең',
    's4.date.other':   'Басқа күн',
    's4.nolocal':      'Сіздің қалаңызда кеңсе жоқ. Жақын кеңседен таңдаңыз:',
    's4.nobranch':     'Қолжетімді кеңселер жоқ.',
    's4.summary.title':'Сіздің кеңесіңіз',
    's4.summary.branch': 'Кеңсе',
    's4.summary.date':   'Күн',
    's4.summary.time':   'Уақыт',
    's4.summary.addr':   'Мекенжай',
    's4.summary.name':   'Аты',
    's4.summary.phone':  'Телефон',
    's4.cta':       'Уақытты бекіту →',
    's4.err.branch':'Кеңсені таңдаңыз',
    's4.err.date':  'Күнді таңдаңыз',
    's4.err.time':  'Уақытты таңдаңыз',
    'success.title':    'Жазылдыңыз!',
    'success.sub':      'Сізді кеңседе күтеміз',
    'success.branch':   'Кеңсе',
    'success.datetime': 'Күн мен уақыт',
    'success.name':     'Аты',
    'success.note':     'Менеджеріміз растау үшін сізбен байланысады.',
    'success.ig':       'Instagram-дағы пікірлерді қараңыз',
    'success.wa':       'Жақындарыңыздың несие тарихын тексеру',
    'success.wa.msg':   'Ипотеканы мақұлдау ықтималдығын онлайн тексер, 2 минутта тегін 👉 ',
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
    'assist.banks.title': 'Келесі қадам - офиске жазылу',
    'assist.banks.caption': 'Іріктеу алдын ала. Келесі қадам - офис пен уақыт таңдау.',
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
const INITIAL_MODE = URL_PARAMS.get('mode') || '';
const INITIAL_CLIENT_TOKEN = URL_PARAMS.get('client_token') || '';
const IS_APPOINTMENT_ONLY = INITIAL_MODE === 'appointment' && INITIAL_CLIENT_TOKEN.length > 8;
const STORAGE_KEY = 'lc_' + SLUG + (IS_APPOINTMENT_ONLY ? '_' + INITIAL_CLIENT_TOKEN : '');

const state = {
  lang: 'ru',
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
  /* step 4 booking */
  bookingStage: 'branch_required',
  appointmentOnly: IS_APPOINTMENT_ONLY,
  selectedBranch: null,
  selectedDate: null,
  selectedTime: null,
  bookingIntroSeen: false,
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
      bookingStage: state.bookingStage,
      selectedBranch: state.selectedBranch,
      selectedDate: state.selectedDate,
      selectedTime: state.selectedTime,
      bookingIntroSeen: state.bookingIntroSeen,
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
function _nextWorkDays(count) {
  const days = [];
  const d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function _fmtDate(d) {
  const DD = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
  const MM = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
  return DD[d.getDay()] + ', ' + d.getDate() + ' ' + MM[d.getMonth()];
}

function _fmtDateKk(d) {
  const DD = ['Жс','Дс','Сс','Ср','Бс','Жм','Сб'];
  const MM = ['қаң','ақп','нау','сәу','мам','мау','шіл','там','қыр','қаз','қар','жел'];
  return DD[d.getDay()] + ', ' + d.getDate() + ' ' + MM[d.getMonth()];
}

function _fmtDateFull(iso) {
  const d = _astanaDateFromIso(iso);
  return state.lang === 'kk' ? _fmtDateKk(d) : _fmtDate(d);
}

function _chipDate(d) { return state.lang === 'kk' ? _fmtDateKk(d) : _fmtDate(d); }

const TIME_SLOTS = ['10:00','10:30','11:00','11:30','12:00','12:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'];
const SATURDAY_TIME_SLOTS = ['11:00','11:30','12:00','12:30','14:00','14:30','15:00','15:30','16:00','16:30'];
const ASTANA_MANGILIK_WEEKDAY_TIME_SLOTS = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'];
const ASTANA_MANGILIK_WEEKEND_TIME_SLOTS = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'];
const APPOINTMENT_TIME_ZONE = 'Asia/Almaty';
const APPOINTMENT_UTC_OFFSET = '+05:00';

function _astanaDateParts(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: APPOINTMENT_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date || new Date()).reduce(function(acc, part) {
    if (part.type !== 'literal') acc[part.type] = part.value;
    return acc;
  }, {});
  return {
    iso: parts.year + '-' + parts.month + '-' + parts.day,
    minutes: parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10),
  };
}

function _astanaTodayIso() {
  return _astanaDateParts(new Date()).iso;
}

function _astanaNowMinutes() {
  return _astanaDateParts(new Date()).minutes;
}

function _astanaDateFromIso(iso) {
  return new Date(String(iso || '') + 'T12:00:00' + APPOINTMENT_UTC_OFFSET);
}

function _addAstanaDaysIso(iso, days) {
  const d = _astanaDateFromIso(iso);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function _slotMinutes(timeText) {
  const parts = String(timeText || '').split(':').map(function(part) { return parseInt(part, 10); });
  if (parts.length < 2 || parts.some(function(part) { return Number.isNaN(part); })) return null;
  return parts[0] * 60 + parts[1];
}

function _dayOfWeekIso(iso) {
  const d = _astanaDateFromIso(iso);
  return d.getDay();
}

function _selectedBranchData() {
  return (state.branches || []).find(function(b) { return b.id === state.selectedBranch; }) || null;
}

function _isAstanaMangilikSchedule(branch) {
  return !!branch && branch.schedule_key === 'astana_mangilik_el';
}

function _isClosedDateIso(iso, branch) {
  const day = _dayOfWeekIso(iso);
  return day === 0 && !_isAstanaMangilikSchedule(branch);
}

function _timeSlotsForDate(dateIso, branch) {
  const selectedBranch = branch || _selectedBranchData();
  if (!dateIso) return _isAstanaMangilikSchedule(selectedBranch) ? ASTANA_MANGILIK_WEEKDAY_TIME_SLOTS : TIME_SLOTS;
  const day = _dayOfWeekIso(dateIso);
  if (_isAstanaMangilikSchedule(selectedBranch)) {
    return day >= 5 ? ASTANA_MANGILIK_WEEKEND_TIME_SLOTS : ASTANA_MANGILIK_WEEKDAY_TIME_SLOTS;
  }
  if (day === 0) return [];
  if (day === 6) return SATURDAY_TIME_SLOTS;
  return TIME_SLOTS;
}

function _isWithinAppointmentHours(dateIso, timeText, branch) {
  if (!dateIso || !timeText) return false;
  return _timeSlotsForDate(dateIso, branch).indexOf(timeText) !== -1;
}

function _isPastAppointmentSlot(dateIso, timeText) {
  if (!dateIso || !timeText) return false;
  const todayIso = _astanaTodayIso();
  if (dateIso < todayIso) return true;
  if (dateIso > todayIso) return false;
  const minutes = _slotMinutes(timeText);
  return minutes !== null && minutes <= _astanaNowMinutes();
}

function _hasAvailableSlots(dateIso, branch) {
  return _timeSlotsForDate(dateIso, branch).some(function(tm) { return !_isPastAppointmentSlot(dateIso, tm); });
}

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

  try {
    if (!state.visitSent) {
      await _api('POST', '/public/lead-capture/' + SLUG + '/visit', { visitor_uid: state.visitUid }).catch(function() {});
      state.visitSent = true;
    }
    const phoneNorm = digits.length === 10 ? '7' + digits : digits;
    const res = await _api('POST', '/public/lead-capture/' + SLUG + '/phone', {
      phone: phoneNorm,
      offer_accepted: state.offerAccepted,
      visitor_uid: state.visitUid,
      form_language: state.lang,
      landing_version: state.abVariant,
    });
    state.clientToken = res.client_token;
    state.score = 20;
    _save();
    _track('step_1_completed', { step: 1 });
    renderStep15();
  } catch (err) {
    btn.disabled = false;
    btn.textContent = t('s1.cta');
    _showAlert(btn.parentNode, btn, err.message || 'Ошибка. Попробуйте снова.');
  }
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

async function selectProduct(product) {
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
  if (state.clientToken) {
    try {
      await _api('PATCH', '/public/lead-capture/leads/' + state.clientToken + '/service-type', {
        service_type: product,
        form_language: state.lang,
      });
    } catch (error) {
      _track('product_service_type_failed', { product, error: error.message || 'unknown' });
    }
  }
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

  const btn = document.getElementById('lc-s2-submit');
  btn.disabled = true;
  btn.innerHTML = '<div class="lc-spinner"></div>';

  try {
    await _api('PATCH', '/public/lead-capture/leads/' + state.clientToken + '/profile', {
      full_name: state.name.trim(),
      city: state.city,
      target_city: state.targetCity,
      form_language: state.lang,
      service_type: state.product,
    });
    state.score = Math.max(state.score, 35);
    _save();
    _track('step_2_completed', { step: 2 });
    renderStep3();
  } catch (err) {
    btn.disabled = false;
    btn.textContent = t('s2.cta');
    _showAlert(btn.parentNode, btn, err.message || 'Ошибка. Попробуйте снова.');
  }
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
  if (!state.clientToken) { renderStep1(); return; }
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

  const quizPayload = {
    delinquency_status: q1val,
    down_payment_status: q2val,
    down_payment_percent_range: (q2val && q2val !== 'none') ? q2val : null,
    down_payment_amount: null,
    income_confirmation_type: q3val,
    monthly_income_status: _isCredit() ? q3val : null,
    credit_income_range: _isCredit() ? q3val : null,
    credit_burden_status: q4val,
    preapproval_score: state.score,
    form_language: state.lang,
    service_type: state.product,
  };

  try {
    const res = await _api('PATCH', '/public/lead-capture/leads/' + state.clientToken + '/quiz', quizPayload);
    /* Use server analysis if available, fallback to local */
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
    _track('step_3_completed', { step: 3, score: state.score });
    state.step = 3.5;
    _save();
    await new Promise(function(r) { setTimeout(r, 1200); });
    renderAnalysisResult();
  } catch (err) {
    state.analysisResult = _localAnalysis(state.score);
    state.step = 3.5;
    _save();
    await new Promise(function(r) { setTimeout(r, 1200); });
    renderAnalysisResult();
  }
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
      '<div class="lc-cta-wrap">' +
        '<button class="lc-btn lc-btn-primary" id="lc-s35-cta">' + _esc(_isCredit() ? t('s35.cta.credit') : t('s35.cta')) + '</button>' +
      '</div>' +
      _autoAssistHtml('banks', 10) +
    '</div>'
  );

  _progress(3);
  document.getElementById('lc-topbar').hidden = false;
  _scoreBar(3, true, score - 5 < 20 ? 20 : score - 5);
  document.getElementById('lc-score-bar').hidden = false;
  _trustBlock(false);

  _track('analysis_result_viewed', { score: score, category: cat });

  document.getElementById('lc-s35-cta').addEventListener('click', function() {
    _track('banks_continue_clicked');
    renderStep4();
  });
  _startAutoAssist('banks', 10, function() {
    if (state.step === 3.5) {
      _track('banks_auto_continue');
      renderStep4();
    }
  });
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

function _buildDateChips() {
  const chips = [];
  const selectedBranch = _selectedBranchData();
  const todayIso = _astanaTodayIso();
  const today = _astanaDateFromIso(todayIso);
  const tomorrowIso = _addAstanaDaysIso(todayIso, 1);

  /* Сегодня показываем, пока внутри текущего дня есть будущие слоты. */
  if (!_isClosedDateIso(todayIso, selectedBranch) && _hasAvailableSlots(todayIso, selectedBranch)) {
    chips.push({ date: todayIso, label: t('s4.date.today') });
  }

  /* Next 4 workdays */
  let iso = _addAstanaDaysIso(todayIso, 1);
  let added = 0;
  while (added < 4) {
    const d = _astanaDateFromIso(iso);
    if (!_isClosedDateIso(iso, selectedBranch)) {
      const label = iso === tomorrowIso ? t('s4.date.tomorrow') : _chipDate(d);
      chips.push({ date: iso, label });
      added++;
    }
    iso = _addAstanaDaysIso(iso, 1);
  }

  return chips;
}

function _dateFromIsoLocal(iso) {
  const parts = String(iso || '').split('-').map(function(part) { return parseInt(part, 10); });
  if (parts.length !== 3 || parts.some(function(part) { return Number.isNaN(part); })) return null;
  return _astanaDateFromIso(iso);
}

function _isSundayIso(iso) {
  const date = _dateFromIsoLocal(iso);
  return date ? date.getDay() === 0 : false;
}

function _showClosedDateError(dateErr) {
  if (!dateErr) return;
  dateErr.textContent = state.lang === 'kk'
    ? 'Жексенбіге жазылу жоқ. Басқа күнді таңдаңыз.'
    : 'В воскресенье запись недоступна. Выберите другой день.';
  dateErr.classList.add('visible');
}

function _clearDateError() {
  const dateErr = document.getElementById('lc-date-err');
  if (!dateErr) return;
  dateErr.textContent = '';
  dateErr.classList.remove('visible');
}

function _refreshTimeButtons() {
  document.querySelectorAll('.lc-time-btn').forEach(function(btn) {
    const allowedByHours = !state.selectedDate || _isWithinAppointmentHours(state.selectedDate, btn.dataset.time);
    const disabled = !state.selectedDate || !allowedByHours || _isPastAppointmentSlot(state.selectedDate, btn.dataset.time);
    btn.hidden = state.selectedDate ? !allowedByHours : false;
    btn.disabled = disabled;
    btn.classList.toggle('disabled', disabled);
    btn.classList.toggle('selected', !disabled && btn.dataset.time === state.selectedTime);
    if (disabled) {
      btn.setAttribute('aria-disabled', 'true');
      if (btn.dataset.time === state.selectedTime) state.selectedTime = null;
    } else {
      btn.removeAttribute('aria-disabled');
    }
  });
}

function _bookingRailHtml() {
  const steps = [
    { key: 'branch', label: t('s4.rail.branch'), done: !!state.selectedBranch, active: !state.selectedBranch },
    { key: 'date', label: t('s4.rail.date'), done: !!state.selectedDate, active: !!state.selectedBranch && !state.selectedDate },
    { key: 'time', label: t('s4.rail.time'), done: !!state.selectedTime, active: !!state.selectedDate && !state.selectedTime },
  ];
  return steps.map(function(step, index) {
    const cls = step.done ? ' done' : step.active ? ' active' : '';
    return '<div class="lc-booking-step-chip' + cls + '">' +
      '<span>' + (step.done ? '✓' : (index + 1)) + '</span>' +
      '<b>' + _esc(step.label) + '</b>' +
    '</div>';
  }).join('');
}

function _updateBookingStage(branches) {
  const hasB = !!state.selectedBranch;
  const hasD = !!state.selectedDate;
  const hasT = !!state.selectedTime;

  const rail = document.getElementById('lc-booking-rail');
  const bSection = document.getElementById('lc-booking-branch');
  const dSection = document.getElementById('lc-booking-date');
  const tSection = document.getElementById('lc-booking-time');
  const sumWrap  = document.getElementById('lc-summary-wrap');
  const cta      = document.getElementById('lc-s4-submit');

  if (!bSection) return;

  if (rail) rail.innerHTML = _bookingRailHtml();

  bSection.className = 'lc-booking-section' + (hasB ? ' done' : ' active');
  dSection.className = 'lc-booking-section' + (!hasB ? ' locked' : hasD ? ' done' : ' active');
  tSection.className = 'lc-booking-section' + (!hasD ? ' locked' : hasT ? ' done' : ' active');

  if (cta) cta.disabled = !(hasB && hasD && hasT);

  if (sumWrap) {
    if (hasB && hasD && hasT) {
      const selBranch = (branches || state.branches).find(function(b) { return b.id === state.selectedBranch; });
      sumWrap.hidden = false;
      sumWrap.innerHTML =
        '<div class="lc-booking-summary">' +
          '<h3 class="lc-summary-title">' + _esc(t('s4.summary.title')) + '</h3>' +
          '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.branch')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(selBranch ? selBranch.name : '') + '</span>' +
          '</div>' +
          '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.date')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(_fmtDateFull(state.selectedDate)) + '</span>' +
          '</div>' +
          '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.time')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(state.selectedTime) + '</span>' +
          '</div>' +
          (selBranch && selBranch.address ? '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.addr')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(selBranch.address) + '</span>' +
          '</div>' : '') +
          '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.name')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(state.name) + '</span>' +
          '</div>' +
          '<div class="lc-booking-row">' +
            '<span class="lc-booking-key">' + _esc(t('s4.summary.phone')) + '</span>' +
            '<span class="lc-booking-val">' + _esc(_formatPhone(state.phone)) + '</span>' +
          '</div>' +
        '</div>';
    } else {
      sumWrap.hidden = true;
      sumWrap.innerHTML = '';
    }
  }

  /* Scroll to next active section */
  if (!hasB) {
    /* already at top */
  } else if (!hasD) {
    setTimeout(function() {
      dSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 120);
  } else if (!hasT) {
    setTimeout(function() {
      tSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 120);
  }
}

function renderStep4() {
  state.step = 4;
  const selectedBranchForSchedule = _selectedBranchData();
  if (state.selectedDate && _isClosedDateIso(state.selectedDate, selectedBranchForSchedule)) {
    state.selectedDate = null;
    state.selectedTime = null;
    _save();
  }
  if (_isPastAppointmentSlot(state.selectedDate, state.selectedTime)) {
    state.selectedTime = null;
    _save();
  }
  if (state.selectedDate && state.selectedTime && !_isWithinAppointmentHours(state.selectedDate, state.selectedTime, selectedBranchForSchedule)) {
    state.selectedTime = null;
    _save();
  }
  const city = (state.targetCity || '').toLowerCase();
  const filtered = city
    ? state.branches.filter(function(b) { return b.city && b.city.toLowerCase().includes(city); })
    : state.branches;
  const noLocal  = city && filtered.length === 0 && state.branches.length > 0;
  const branches = filtered.length > 0 ? filtered : state.branches;

  const noticeBanner = noLocal
    ? '<div class="lc-booking-notice">' + _esc(t('s4.nolocal')) + '</div>'
    : '';
  const branchCards = branches.length
    ? noticeBanner + branches.map(function(b) {
        const sel = state.selectedBranch === b.id;
        return '<div class="lc-branch-card' + (sel ? ' selected' : '') + '" data-id="' + b.id + '" role="button" tabindex="0">' +
          (sel ? '<span class="lc-branch-check">✓</span>' : '') +
          '<div class="lc-branch-name">' + _esc(b.name || '') + '</div>' +
          '<div class="lc-branch-addr">' + _esc(b.address || '') + '</div>' +
          (b.working_hours ? '<div class="lc-branch-meta"><span class="lc-branch-slot">' + _esc(b.working_hours) + '</span></div>' : '') +
          (b.map_url ? '<a class="lc-branch-map" href="' + _esc(b.map_url) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Карта</a>' : '') +
          '<div class="lc-branch-action">' + _esc(sel ? t('s4.branch.selected') : t('s4.branch.choose')) + '</div>' +
        '</div>';
      }).join('')
    : '<div class="lc-booking-empty">' + _esc(t('s4.nobranch')) + '</div>';

  const dateChips = _buildDateChips().map(function(chip) {
    const sel = state.selectedDate === chip.date;
    return '<button type="button" class="lc-date-chip' + (sel ? ' selected' : '') + '" data-date="' + chip.date + '">' + _esc(chip.label) + '</button>';
  }).join('') +
  '<button type="button" class="lc-date-chip lc-date-other" id="lc-date-other-btn">' + _esc(t('s4.date.other')) + '</button>' +
  '<input type="date" id="lc-date-picker" class="lc-date-picker" style="display:none" min="' + _astanaTodayIso() + '">';

  const visibleTimeSlots = state.selectedDate ? _timeSlotsForDate(state.selectedDate, selectedBranchForSchedule) : _timeSlotsForDate(null, selectedBranchForSchedule);
  const timeGrid = visibleTimeSlots.map(function(tm) {
    const sel = state.selectedTime === tm;
    const allowedByHours = !state.selectedDate || _isWithinAppointmentHours(state.selectedDate, tm, selectedBranchForSchedule);
    const disabled = !state.selectedDate || !allowedByHours || _isPastAppointmentSlot(state.selectedDate, tm);
    return '<button type="button" class="lc-time-btn' + (sel ? ' selected' : '') + (disabled ? ' disabled' : '') + '" data-time="' + tm + '"' + (disabled ? ' disabled aria-disabled="true"' : '') + (state.selectedDate && !allowedByHours ? ' hidden' : '') + '>' + tm + '</button>';
  }).join('');

  _setContent(
    '<div class="lc-step-head">' +
      '<div class="lc-kicker">' + _esc(t('s4.kicker')) + '</div>' +
      '<h2>' + _esc(t('s4.title')) + '</h2>' +
      '<p class="lc-step-subtitle">' + _esc(t('s4.subtitle')) + '</p>' +
    '</div>' +

    '<div class="lc-booking-primer">' +
      '<div><b>' + _esc(t('s4.primer.title')) + '</b><span>' + _esc(t('s4.primer.text')) + '</span></div>' +
      '<div class="lc-booking-rail" id="lc-booking-rail">' + _bookingRailHtml() + '</div>' +
    '</div>' +

    '<div class="lc-booking-flow">' +
      /* Branch */
      '<div class="lc-booking-section" id="lc-booking-branch">' +
        '<div class="lc-booking-section-head">' +
          '<div class="lc-booking-num">1</div>' +
          '<div class="lc-booking-section-title">' + _esc(t('s4.branch.label')) + '</div>' +
          '<div class="lc-booking-arrow">↓</div>' +
        '</div>' +
        '<div class="lc-booking-hint" id="lc-branch-hint">' + _esc(t('s4.branch.hint')) + '</div>' +
        '<div class="lc-branches" id="lc-branches">' + branchCards + '</div>' +
        '<span class="lc-err" id="lc-branch-err"></span>' +
      '</div>' +

      /* Date */
      '<div class="lc-booking-section" id="lc-booking-date">' +
        '<div class="lc-booking-section-head">' +
          '<div class="lc-booking-num">2</div>' +
          '<div class="lc-booking-section-title">' + _esc(t('s4.date.label')) + '</div>' +
          '<div class="lc-booking-arrow">↓</div>' +
        '</div>' +
        '<div class="lc-booking-hint">' + _esc(t('s4.date.hint')) + '</div>' +
        '<div class="lc-date-chips" id="lc-dates">' + dateChips + '</div>' +
        '<span class="lc-err" id="lc-date-err"></span>' +
      '</div>' +

      /* Time */
      '<div class="lc-booking-section" id="lc-booking-time">' +
        '<div class="lc-booking-section-head">' +
          '<div class="lc-booking-num">3</div>' +
          '<div class="lc-booking-section-title">' + _esc(t('s4.time.label')) + '</div>' +
        '</div>' +
        '<div class="lc-booking-hint">' + _esc(t('s4.time.hint')) + '</div>' +
        '<div class="lc-time-grid" id="lc-times">' + timeGrid + '</div>' +
        '<span class="lc-err" id="lc-time-err"></span>' +
      '</div>' +

      /* Summary */
      '<div id="lc-summary-wrap" hidden></div>' +
    '</div>' +

    '<div class="lc-cta-wrap">' +
      '<button class="lc-btn lc-btn-primary" id="lc-s4-submit" disabled>' + _esc(t('s4.cta')) + '</button>' +
    '</div>'
  );

  _progress(4);
  _scoreBar(4, true, state.score);
  _trustBlock(false);

  /* Set initial booking stage */
  _updateBookingStage(branches);
  _refreshTimeButtons();

  /* Branch click */
  document.getElementById('lc-branches').addEventListener('click', function(e) {
    const card = e.target.closest('.lc-branch-card[data-id]');
    if (!card) return;
    const newId = parseInt(card.dataset.id);
    if (state.selectedBranch !== newId) {
      state.selectedDate = null;
      state.selectedTime = null;
      /* Reset date/time UI */
      document.querySelectorAll('.lc-date-chip').forEach(function(c) { c.classList.remove('selected'); });
      document.querySelectorAll('.lc-time-btn').forEach(function(b) { b.classList.remove('selected'); });
      _refreshTimeButtons();
    }
    state.selectedBranch = newId;
    document.querySelectorAll('.lc-branch-card').forEach(function(c) {
      const isSel = parseInt(c.dataset.id) === state.selectedBranch;
      c.classList.toggle('selected', isSel);
      const chk = c.querySelector('.lc-branch-check');
      if (isSel && !chk) {
        c.insertAdjacentHTML('afterbegin', '<span class="lc-branch-check">✓</span>');
      } else if (!isSel && chk) {
        chk.remove();
      }
    });
    document.getElementById('lc-branch-err').classList.remove('visible');
    _track('branch_selected', { branch_id: state.selectedBranch });
    _save();
    renderStep4();
  });

  /* Date click */
  document.getElementById('lc-dates').addEventListener('click', function(e) {
    const chip = e.target.closest('.lc-date-chip:not(.lc-date-other)');
    if (chip) {
      state.selectedDate = chip.dataset.date;
      state.selectedTime = null;
      document.querySelectorAll('.lc-date-chip').forEach(function(c) {
        c.classList.toggle('selected', c.dataset.date === state.selectedDate);
      });
      document.querySelectorAll('.lc-time-btn').forEach(function(b) { b.classList.remove('selected'); });
      _refreshTimeButtons();
      _clearDateError();
      _track('date_selected', { date: state.selectedDate });
      _save();
      _updateBookingStage(branches);
    }
    if (e.target.closest('.lc-date-other')) {
      const picker = document.getElementById('lc-date-picker');
      picker.style.display = 'block';
      picker.focus();
      picker.click();
    }
  });

  const picker = document.getElementById('lc-date-picker');
  if (picker) {
    picker.addEventListener('change', function() {
      if (!picker.value) return;
      if (_isClosedDateIso(picker.value, _selectedBranchData())) {
        state.selectedDate = null;
        state.selectedTime = null;
        picker.value = '';
        document.querySelectorAll('.lc-date-chip').forEach(function(c) { c.classList.remove('selected'); });
        document.querySelectorAll('.lc-time-btn').forEach(function(b) { b.classList.remove('selected'); });
        _refreshTimeButtons();
        _showClosedDateError(document.getElementById('lc-date-err'));
        _save();
        _updateBookingStage(branches);
        return;
      }
      state.selectedDate = picker.value;
      state.selectedTime = null;
      document.querySelectorAll('.lc-date-chip').forEach(function(c) { c.classList.remove('selected'); });
      document.querySelectorAll('.lc-time-btn').forEach(function(b) { b.classList.remove('selected'); });
      _refreshTimeButtons();
      /* Add chip for picked date or mark other */
      const otherBtn = document.getElementById('lc-date-other-btn');
      if (otherBtn) otherBtn.classList.add('selected');
      _clearDateError();
      _track('date_selected', { date: state.selectedDate });
      _save();
      _updateBookingStage(branches);
    });
  }

  /* Time click */
  document.getElementById('lc-times').addEventListener('click', function(e) {
    const btn = e.target.closest('.lc-time-btn');
    if (!btn) return;
    if (btn.disabled || btn.classList.contains('disabled')) return;
    state.selectedTime = btn.dataset.time;
    document.querySelectorAll('.lc-time-btn').forEach(function(b) {
      b.classList.toggle('selected', b.dataset.time === state.selectedTime);
    });
    document.getElementById('lc-time-err').classList.remove('visible');
    _track('time_selected', { time: state.selectedTime });
    _save();
    _updateBookingStage(branches);
  });

  document.getElementById('lc-s4-submit').addEventListener('click', submitStep4);
  _track('booking_step_opened');
}

async function submitStep4() {
  const branchErr = document.getElementById('lc-branch-err');
  const dateErr   = document.getElementById('lc-date-err');
  const timeErr   = document.getElementById('lc-time-err');
  let ok = true;

  if (!state.selectedBranch) { branchErr.textContent = t('s4.err.branch'); branchErr.classList.add('visible'); ok = false; }
  if (!state.selectedDate)   { dateErr.textContent   = t('s4.err.date');   dateErr.classList.add('visible');   ok = false; }
  if (state.selectedDate && _isClosedDateIso(state.selectedDate, _selectedBranchData())) { _showClosedDateError(dateErr); ok = false; }
  if (!state.selectedTime)   { timeErr.textContent   = t('s4.err.time');   timeErr.classList.add('visible');   ok = false; }
  if (state.selectedDate && state.selectedTime && !_isWithinAppointmentHours(state.selectedDate, state.selectedTime, _selectedBranchData())) {
    state.selectedTime = null;
    _refreshTimeButtons();
    timeErr.textContent = 'В выбранный день это время недоступно. Выберите другой слот.';
    timeErr.classList.add('visible');
    ok = false;
  }
  if (state.selectedDate && state.selectedTime && _isPastAppointmentSlot(state.selectedDate, state.selectedTime)) {
    state.selectedTime = null;
    _refreshTimeButtons();
    timeErr.textContent = 'Это время уже прошло. Выберите другое время.';
    timeErr.classList.add('visible');
    ok = false;
  }
  if (!ok) return;

  const btn = document.getElementById('lc-s4-submit');
  btn.disabled = true;
  btn.innerHTML = '<div class="lc-spinner"></div>';

  const apptDt = new Date(state.selectedDate + 'T' + state.selectedTime + ':00' + APPOINTMENT_UTC_OFFSET);

  try {
    await _api('POST', '/public/lead-capture/leads/' + state.clientToken + '/appointment', {
      branch_id: state.selectedBranch,
      appointment_datetime: apptDt.toISOString(),
      form_language: state.lang,
      service_type: state.product,
    });
    _track('appointment_booked', { step: 4, branch_id: state.selectedBranch });
    _clearStorage();
    renderSuccess();
  } catch (err) {
    btn.disabled = false;
    btn.textContent = t('s4.cta');
    _showAlert(btn.parentNode, btn, err.message || 'Ошибка. Попробуйте снова.');
  }
}

/* ─────────────────────────────────────────────────────────────
   Success
───────────────────────────────────────────────────────────── */
function _waShareBtn() {
  var shareUrl = window.location.origin + '/stream/' + SLUG;
  var msg = encodeURIComponent(t('success.wa.msg') + shareUrl);
  return '<a href="https://wa.me/?text=' + msg + '" class="lc-btn lc-btn-wa" target="_blank" rel="noopener" onclick="_track(\'whatsapp_share_clicked\')">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    _esc(t('success.wa')) + '</a>';
}

function renderSuccess() {
  const branch = state.branches.find(function(b) { return b.id === state.selectedBranch; });
  const dt = (state.selectedDate ? _fmtDateFull(state.selectedDate) : '') + ' ' + (state.selectedTime || '');

  _setContent(
    '<div class="lc-success">' +
      '<div class="lc-success-stage" aria-hidden="true">' +
        '<span class="lc-success-burst burst-a"></span>' +
        '<span class="lc-success-burst burst-b"></span>' +
        '<span class="lc-success-spark spark-1"></span>' +
        '<span class="lc-success-spark spark-2"></span>' +
        '<span class="lc-success-spark spark-3"></span>' +
        '<span class="lc-success-spark spark-4"></span>' +
        '<span class="lc-success-spark spark-5"></span>' +
        '<span class="lc-success-spark spark-6"></span>' +
        '<div class="lc-success-icon">' +
          '<svg viewBox="0 0 24 24" fill="none"><polyline points="4,12 9,17 20,7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</div>' +
      '</div>' +
      '<h2>' + _esc(t('success.title')) + '</h2>' +
      '<p>' + _esc(t('success.sub')) + '</p>' +
      '<div class="lc-success-detail">' +
        '<div class="lc-success-row">' +
          '<span class="lc-success-k">' + _esc(t('success.branch')) + '</span>' +
          '<span class="lc-success-v">' + _esc(branch ? branch.name : '') + '</span>' +
        '</div>' +
        '<div class="lc-success-row">' +
          '<span class="lc-success-k">' + _esc(t('success.datetime')) + '</span>' +
          '<span class="lc-success-v">' + _esc(dt) + '</span>' +
        '</div>' +
        '<div class="lc-success-row">' +
          '<span class="lc-success-k">' + _esc(t('success.name')) + '</span>' +
          '<span class="lc-success-v">' + _esc(state.name) + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="lc-success-note">' + _esc(t('success.note')) + '</p>' +
      '<div class="lc-success-actions">' +
        (state.instagramUrl ? '<a href="' + _esc(state.instagramUrl) + '" class="lc-btn lc-btn-outline" target="_blank" rel="noopener" onclick="_track(\'instagram_reviews_clicked\')">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>' +
          _esc(t('success.ig')) + '</a>' : '') +
        _waShareBtn() +
      '</div>' +
    '</div>'
  );

  document.getElementById('lc-topbar').hidden  = true;
  document.getElementById('lc-score-bar').hidden = true;
  document.getElementById('lc-trust').hidden    = true;
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
      else if (s === 4)   renderStep4();
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
  if (IS_APPOINTMENT_ONLY) {
    state.appointmentOnly = true;
    state.clientToken = INITIAL_CLIENT_TOKEN;
    state.step = 4;
    state.score = Math.max(state.score || 20, 75);
  }

  document.documentElement.lang = state.lang;
  document.querySelectorAll('.lc-lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });

  initLang();
  initOfferModal();

  try {
    const cfg = await _api('GET', '/public/lead-capture/' + SLUG);
    state.branches    = cfg.branches    || [];
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

  if (state.appointmentOnly && state.clientToken) {
    renderStep4();
    return;
  }

  const s = state.step;
  if (state.clientToken && s >= 1.5) {
    if      (s === 1.5) renderStep15();
    else if (s === 2)   renderStep2();
    else if (s === 3)   renderStep3();
    else if (s === 3.5 && state.analysisResult) renderAnalysisResult();
    else if (s === 4)   renderStep4();
    else renderStep15();
  } else {
    renderStep1();
  }
}

document.addEventListener('DOMContentLoaded', boot);
