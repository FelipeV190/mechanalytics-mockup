/* Mechanalytics · mockup funcional
   SPA sin dependencias: cada pantalla es una función que devuelve HTML.
   Los clics se manejan por delegación con data-go (navegar) y data-act (acción). */
'use strict';

/* ================= íconos ================= */
const P = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  bus: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M3 10h18M7 17v3M17 17v3M7 14h.01M17 14h.01"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  back: '<path d="m15 6-6 6 6 6"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  thermo: '<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2M6 11v2"/>',
  gauge: '<path d="M12 14 15 9"/><path d="M3.3 17a9 9 0 1 1 17.4 0"/>',
  sun: '<path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  bt: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 17v5"/>',
  rpm: '<path d="M12 14 15 9"/><path d="M3.3 17a9 9 0 1 1 17.4 0"/>',
  drop: '<path d="M12 2.7 6.3 8.3a8 8 0 1 0 11.3 0z"/>',
  fuel: '<path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M3 22h12M15 10h2a2 2 0 0 1 2 2v3a2 2 0 0 0 4 0V8l-4-4"/>',
  road: '<path d="M4 20 8 4M20 20 16 4M12 6v2M12 11v2M12 16v2"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  clip: '<path d="m21.4 11-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
};
const ic = (n, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ''}</svg>`;

/* ================= datos ================= */
const NOW = new Date(2026, 10, 6, 14, 31);
const fmtCOP = (n) => 'COP ' + Math.round(n).toLocaleString('es-CO');

const store = {
  load() { try { return JSON.parse(localStorage.getItem('mecha-state') || 'null'); } catch { return null; } },
  save(s) { try { localStorage.setItem('mecha-state', JSON.stringify(s)); } catch {} },
};

function freshState() {
  return {
    vehicles: [
      { id: 'bus07', name: 'Bus 07', plate: 'WFN 482', model: 'Chevrolet NPR 2019', status: 'crit', sub: 'Ruta Suba · refrigerante 112 °C', health: 22, km: 142087, temp: 112, onRoute: true },
      { id: 'buseta03', name: 'Buseta 03', plate: 'TKL 219', model: 'Hyundai County 2018', status: 'warn', sub: 'Batería baja al arrancar', health: 62, km: 118230, temp: 89, onRoute: true },
      { id: 'bus01', name: 'Bus 01', plate: 'WFN 470', model: 'Chevrolet NPR 2017', status: 'ok', sub: '184.320 km · 90 °C', health: 88, km: 184320, temp: 90, onRoute: true },
      { id: 'bus04', name: 'Bus 04', plate: 'SXR 603', model: 'Hino Dutro 2021', status: 'ok', sub: '97.415 km · 88 °C', health: 86, km: 97415, temp: 88, onRoute: false },
      { id: 'buseta11', name: 'Buseta 11', plate: 'TKL 236', model: 'Hyundai County 2016', status: 'off', sub: 'Último dato hace 2 días', health: 0, km: 201550, temp: null, onRoute: false },
      { id: 'bus02', name: 'Bus 02', plate: 'WFN 471', model: 'Chevrolet NPR 2017', status: 'ok', sub: '176.904 km · 87 °C', health: 84, km: 176904, temp: 87, onRoute: true },
      { id: 'bus05', name: 'Bus 05', plate: 'SXR 611', model: 'Hino Dutro 2021', status: 'ok', sub: '88.210 km · 89 °C', health: 91, km: 88210, temp: 89, onRoute: true },
      { id: 'bus06', name: 'Bus 06', plate: 'SXR 612', model: 'Hino Dutro 2022', status: 'ok', sub: '61.033 km · 86 °C', health: 94, km: 61033, temp: 86, onRoute: false },
      { id: 'buseta08', name: 'Buseta 08', plate: 'TKL 224', model: 'Hyundai County 2019', status: 'ok', sub: '132.880 km · 88 °C', health: 83, km: 132880, temp: 88, onRoute: true },
      { id: 'buseta09', name: 'Buseta 09', plate: 'TKL 225', model: 'Hyundai County 2019', status: 'ok', sub: '129.412 km · 90 °C', health: 82, km: 129412, temp: 90, onRoute: false },
      { id: 'bus10', name: 'Bus 10', plate: 'WFN 498', model: 'Chevrolet NPR 2020', status: 'ok', sub: '110.367 km · 88 °C', health: 87, km: 110367, temp: 88, onRoute: true },
      { id: 'buseta12', name: 'Buseta 12', plate: 'TKL 240', model: 'Hyundai County 2020', status: 'ok', sub: '99.740 km · 87 °C', health: 89, km: 99740, temp: 87, onRoute: false },
    ],
    alerts: [
      { id: 'a1', kind: 'crit', when: '14:29', title: 'Sobretemperatura del motor (P0217)', body: 'Refrigerante en 112 °C y subiendo. Detener el vehículo.', veh: 'bus07', action: 'Ver diagnóstico', go: 'diag', unread: true },
      { id: 'a2', kind: 'prev', when: 'Hoy', title: 'Batería pierde fuerza al arrancar', body: 'Lleva 9 días bajando. Revisar batería y alternador antes de que deje varado el bus.', veh: 'buseta03', conf: 'alta', action: 'Agendar taller', sched: { title: 'Cambio de batería', type: 'Predicción' }, unread: true },
      { id: 'a3', kind: 'prev', when: 'Ayer', title: 'Consumo fuera de su patrón', body: 'Subió 12 % en dos semanas con las mismas rutas. Posible sensor de oxígeno o filtro de aire.', veh: 'bus04', conf: 'media', action: 'Agendar taller', sched: { title: 'Revisión sensor de oxígeno', type: 'Predicción' }, unread: true },
      { id: 'a4', kind: 'mant', when: 'Lun', title: 'Cambio de aceite próximo', body: 'Faltan cerca de 1.200 km según el kilometraje registrado.', veh: 'bus01', action: 'Programar', sched: { title: 'Cambio de aceite', type: 'Kilometraje' } },
    ],
    jobs: [
      { day: 10, time: '7:00 a. m.', type: 'Predicción', title: 'Cambio de batería', veh: 'buseta03' },
      { day: 12, time: '2:00 p. m.', type: 'Diagnóstico', title: 'Termostato y manguera', veh: 'bus07' },
      { day: 14, time: '8:00 a. m.', type: 'Kilometraje', title: 'Cambio de aceite', veh: 'bus01' },
    ],
    history: [
      { veh: 'bus07', d: '06', m: 'nov', title: 'Código P0217 · sobretemperatura', sub: '14:28 · refrigerante 111 °C', src: 'OBD-II' },
      { veh: 'bus07', d: '06', m: 'nov', title: 'Reporte: testigo de temperatura', sub: '14:31 · con foto del tablero', src: 'Conductor' },
      { veh: 'bus07', d: '22', m: 'oct', title: 'Cambio de aceite y filtros', sub: 'Taller aliado · 140.950 km', src: 'Taller' },
      { veh: 'bus07', d: '15', m: 'oct', title: 'Batería: arranque a 11,9 V', sub: 'Alerta preventiva cerrada', src: 'OBD-II' },
      { veh: 'bus07', d: '03', m: 'sep', title: 'Cambio de pastillas de freno', sub: 'Taller aliado · 136.410 km', src: 'Taller' },
      { veh: 'buseta03', d: '05', m: 'nov', title: 'Voltaje al arrancar: 11,9 V', sub: 'Tendencia a la baja · 9 días', src: 'OBD-II' },
      { veh: 'buseta03', d: '18', m: 'oct', title: 'Alineación y balanceo', sub: 'Taller aliado · 117.400 km', src: 'Taller' },
      { veh: 'bus01', d: '30', m: 'oct', title: 'Inspección preoperacional completa', sub: '6 de 6 puntos', src: 'Conductor' },
      { veh: 'bus01', d: '12', m: 'sep', title: 'Cambio de aceite', sub: 'Taller aliado · 180.100 km', src: 'Taller' },
    ],
    settings: { temp: '105', batt: '11,8', tire: '10', owner: true, driver: true, shop: false, weekly: true },
    checklist: [true, true, true, true, false, false],
    driverReports: [{ when: '06 nov · 14:31', what: 'Temperatura alta', note: 'Se prendió el testigo de temperatura subiendo por la Av. Suba.', status: 'Recibido por el dueño' }],
    quote: { cause: 'Termostato pegado y fuga en manguera superior', items: [['Termostato', 180000], ['Manguera superior', 95000], ['Mano de obra', 150000]], status: 'draft' },
    diagSent: false,
    plan: { tier: 3, billing: 'Mensual', adapters: 12 },
    referral: null,
  };
}

let S = Object.assign(freshState(), store.load() || {});
const save = () => store.save(S);
const V = (id) => S.vehicles.find((v) => v.id === id) || S.vehicles[0];
const unreadCount = () => S.alerts.filter((a) => a.unread).length;

// estado de UI (no persistente)
const ui = {
  fleetFilter: 'Todos', predSort: 'Por riesgo', twinVeh: 'bus07', twinTab: 'Gemelo', alertFilter: 'Todas',
  day: 10, histVeh: 'bus07', histFilter: 'Todo', pesvMonth: 'Octubre', predId: 'bat',
  link: { done: 2, searching: false, found: true, plate: 'WFN 482' }, report: { opt: 'Temperatura alta', note: '', photo: false, voice: false },
};

const PREDS = [
  { id: 'bat', comp: 'Batería', veh: 'buseta03', risk: 'alto', score: 0.88, days: 7, icon: 'battery', line: 'Falla probable en 5–10 días', head: 'Falla probable en 5 a 10 días', sub: 'La batería pierde fuerza en cada arranque.',
    metric: 'Voltaje al arrancar', unit: 'V', series: [12.42, 12.4, 12.41, 12.38, 12.36, 12.35, 12.33, 12.3, 12.31, 12.27, 12.24, 12.22, 12.2, 12.17, 12.15, 12.12, 12.1, 12.08, 12.05, 12.02, 12.0, 11.98, 11.96, 11.93, 11.92, 11.89, 11.87, 11.85, 11.83, 11.81],
    proj: [11.81, 11.65, 11.5, 11.35, 11.2], thr: 11.3, yTicks: [12.4, 11.8, 11.2],
    why: ['El voltaje al arrancar baja un poco cada día desde hace 3 semanas.', 'El motor tarda más en encender que su promedio.', 'El alternador carga normal (13,9 V): el problema está en la batería.'],
    cta: 'Agendar cambio de batería', job: 'Cambio de batería' },
  { id: 'cool', comp: 'Refrigeración', veh: 'bus07', risk: 'alto', score: 0.9, days: 0, icon: 'thermo', line: 'Ya en falla · ver diagnóstico', goto: 'diag' },
  { id: 'o2', comp: 'Sensor de oxígeno', veh: 'bus04', risk: 'medio', score: 0.55, days: 21, icon: 'spark', line: 'Ventana estimada: 2–4 semanas', head: 'Falla probable en 2 a 4 semanas', sub: 'El consumo sube con las mismas rutas.',
    metric: 'Consumo (L/100 km)', unit: 'L', series: [16.4, 16.5, 16.3, 16.6, 16.5, 16.4, 16.7, 16.6, 16.8, 16.7, 16.9, 17.0, 16.9, 17.1, 17.2, 17.3, 17.2, 17.5, 17.6, 17.5, 17.8, 17.9, 18.0, 17.9, 18.1, 18.2, 18.2, 18.3, 18.4, 18.4],
    proj: [18.4, 18.7, 19.0, 19.3, 19.6], thr: 19.2, yTicks: [19.6, 17.9, 16.2], invert: true,
    why: ['El consumo subió 12 % en dos semanas con las mismas rutas.', 'El voltaje del sensor O2 oscila menos que su patrón normal.', 'La mezcla trabaja en lazo abierto más tiempo que antes.'],
    cta: 'Agendar revisión del sensor', job: 'Revisión sensor de oxígeno' },
  { id: 'brk', comp: 'Pastillas de freno', veh: 'bus01', risk: 'bajo', score: 0.22, days: 40, icon: 'gauge', line: 'Por kilometraje: ~1.500 km', head: 'Cambio sugerido en ~1.500 km', sub: 'Calculado por kilometraje desde el último cambio.',
    metric: 'Km desde el último cambio (miles)', unit: 'k', series: Array.from({ length: 30 }, (_, i) => +(26.4 + i * 0.25).toFixed(2)),
    proj: [33.65, 34.0, 34.4, 34.8, 35.2], thr: 35, yTicks: [35.2, 30.8, 26.4], invert: true,
    why: ['El último cambio fue hace 33.500 km.', 'La vida útil promedio en esta ruta es de 35.000 km.', 'No hay códigos de falla del sistema de frenos.'],
    cta: 'Programar cambio de pastillas', job: 'Cambio de pastillas de freno' },
];
const riskBadge = (r) => ({ alto: 'b-red', medio: 'b-orange', bajo: 'b-green' })[r];
const riskColor = (r) => ({ alto: 'var(--red)', medio: 'var(--orange)', bajo: 'var(--green)' })[r];

/* ================= helpers de UI ================= */
const statusBadge = { crit: ['Crítico', 'b-red', 'var(--red)'], warn: ['Revisar', 'b-orange', 'var(--orange)'], ok: ['Normal', 'b-green', 'var(--green)'], off: ['Sin señal', 'b-gray', '#c9c9c5'] };

function tabbar(active) {
  if (S.role === 'driver') {
    const t = [['driver', 'Inicio', 'grid'], ['report', 'Reportar', 'alert'], ['myreports', 'Mis reportes', 'history']];
    return `<nav class="tabbar" style="grid-template-columns:repeat(3,1fr)">${t.map(([id, l, i]) => `<button data-go="${id}" class="${active === id ? 'on' : ''}">${ic(i)}${l}</button>`).join('')}</nav>`;
  }
  const t = [['panel', 'Flota', 'grid'], ['alerts', 'Alertas', 'alert'], ['history', 'Historial', 'history'], ['plan', 'Cuenta', 'user']];
  const n = unreadCount();
  return `<nav class="tabbar" style="grid-template-columns:repeat(4,1fr)">${t.map(([id, l, i]) => `<button data-go="${id}" class="${active === id ? 'on' : ''}">${ic(i)}${id === 'alerts' && n ? `<span class="dot-count">${n}</span>` : ''}${l}</button>`).join('')}</nav>`;
}
const header = (title, sub, right = '', backTo = 'back') => `<div class="hdr"><button class="back" data-go="${backTo}" aria-label="Volver">${ic('back')}</button><div><div class="t">${title}</div><div class="s">${sub}</div></div>${right ? `<div class="r">${right}</div>` : ''}</div>`;
const chips = (opts, cur, act) => `<div class="chips">${opts.map((o) => `<button class="chip ${o === cur ? 'on' : ''}" data-act="${act}" data-v="${o}">${o}</button>`).join('')}</div>`;

function gauge(val) {
  const r = 31, c = 2 * Math.PI * r, off = c * (1 - val / 100);
  return `<svg class="gauge" viewBox="0 0 76 76"><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--blue-soft)" stroke-width="8"/><circle cx="38" cy="38" r="${r}" fill="none" stroke="var(--blue)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 38 38)"/><text x="38" y="45" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">${val}</text></svg>`;
}

/* ================= pantallas ================= */
const SCREENS = [];
const def = (o) => SCREENS.push(o);

def({ id: 'welcome', num: '01', role: 'Todos', title: 'Bienvenida', desc: 'Entrada a la app. Presenta la promesa en una frase y deja elegir el rol: dueño de flota, conductor o taller aliado.', hint: 'Elige un rol para entrar a su versión de la app. El código de taller aplica el referido.', render() {
  return `<div class="scr dark welcome">
    <div class="row b">${'<span class="logo sm"></span>'}Mechanalytics</div>
    <div class="chart">
      <svg viewBox="0 0 300 190" width="100%" height="100%" preserveAspectRatio="none">
        ${[1, 2, 3, 4].map((i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="190" stroke="#2f333b"/>`).join('')}
        ${[1, 2, 3].map((i) => `<line x1="0" y1="${i * 47}" x2="300" y2="${i * 47}" stroke="#2f333b"/>`).join('')}
        <polyline points="0,150 30,146 57,148 85,136 115,139 140,112 165,118 192,86 220,88 247,76 272,82 300,62" fill="none" stroke="#8fa8f5" stroke-width="2.4" vector-effect="non-scaling-stroke"/>
      </svg>
      <div style="position:absolute;left:62%;top:36px;width:7px;height:7px"></div>
      <div style="position:absolute;right:22px;top:30px;background:#fff;color:var(--ink);border-radius:8px;padding:6px 10px;font-size:10px"><span style="color:var(--ink-3)">Patrón inusual</span><br><b style="font-size:11px">Bus 07 · motor</b></div>
      <div style="position:absolute;left:calc(82% - 6px);top:calc(40% + 0px);width:12px;height:12px;border-radius:50%;background:var(--blue);border:2px solid #fff"></div>
    </div>
    <h1>Cada vehículo de tu flota, en tu celular.</h1>
    <p>Datos reales del motor, alertas antes de que algo se dañe y un historial que nadie tiene que digitar.</p>
    <div class="sec-title" style="color:#8a8f99">Ingresar como</div>
    <button class="role main" data-act="role" data-v="owner">${ic('grid')}Dueño de flota${ic('chev')}</button>
    <button class="role" data-act="role" data-v="driver">${ic('bus')}Conductor${ic('chev')}</button>
    <button class="role" data-act="role" data-v="shop">${ic('wrench')}Taller aliado${ic('chev')}</button>
    <button class="ref" data-act="refSheet">${ic('wrench')}${S.referral ? `Código <b>${S.referral}</b> aplicado` : '¿Te recomendó un taller? <b>Ingresa su código</b>'}</button>
    <p style="text-align:center;margin:12px 0 0;font-size:12px">Prueba gratis 3 meses · sin contrato</p>
  </div>`;
} });

const ROLE_INFO = {
  owner: { t: 'Dueño de flota', i: 'grid', email: 'dueno@transportes.co', sub: 'Ve el estado de toda tu flota, las alertas y la agenda.' },
  driver: { t: 'Conductor', i: 'bus', email: 'conductor@transportes.co', sub: 'Revisa tu vehículo antes de salir y reporta novedades.' },
  shop: { t: 'Taller aliado', i: 'wrench', email: 'taller@aliado.co', sub: 'Diagnostica con datos y envía cotizaciones al dueño.' },
};
def({ id: 'login', role: 'Todos', title: 'Ingresar', render() {
  const r = ROLE_INFO[ui.loginRole || 'owner'];
  return `<div class="scr dark welcome" style="display:flex;flex-direction:column">
    <div class="row"><button class="back" data-go="back" aria-label="Volver" style="background:var(--dark-2);border-color:#2f333b;color:#fff">${ic('back')}</button><div class="row b" style="margin-left:4px"><span class="logo sm"></span>Mechanalytics</div></div>
    <div style="margin:36px 0 22px"><div class="ibox" style="background:var(--blue);color:#fff;width:46px;height:46px;border-radius:12px;margin-bottom:16px">${ic(r.i)}</div>
      <h1>Ingresar como ${r.t.toLowerCase()}</h1><p>${r.sub}</p></div>
    <label class="sec-title" style="color:#8a8f99" for="lg-email">Correo</label>
    <input class="field" id="lg-email" type="email" value="${r.email}" autocomplete="username" style="background:var(--dark-2);border-color:#2f333b;color:#fff;margin-bottom:14px"/>
    <label class="sec-title" style="color:#8a8f99" for="lg-pass">Contraseña</label>
    <input class="field" id="lg-pass" type="password" value="demo1234" autocomplete="current-password" style="background:var(--dark-2);border-color:#2f333b;color:#fff"/>
    <button class="btn btn-primary" data-act="login" style="margin-top:22px">Ingresar</button>
    <p style="text-align:center;margin:14px 0 0;font-size:12px">Cuenta de prueba precargada · prueba gratis 3 meses</p>
  </div>`;
} });

def({ id: 'panel', num: '02', role: 'Dueño', title: 'Panel de flota', desc: 'El estado de toda la flota de un vistazo: salud general, la alerta más urgente y cada vehículo con su estado.', hint: 'Filtra los vehículos, toca uno para abrir su gemelo digital o toca la alerta crítica.', tab: 'panel', render() {
  const vs = S.vehicles;
  const cnt = (s) => vs.filter((v) => v.status === s).length;
  const on = vs.filter((v) => v.status !== 'off');
  const health = Math.round(on.reduce((a, v) => a + v.health, 0) / on.length);
  let list = vs;
  if (ui.fleetFilter === 'Con alertas') list = vs.filter((v) => v.status === 'crit' || v.status === 'warn');
  if (ui.fleetFilter === 'Ruta') list = vs.filter((v) => v.onRoute);
  const order = { crit: 0, warn: 1, ok: 2, off: 3 };
  list = [...list].sort((a, b) => order[a.status] - order[b.status]);
  const crit = S.alerts.find((a) => a.kind === 'crit');
  return `<div class="scr">
    <div class="row between"><div><div class="pre">Transportes [NOMBRE] · ${vs.length} vehículos</div><div class="h1" style="margin-bottom:12px">Mi flota</div></div>
      <button class="back" data-go="alerts" aria-label="Alertas" style="position:relative">${ic('bell')}${unreadCount() ? '<i style="position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--red)"></i>' : ''}</button></div>
    <div class="card row" style="gap:16px">${gauge(health)}<div style="flex:1"><div class="b small">Salud de la flota</div>
      <div class="row" style="gap:18px;margin-top:6px"><div><div class="num">${cnt('ok')}</div><div class="muted">Operando</div></div><div><div class="num" style="color:var(--orange)">${cnt('warn') + cnt('crit')}</div><div class="muted">Atención</div></div><div><div class="num">${cnt('off')}</div><div class="muted">Sin señal</div></div></div></div></div>
    ${crit ? `<div class="alert-dark" data-go="diag"><div class="ibox" style="background:var(--red);color:#fff">${ic('thermo')}</div><div style="flex:1"><div class="k">ALERTA CRÍTICA · HACE 4 MIN</div><div class="b" style="font-size:14px">Bus 07 · sobrecalentamiento</div><div style="font-size:12px;color:#b8bcc4">P0217 · refrigerante 112 °C</div></div>${ic('chev')}</div>` : ''}
    <div class="row" style="gap:8px;margin-bottom:14px">
      <button class="card click" data-go="preds" style="flex:1;margin:0;text-align:left"><div class="b small row" style="gap:6px">${ic("spark")}Predicciones</div><div class="muted">${PREDS.filter((p) => p.risk !== 'bajo').length} componentes en riesgo</div></button>
      <button class="card click" data-go="agenda" style="flex:1;margin:0;text-align:left"><div class="b small row" style="gap:6px">${ic("cal")}Agenda</div><div class="muted">${S.jobs.length} trabajos esta semana</div></button>
    </div>
    <div class="row between"><div class="b">Vehículos</div>${chips(['Todos', 'Con alertas', 'Ruta'], ui.fleetFilter, 'fleetFilter').replace('class="chips"', 'class="chips" style="margin:0"')}</div>
    <div style="margin-top:10px">${list.map((v) => { const [l, cls, col] = statusBadge[v.status]; return `<div class="card click row" data-act="openTwin" data-v="${v.id}" style="padding:12px">
      <div class="ibox" style="background:var(--gray-soft)">${ic('bus')}</div>
      <div style="flex:1;min-width:0"><div><b style="font-size:14px">${v.name}</b> <span class="muted">${v.plate}</span></div><div class="muted">${v.sub}</div><div class="bar" style="margin-top:6px"><i style="width:${v.status === 'off' ? 0 : v.status === 'crit' ? 30 : v.status === 'warn' ? 60 : 88}%;background:${col}"></i></div></div>
      <span class="badge ${cls}">${l}</span></div>`; }).join('')}</div>
  </div>${tabbar('panel')}`;
} });

def({ id: 'preds', num: '03', role: 'Dueño', title: 'Predicciones', desc: 'El corazón predictivo: qué componentes de la flota tienen más riesgo de fallar en los próximos 30 días y en qué ventana de tiempo.', hint: 'Ordena por riesgo, vehículo o fecha y toca un componente para ver por qué se predice.', render() {
  let list = [...PREDS];
  if (ui.predSort === 'Por riesgo') list.sort((a, b) => b.score - a.score);
  if (ui.predSort === 'Por vehículo') list.sort((a, b) => V(a.veh).name.localeCompare(V(b.veh).name));
  if (ui.predSort === 'Por fecha') list.sort((a, b) => a.days - b.days);
  const bg = { alto: 'var(--red-soft)', medio: 'var(--orange-soft)', bajo: 'var(--green-soft)' };
  return `<div class="scr">
    <div class="pre">Próximos 30 días · ${S.vehicles.length} vehículos</div><div class="h1">Predicciones</div>
    <div class="alert-dark" style="cursor:default"><div class="ibox" style="background:var(--blue);color:#fff">${ic('spark')}</div><div><div class="b" style="font-size:14px">${PREDS.filter((p) => p.risk !== 'bajo').length} componentes en riesgo</div><div style="font-size:12px;color:#b8bcc4">Calculado con el patrón normal de cada vehículo</div></div></div>
    ${chips(['Por riesgo', 'Por vehículo', 'Por fecha'], ui.predSort, 'predSort')}
    ${list.map((p) => `<div class="card click" data-act="openPred" data-v="${p.id}">
      <div class="row"><div class="ibox" style="background:${bg[p.risk]};color:${riskColor(p.risk)}">${ic(p.icon)}</div><div style="flex:1"><div class="b" style="font-size:14px">${p.comp}</div><div class="muted">${V(p.veh).name} · ${V(p.veh).plate}</div></div><span class="badge ${riskBadge(p.risk)}">Riesgo ${p.risk}</span></div>
      <div class="bar"><i style="width:${p.score * 100}%;background:${riskColor(p.risk)}"></i></div><div class="small" style="margin-top:8px;color:var(--ink-2)">${p.line}</div></div>`).join('')}
  </div>${tabbar('alerts')}`;
} });

function predChart(p) {
  const W = 300, H = 150, padL = 34, padR = 8, padT = 10, padB = 22;
  const all = [...p.series, ...p.proj, p.thr, ...p.yTicks];
  const min = Math.min(...all), max = Math.max(...all);
  const ns = p.series.length - 1, np = p.proj.length - 1, split = 0.7;
  const x = (i) => padL + (i <= ns ? (i / ns) * split : split + ((i - ns) / np) * (1 - split)) * (W - padL - padR);
  const y = (v) => padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
  const pts = p.series.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const proj = p.proj.map((v, i) => `${x(p.series.length - 1 + i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const xToday = x(p.series.length - 1);
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block">
    <rect x="${xToday}" y="${padT}" width="${W - padR - xToday}" height="${H - padT - padB}" fill="var(--blue-soft)" opacity=".7"/>
    ${p.yTicks.map((t) => `<line x1="${padL}" x2="${W - padR}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="0" y="${y(t) + 3}" font-size="9" fill="var(--ink-3)">${String(t).replace('.', ',')} ${p.unit}</text>`).join('')}
    <line x1="${padL}" x2="${W - padR}" y1="${y(p.thr)}" y2="${y(p.thr)}" stroke="var(--red)" stroke-dasharray="4 3"/>
    <text x="${padL + 4}" y="${y(p.thr) + (p.invert ? 12 : -4)}" font-size="9" fill="var(--red)" font-weight="600">Umbral crítico</text>
    <polyline points="${pts}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
    <polyline points="${proj}" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="5 4"/>
    <circle cx="${xToday}" cy="${y(p.series[p.series.length - 1])}" r="4.5" fill="var(--ink)" stroke="#fff" stroke-width="2"/>
    <text x="${padL}" y="${H - 4}" font-size="9" fill="var(--ink-3)">Hace 30 días</text>
    <text x="${xToday}" y="${H - 4}" font-size="9" fill="var(--ink-3)" text-anchor="middle">Hoy</text>
    <text x="${W - padR}" y="${H - 4}" font-size="9" fill="var(--blue)" text-anchor="end" font-weight="600">Próximos días</text>
  </svg>`;
}

def({ id: 'pred', num: '04', role: 'Dueño', title: 'Detalle de una predicción', desc: 'Muestra por qué se predice una falla: la tendencia del dato, cuándo cruzaría el umbral crítico y las señales que la respaldan.', hint: 'Agenda el trabajo con un taller aliado o reporta si la predicción no es correcta.', render() {
  const p = PREDS.find((q) => q.id === ui.predId && q.series) || PREDS[0];
  const v = V(p.veh);
  return `<div class="scr">
    ${header(p.comp, `${v.name} · ${v.plate}`, `<span class="badge ${riskBadge(p.risk)}">Riesgo ${p.risk}</span>`, 'preds')}
    <div class="h1" style="font-size:20px;margin-bottom:2px">${p.head}</div><div class="small" style="color:var(--ink-2);margin-bottom:12px">${p.sub}</div>
    <div class="card"><div class="row between small" style="margin-bottom:8px"><b>${p.metric}</b><span class="muted">Últimos 30 días + proyección</span></div>${predChart(p)}</div>
    <div class="card"><div class="b small" style="margin-bottom:8px">Por qué lo predecimos</div>${p.why.map((w) => `<div class="row small" style="align-items:flex-start;margin-bottom:7px;color:var(--ink-2)"><span style="color:var(--blue)">${ic('check')}</span>${w}</div>`).join('')}</div>
  </div>
  <div class="foot"><button class="btn btn-primary" data-act="schedule" data-v="${p.veh}" data-title="${p.job}" data-type="Predicción">${ic('cal')}${p.cta}</button><button class="btn btn-ghost" data-act="toast" data-v="Gracias. El equipo Mechanalytics revisará esta predicción.">No es correcto · reportar</button></div>`;
} });

function twinLive(v) {
  const crit = v.id === 'bus07' && v.status === 'crit';
  const j = (base, amp, dec = 0) => (base + (Math.random() - 0.5) * amp).toFixed(dec);
  return {
    rpm: v.status === 'off' ? '—' : Number(j(2140, 120)).toLocaleString('es-CO'),
    oil: v.status === 'off' ? '—' : j(crit ? 118 : 96, 2),
    bat: v.status === 'off' ? '—' : j(v.id === 'buseta03' ? 12.6 : 13.8, 0.1, 1).replace('.', ','),
    spd: v.status === 'off' ? '—' : j(38, 6),
  };
}

def({ id: 'twin', num: '05', role: 'Dueño', title: 'Gemelo digital', desc: 'La representación del vehículo con sus datos en vivo y la ubicación de cada problema sobre el diagrama.', hint: 'Los datos se actualizan cada 2 segundos. Cambia entre Gemelo, Fallas e Historial.', render() {
  const v = V(ui.twinVeh);
  const crit = v.status === 'crit', live = twinLive(v);
  const faults = crit ? 1 : 0;
  const tabs = ['Gemelo', `Fallas (${faults})`, 'Historial'];
  const cur = ui.twinTab;
  let body = '';
  if (cur === 'Gemelo') {
    body = `<div class="card" style="padding:10px 6px">
      <svg viewBox="0 0 300 250" width="100%" style="display:block">
        <text x="48" y="22" font-size="10" fill="var(--ink-3)">82 psi</text><text x="222" y="22" font-size="10" fill="var(--ink-3)">80 psi</text>
        <text x="48" y="240" font-size="10" fill="var(--ink-3)">84 psi</text><text x="214" y="240" font-size="10" fill="${v.id === 'bus07' ? 'var(--orange)' : 'var(--ink-3)'}" font-weight="600">${v.id === 'bus07' ? '71 psi ↓' : '83 psi'}</text>
        <rect x="100" y="15" width="100" height="225" rx="18" fill="#fff" stroke="var(--ink)" stroke-width="2"/>
        <rect x="112" y="25" width="76" height="30" rx="6" fill="var(--blue-soft)" stroke="var(--ink)" stroke-width="1.5"/>
        ${[95, 125, 155, 185].map((yy) => `<line x1="112" x2="188" y1="${yy}" y2="${yy}" stroke="var(--line)"/>`).join('')}
        <rect x="92" y="45" width="9" height="30" rx="2" fill="var(--ink)"/><rect x="199" y="45" width="9" height="30" rx="2" fill="var(--ink)"/>
        <rect x="92" y="180" width="9" height="30" rx="2" fill="var(--ink)"/><rect x="199" y="180" width="9" height="30" rx="2" fill="${v.id === 'bus07' ? 'var(--orange)' : 'var(--ink)'}"/>
        <circle cx="150" cy="70" r="11" fill="${crit ? 'var(--red)' : 'var(--green)'}"/>${crit ? '<circle cx="150" cy="70" r="11" fill="var(--red)" class="pulse"/>' : ''}
        <line x1="72" y1="70" x2="139" y2="70" stroke="${crit ? 'var(--red)' : 'var(--green)'}"/>
        <rect x="8" y="52" width="72" height="34" rx="6" fill="#fff" stroke="${crit ? 'var(--red)' : 'var(--line)'}"/>
        <text x="15" y="66" font-size="10" font-weight="700" fill="${crit ? 'var(--red)' : 'var(--ink)'}">Motor</text><text x="15" y="79" font-size="9" fill="var(--ink-3)">${crit ? '112 °C · P0217' : (v.temp ?? '—') + ' °C'}</text>
        <circle cx="162" cy="150" r="7" fill="var(--green)"/><line x1="169" y1="150" x2="222" y2="150" stroke="var(--green)"/>
        <rect x="222" y="133" width="70" height="34" rx="6" fill="#fff" stroke="var(--line)"/><text x="229" y="147" font-size="10" font-weight="700" fill="var(--ink)">Frenos</text><text x="229" y="160" font-size="9" fill="var(--ink-3)">Sin códigos</text>
        <circle cx="140" cy="200" r="7" fill="${v.id === 'buseta03' ? 'var(--orange)' : 'var(--green)'}"/><line x1="78" y1="200" x2="133" y2="200" stroke="var(--green)"/>
        <rect x="8" y="183" width="70" height="34" rx="6" fill="#fff" stroke="var(--line)"/><text x="15" y="197" font-size="10" font-weight="700" fill="var(--ink)">Batería</text><text x="15" y="210" font-size="9" fill="var(--ink-3)" data-live="bat2">${live.bat} V</text>
      </svg></div>
      <div class="row between" style="margin:14px 0 8px"><div class="b">Línea de datos</div><div class="muted">${v.status === 'off' ? 'Último dato hace 2 días' : 'Actualizado hace 2 s'}</div></div>
      <div class="tiles">
        <div class="tile"><div class="l">${ic('rpm')}RPM</div><div class="v"><span data-live="rpm">${live.rpm}</span> <small>rpm</small></div><div class="s">Normal</div></div>
        <div class="tile"><div class="l">${ic('thermo')}Aceite</div><div class="v"><span data-live="oil">${live.oil}</span> <small>°C</small></div><div class="s ${crit ? 'warn' : ''}">${crit ? 'Alta' : 'Normal'}</div></div>
        <div class="tile"><div class="l">${ic('battery')}Batería</div><div class="v"><span data-live="bat">${live.bat}</span> <small>V</small></div><div class="s ${v.id === 'buseta03' ? 'warn' : ''}">${v.id === 'buseta03' ? 'Baja' : 'Cargando'}</div></div>
        <div class="tile"><div class="l">${ic('gauge')}Velocidad</div><div class="v"><span data-live="spd">${live.spd}</span> <small>km/h</small></div><div class="s">Normal</div></div>
        <div class="tile"><div class="l">${ic('road')}Odómetro</div><div class="v">${Math.round(v.km / 1000)}k <small>km</small></div><div class="s">Aceite: 1.200 km</div></div>
        <div class="tile"><div class="l">${ic('fuel')}Consumo</div><div class="v">18,4 <small>L/100</small></div><div class="s warn">+12 % vs. media</div></div>
      </div>`;
  } else if (cur.startsWith('Fallas')) {
    body = crit ? `<div class="card click" data-go="diag"><div class="row"><span class="badge b-dark">P0217</span><span class="badge b-red">Severidad alta</span></div><div class="b" style="margin:8px 0 2px">Sobretemperatura del motor</div><div class="muted">Registrado hoy 14:28 · toca para ver diagnóstico</div></div>`
      : `<div class="card" style="text-align:center;padding:30px"><div style="color:var(--green)">${ic('check')}</div><div class="b">Sin códigos de falla activos</div><div class="muted">El adaptador no reporta códigos DTC.</div></div>`;
  } else {
    const h = S.history.filter((x) => x.veh === v.id);
    body = h.length ? h.map(histRow).join('') : '<div class="muted">Sin registros aún.</div>';
  }
  return `<div class="scr">
    ${header(v.name, `${v.plate} · ${v.model}`, v.status === 'off' ? '<span class="badge b-gray">Sin señal</span>' : '<span class="badge b-green live">En vivo</span>', 'panel')}
    <div class="seg">${tabs.map((t) => `<button class="${cur === t.split(' ')[0] || cur === t ? 'on' : ''}" data-act="twinTab" data-v="${t.split(' ')[0]}">${t}</button>`).join('')}</div>
    ${body}
  </div>
  <div class="foot" style="grid-template-columns:1fr 1fr;display:grid"><button class="btn btn-ghost" data-act="toast" data-v="Enlace de solo lectura enviado al taller aliado.">Compartir con taller</button><button class="btn btn-primary" data-go="${crit ? 'diag' : 'history'}" ${crit ? '' : `data-act="histFor" data-v="${v.id}"`}>${crit ? 'Ver diagnóstico' : 'Ver historial'}</button></div>`;
} });

def({ id: 'diag', num: '06', role: 'Dueño', title: 'Diagnóstico de falla', desc: 'Traduce un código de falla a lenguaje sencillo, dice qué hacer ya y guarda la línea de tiempo del evento.', hint: 'Envía el diagnóstico al taller. Cuando el dueño aprueba la cotización, se habilita borrar el código.', render() {
  const resolved = V('bus07').status !== 'crit';
  const approved = S.quote.status === 'approved';
  return `<div class="scr">
    ${header('Diagnóstico', 'Bus 07 · WFN 482', '', 'back')}
    <div class="row" style="margin-bottom:8px"><span class="badge b-dark">P0217</span><span class="badge ${resolved ? 'b-green' : 'b-red'}">${resolved ? 'Resuelto' : 'Severidad alta'}</span></div>
    <div class="h1" style="font-size:20px;margin-bottom:6px">Sobretemperatura del motor</div>
    <p class="small" style="color:var(--ink-2);line-height:1.5;margin:0 0 12px">El motor superó su temperatura segura. Seguir rodando puede deformar la culata o dañar el empaque: una reparación mucho más costosa.</p>
    ${resolved ? '' : `<div class="card row" style="background:var(--red-soft);align-items:flex-start"><span style="color:var(--red)">${ic('alert')}</span><div class="small"><b style="color:var(--red)">Qué hacer ahora</b><div style="color:#7a1d14;margin-top:2px;line-height:1.45">Detener el vehículo en un lugar seguro y dejar enfriar. Revisar refrigerante y ventilador antes de continuar.</div></div></div>`}
    <div class="card"><div class="b small" style="margin-bottom:8px">Datos en el momento de la falla</div><div class="row between">${[['111 °C', 'Refrigerante'], ['2.300', 'RPM'], ['41', 'km/h'], ['71 %', 'Carga']].map(([a, b]) => `<div><div class="b" style="font-size:17px">${a}</div><div class="muted">${b}</div></div>`).join('')}</div></div>
    <div class="card"><div class="b small" style="margin-bottom:10px">Línea de tiempo · hoy</div><div class="tl">
      ${[['14:12', 'var(--orange)', 'Temperatura supera 100 °C', 'Detectado por el adaptador OBD-II'], ['14:28', 'var(--red)', 'Código P0217 registrado', 'Se enciende el Check Engine'], ['14:29', 'var(--blue)', 'Alerta a dueño y conductor', 'Equipo Mechanalytics'], ['14:31', 'var(--ink)', 'Reporte del conductor', '“Se prendió el testigo de temperatura”'],
        ...(S.diagSent ? [['14:40', 'var(--blue)', 'Diagnóstico enviado al taller', 'Taller aliado']] : []),
        ...(S.quote.status !== 'draft' ? [['15:05', 'var(--green)', 'Cotización del taller recibida', S.quote.status === 'approved' ? 'Aprobada por el dueño' : 'Pendiente de aprobación']] : []),
      ].map(([t, c, a, b]) => `<b>${t}</b><i class="d" style="background:${c}"></i><div><div class="tt">${a}</div><div class="muted">${b}</div></div>`).join('')}
    </div></div>
  </div>
  <div class="foot"><button class="btn btn-primary" data-act="sendDiag" ${S.diagSent ? 'disabled' : ''}>${ic('wrench')}${S.diagSent ? 'Diagnóstico enviado al taller' : 'Enviar diagnóstico al taller'}</button>
  <button class="btn ${approved && !resolved ? 'btn-ghost' : 'btn-dashed'}" data-act="clearCode" ${approved && !resolved ? '' : 'disabled'}>${resolved ? 'Código borrado · vehículo operando' : approved ? 'Borrar código P0217' : 'Borrar código · disponible tras la reparación'}</button></div>`;
} });

def({ id: 'alerts', num: '07', role: 'Dueño', title: 'Alertas', desc: 'La bandeja de avisos críticos, preventivos y de mantenimiento, cada uno con una acción concreta.', hint: 'Filtra por tipo y usa la acción de cada alerta: ver diagnóstico, agendar taller o aprobar cotización.', tab: 'alerts', render() {
  let list = S.alerts;
  if (ui.alertFilter === 'Críticas') list = list.filter((a) => a.kind === 'crit');
  if (ui.alertFilter === 'Preventivas') list = list.filter((a) => a.kind === 'prev');
  const kinds = { crit: ['Crítica', 'b-red'], prev: ['Preventiva', 'b-orange'], mant: ['Mantenimiento', 'b-blue'], quote: ['Cotización', 'b-green'] };
  return `<div class="scr">
    <div class="row between"><div><div class="pre">Revisadas por el equipo Mechanalytics</div><div class="h1">Alertas</div></div><button class="link" data-go="preds">Predicciones ›</button></div>
    ${chips([`Todas · ${S.alerts.length}`, 'Críticas', 'Preventivas'], ui.alertFilter.startsWith('Todas') ? `Todas · ${S.alerts.length}` : ui.alertFilter, 'alertFilter')}
    ${list.length ? list.map((a) => { const v = V(a.veh); const [kl, kc] = kinds[a.kind]; return `<div class="card" style="${a.unread ? 'box-shadow:inset 3px 0 0 var(--blue)' : ''}">
      <div class="row between"><span class="badge tag-up ${kc}">${kl}</span><span class="muted">${a.when}</span></div>
      <div class="b" style="margin:8px 0 4px;font-size:14px">${a.title}</div><div class="small" style="color:var(--ink-2);line-height:1.45">${a.body}</div>
      <div class="row between" style="margin-top:10px"><span class="muted">${v.name} · ${v.plate}${a.conf ? ` · <span class="badge b-gray">${ic('spark')}Confianza ${a.conf}</span>` : ''}</span>
      ${a.kind === 'quote' ? (S.quote.status === 'approved' ? '<span class="badge b-green">Aprobada</span>' : `<button class="link" data-act="approveQuote">Aprobar ›</button>`) : a.go ? `<button class="link" data-act="readAlert" data-v="${a.id}" data-go="${a.go}">${a.action} ›</button>` : `<button class="link" data-act="schedule" data-alert="${a.id}" data-v="${a.veh}" data-title="${a.sched.title}" data-type="${a.sched.type}">${a.done ? 'Agendado ✓' : a.action + ' ›'}</button>`}</div></div>`; }).join('') : '<div class="muted" style="text-align:center;padding:30px">Sin alertas en este filtro.</div>'}
  </div>${tabbar('alerts')}`;
} });

def({ id: 'agenda', num: '08', role: 'Dueño', title: 'Agenda de mantenimiento', desc: 'Los trabajos programados de la semana, indicando cuáles salieron de una predicción, de un diagnóstico o del kilometraje.', hint: 'Toca un día para filtrar. Los trabajos agendados desde predicciones o alertas aparecen aquí.', render() {
  const days = [['Lun', 9], ['Mar', 10], ['Mié', 11], ['Jue', 12], ['Vie', 13], ['Sáb', 14], ['Dom', 15]];
  const tc = { 'Predicción': 'b-blue', 'Diagnóstico': 'b-gray', 'Kilometraje': 'b-green' };
  const dc = { 'Predicción': 'var(--red)', 'Diagnóstico': 'var(--orange)', 'Kilometraje': 'var(--blue)' };
  const dn = Object.fromEntries(days.map(([a, b]) => [b, a]));
  const jobs = [...S.jobs].sort((a, b) => a.day - b.day);
  const shown = ui.day ? jobs.filter((j) => j.day === ui.day) : jobs;
  return `<div class="scr">
    <div class="row between"><div><div class="pre">Noviembre 2026</div><div class="h1">Mantenimiento</div></div><button class="back" data-act="dayAll" aria-label="Ver semana">${ic('cal')}</button></div>
    <div class="days">${days.map(([l, n]) => { const j = jobs.find((x) => x.day === n); return `<button class="day ${ui.day === n ? 'on' : ''}" data-act="day" data-v="${n}">${l}<b>${n}</b>${j ? `<i style="background:${dc[j.type]}"></i>` : ''}</button>`; }).join('')}</div>
    <div class="row" style="gap:8px;margin-bottom:12px"><div class="card" style="flex:1;margin:0"><div class="num">${jobs.length}</div><div class="muted">Trabajos esta semana</div></div><div class="card" style="flex:1;margin:0"><div class="num">${jobs.filter((j) => j.type !== 'Kilometraje').length}</div><div class="muted">Salieron de una predicción o diagnóstico</div></div></div>
    <div class="row between"><div class="b">${ui.day ? `Programado · ${dn[ui.day]} ${ui.day}` : 'Programado'}</div>${ui.day ? '<button class="link" data-act="dayAll">Ver semana</button>' : ''}</div>
    <div style="margin-top:10px">${shown.length ? shown.map((j) => { const v = V(j.veh); return `<div class="card"><div class="row between"><span class="muted">${dn[j.day]} ${j.day} · ${j.time}</span><span class="badge ${tc[j.type]}">${j.type}</span></div><div class="b" style="margin:6px 0 2px">${j.title}</div><div class="muted">${v.name} · ${v.plate} · [TALLER ALIADO]</div></div>`; }).join('') : '<div class="card muted" style="text-align:center">Nada programado este día.</div>'}</div>
  </div>${tabbar('history')}`;
} });

function histRow(h) {
  const c = { 'OBD-II': 'b-blue', Conductor: 'b-gray', Taller: 'b-green' }[h.src];
  return `<div class="hist"><div class="dd"><b>${h.d}</b><span>${h.m}</span></div><div><div class="b small">${h.title}</div><div class="muted">${h.sub}</div></div><span class="badge ${c}">${h.src}</span></div>`;
}

def({ id: 'history', num: '09', role: 'Dueño', title: 'Historial técnico', desc: 'Todo lo que le ha pasado a cada vehículo, registrado automáticamente y marcado según su origen.', hint: 'Cambia de vehículo, filtra por origen y exporta la evidencia para el PESV.', tab: 'history', render() {
  const v = V(ui.histVeh);
  let h = S.history.filter((x) => x.veh === v.id);
  const fallas = h.filter((x) => x.src === 'OBD-II').length, serv = h.filter((x) => x.src === 'Taller').length;
  if (ui.histFilter !== 'Todo') h = h.filter((x) => x.src === ui.histFilter);
  return `<div class="scr">
    <div class="row between"><div><div class="pre">${v.name} · ${v.plate}</div><div class="h1">Historial</div></div>
      <select class="chip" data-change="histVeh" aria-label="Cambiar vehículo">${S.vehicles.map((x) => `<option value="${x.id}" ${x.id === v.id ? 'selected' : ''}>${x.name}</option>`).join('')}</select></div>
    <div class="stat3"><div class="card"><div class="num">${fallas}</div><div class="muted">Fallas · 90 días</div></div><div class="card"><div class="num">${serv}</div><div class="muted">Servicios</div></div><div class="card"><div class="num">${Math.round(v.km / 1000)}k</div><div class="muted">km actuales</div></div></div>
    <div class="card" style="background:var(--blue);color:#fff"><div class="row"><div class="ibox" style="background:rgba(255,255,255,.15)">${ic('shield')}</div><div><div class="b">Evidencia para el PESV</div><div style="font-size:12px;opacity:.8">Vehículos seguros · con fecha y hora</div></div></div>
      <button class="btn" data-go="pesv" style="background:#fff;color:var(--blue);margin:12px 0 8px">${ic('file')}Exportar reporte PDF</button><div style="font-size:10px;opacity:.75">Apoya el componente de vehículos seguros; no sustituye el cumplimiento integral del PESV.</div></div>
    <div class="row between">${chips(['Todo', 'OBD-II', 'Conductor', 'Taller'], ui.histFilter, 'histFilter')}<button class="link" data-go="agenda">Agenda ›</button></div>
    ${h.length ? h.map(histRow).join('') : '<div class="muted" style="text-align:center;padding:20px">Sin registros con este filtro.</div>'}
  </div>${tabbar('history')}`;
} });

const PESV = { Octubre: [5, 7, '6 de 7', 9, '11 de 12', 'Oct 2026'], Septiembre: [4, 5, '5 de 5', 7, '11 de 12', 'Sep 2026'], Trimestre: [13, 16, '15 de 16', 24, '11 de 12', 'Ago–Oct 2026'] };
def({ id: 'pesv', num: '10', role: 'Dueño', title: 'Reporte PESV', desc: 'Vista previa del reporte mensual que sirve de evidencia para el componente de vehículos seguros del PESV.', hint: 'Cambia el periodo. “Descargar PDF” abre el diálogo de impresión para guardarlo como PDF.', render() {
  const d = PESV[ui.pesvMonth];
  return `<div class="scr">
    ${header('Reporte PESV', 'Vista previa del documento', '', 'history')}
    <div class="card" id="pesv-doc" style="box-shadow:0 8px 24px -12px rgba(0,0,0,.2)">
      <div class="row between"><div class="row b">${'<span class="logo sm"></span>'}Mechanalytics</div><span class="muted">${d[5]}</span></div>
      <div class="b" style="font-size:16px;margin-top:12px">Gestión de vehículos seguros</div><div class="muted">Transportes [NOMBRE] · 12 vehículos · NIT [NÚMERO]</div>
      <div style="margin-top:8px">${[['Mantenimientos realizados', d[0]], ['Fallas detectadas por el adaptador', d[1]], ['Alertas atendidas', d[2]], ['Reportes de conductores', d[3]], ['Vehículos con historial completo', d[4]]].map(([a, b]) => `<div class="list-row small"><span style="flex:1">${a}</span><b>${b}</b></div>`).join('')}</div>
      <div class="row small" style="color:var(--green);font-weight:600;margin-top:8px">${ic('shield')}Cada registro con fecha, hora y origen</div>
    </div>
    <div class="muted" style="font-size:10px;margin:-2px 0 10px">Apoya el componente de vehículos seguros; no sustituye el cumplimiento integral del PESV.</div>
    ${chips(['Octubre', 'Septiembre', 'Trimestre'], ui.pesvMonth, 'pesvMonth')}
  </div>
  <div class="foot"><button class="btn btn-primary" data-act="printPesv">${ic('file')}Descargar PDF</button><button class="btn btn-ghost" data-act="toast" data-v="Reporte enviado a tu correo registrado.">Enviar por correo</button></div>`;
} });

def({ id: 'settings', num: '11', role: 'Dueño', title: 'Ajustes de alertas', desc: 'Define los umbrales de aviso y quién recibe cada alerta: dueño, conductor o taller.', hint: 'Los cambios se guardan automáticamente en este navegador.', render() {
  const s = S.settings;
  const tg = (k, t, d) => `<div class="list-row"><div style="flex:1"><div class="b small">${t}</div><div class="muted">${d}</div></div><button class="toggle ${s[k] ? 'on' : ''}" data-act="toggleSet" data-v="${k}" aria-label="${t}"></button></div>`;
  const th = (k, icn, t, d, u) => `<div class="list-row"><span style="color:var(--ink-3)">${ic(icn)}</span><div style="flex:1"><div class="b small">${t}</div><div class="muted">${d}</div></div><div class="row" style="gap:4px"><input class="field mini-field" data-change="setVal" data-k="${k}" value="${s[k]}" inputmode="decimal"/><span class="muted">${u}</span></div></div>`;
  return `<div class="scr">
    ${header('Ajustes de alertas', 'Aplica a toda la flota', '', 'plan')}
    <div class="card"><div class="sec-title">Umbrales</div>${th('temp', 'thermo', 'Temperatura del motor', 'Avisar sobre', '°C')}${th('batt', 'battery', 'Batería al arrancar', 'Avisar bajo', 'V')}${th('tire', 'gauge', 'Presión de llantas', 'Avisar si baja', '%')}
      <div class="muted" style="margin-top:8px">Las predicciones no dependen de estos valores: usan el patrón propio de cada vehículo.</div></div>
    <div class="card"><div class="sec-title">Quién recibe las alertas</div>${tg('owner', 'Dueño de flota', 'Todas las alertas')}${tg('driver', 'Conductor del vehículo', 'Críticas y de su vehículo')}${tg('shop', 'Taller aliado', 'Solo las que comparta')}</div>
    <div class="card">${tg('weekly', 'Resumen semanal', 'Lunes 7:00 a. m. por WhatsApp')}</div>
  </div>${tabbar('plan')}`;
} });

def({ id: 'link', num: '12', role: 'Dueño', title: 'Vincular adaptador', desc: 'Conecta un vehículo nuevo en tres pasos con el adaptador OBD-II por Bluetooth, sin técnico.', hint: 'Marca cada paso. Al completar el tercero se busca el adaptador; luego escribe la placa y vincula.', render() {
  const L = ui.link;
  const steps = ['Ubica el puerto, debajo del volante', 'Inserta el adaptador hasta que encaje', 'Enciende el vehículo y activa Bluetooth'];
  return `<div class="scr">
    <div class="row" style="margin-bottom:16px"><button class="back" data-go="plan" aria-label="Cerrar">${ic('x')}</button><div class="steps">${[0, 1, 2].map((i) => `<i class="${i < Math.max(L.done, 1) ? 'on' : ''}"></i>`).join('')}</div><span class="muted">${Math.min(L.done + 1, 3)} de 3</span></div>
    <div class="h1" style="font-size:21px;margin-bottom:4px">Conecta el adaptador a tu vehículo</div><div class="muted" style="margin-bottom:12px">Sin técnico ni herramientas. Menos de un minuto.</div>
    <div style="background:var(--dark);border-radius:14px;height:130px;margin-bottom:12px"><svg viewBox="0 0 300 130" width="100%" height="100%"><path d="M50 40 Q150 10 250 40" stroke="#555" fill="none" stroke-width="2"/><text x="190" y="52" font-size="9" fill="#9aa">Puerto OBD-II</text><rect x="120" y="60" width="54" height="22" rx="4" fill="none" stroke="#fff" stroke-width="1.5"/>${[0, 1, 2, 3, 4].map((i) => `<circle cx="${130 + i * 8.5}" cy="71" r="1.6" fill="#fff"/>`).join('')}<rect x="124" y="92" width="44" height="20" rx="4" fill="var(--blue)"/><circle cx="134" cy="102" r="2.5" fill="#5eead4"/><path d="M178 94 q6 8 0 16 M185 90 q10 12 0 24" stroke="#8fa8f5" fill="none" stroke-width="1.6"/></svg></div>
    ${steps.map((t, i) => `<button class="stepline ${i < L.done ? 'done' : i === L.done ? 'cur' : ''}" data-act="linkStep" data-v="${i}" style="width:100%;text-align:left"><span class="n">${i < L.done ? ic('check') : i + 1}</span>${t}</button>`).join('')}
    ${L.done >= 3 ? `<div class="card" style="margin-top:10px">${L.searching ? `<div class="row small"><span class="spinner"></span>Buscando adaptador por Bluetooth…</div>` : `<div class="sec-title">Adaptador encontrado</div>
      <div class="row"><div class="ibox" style="background:var(--blue-soft);color:var(--blue)">${ic('bt')}</div><div style="flex:1"><div class="b small">Mechanalytics OBD</div><div class="muted">Chip STN2120 · señal fuerte</div></div><span class="badge b-green">Listo</span></div>
      <div class="b small" style="margin:12px 0 6px">Placa del vehículo</div><input class="field" data-change="plate" value="${L.plate}" placeholder="ABC 123" maxlength="7" style="text-transform:uppercase"/>`}</div>` : ''}
  </div>
  <div class="foot"><button class="btn btn-primary" data-act="doLink" ${L.done >= 3 && !L.searching ? '' : 'disabled'}>Vincular y ver datos en vivo</button></div>`;
} });

// Precio mensual por flota (COP, sin IVA), tomado de las proyecciones del plan empresarial del 14-nov-2026.
// Tier 5 no tiene precio en el plan: se cotiza a la medida.
const TIERS = [['Tier 1', '1–2 vehículos', 245000], ['Tier 2', '3–8 vehículos', 640000], ['Tier 3', '9–15 vehículos', 1042500], ['Tier 4', '15–30 vehículos', 1820000], ['Tier 5', '30+ vehículos', null]];
const ANNUAL_PAID_MONTHS = 9; // contratación anual: 12 meses de servicio, 3 gratis
const tierPrice = (i, billing) => { const m = TIERS[i][2]; if (m == null) return 'A convenir'; return billing === 'Anual' ? `${fmtCOP(m * ANNUAL_PAID_MONTHS)}<small>/año</small>` : `${fmtCOP(m)}<small>/mes</small>`; };
def({ id: 'plan', num: '13', role: 'Dueño', title: 'Plan y suscripción', desc: 'Prueba gratuita, nivel de suscripción según el tamaño de la flota, adaptadores incluidos y asesor asignado.', hint: 'Precios por flota del plan empresarial (14-nov-2026), sin IVA. Cambia entre Mensual y Anual para ver el ahorro de los 3 meses gratis.', tab: 'plan', render() {
  const p = S.plan, cur = TIERS[p.tier - 1];
  return `<div class="scr">
    <div class="pre">Cuenta · Transportes [NOMBRE]</div><div class="h1">Mi plan</div>
    <div class="card" style="background:var(--dark);color:#fff"><div class="row between"><b>Prueba gratuita</b><span style="font-size:12px;color:#b8bcc4">Quedan 72 de 90 días</span></div><div class="bar" style="background:#3a3e46;height:5px;margin:10px 0"><i style="width:20%;background:#8fa8f5"></i></div><div style="font-size:12px;color:#b8bcc4">Al terminar, tu flota pasa al ${cur[0]}${cur[2] ? ` · ${fmtCOP(cur[2])}/mes` : ''}. Puedes cambiarlo cuando quieras.</div></div>
    <div class="card"><div class="row between" style="margin-bottom:10px"><div><div class="b small">Suscripción por flota</div><div class="muted">${S.vehicles.length} vehículos · adaptadores incluidos</div></div><div class="seg2">${['Mensual', 'Anual'].map((b) => `<button class="${p.billing === b ? 'on' : ''}" data-act="billing" data-v="${b}">${b}</button>`).join('')}</div></div>
      ${TIERS.map(([t, r], i) => `<button class="tier ${p.tier === i + 1 ? 'on' : ''}" data-act="tier" data-v="${i + 1}"><div><b>${t}</b>${p.tier === i + 1 ? ' <span class="badge" style="background:var(--blue);color:#fff">Tu plan</span>' : ''}<div class="muted">${r}</div></div><span class="p">${tierPrice(i, p.billing)}</span></button>`).join('')}
      <div class="muted" style="margin-top:4px">Precio por flota · IVA no incluido · adaptadores incluidos en la suscripción</div>
      ${p.billing === 'Anual' ? `<div class="small" style="color:var(--green);font-weight:600;margin-top:6px">Contratación anual: pagas 9 meses y recibes 12 (3 meses gratis).${cur[2] ? ` Ahorras ${fmtCOP(cur[2] * 3)} en tu plan.` : ''}</div>` : ''}</div>
    <div class="card row"><div class="ibox" style="background:var(--blue-soft);color:var(--blue)">${ic('bt')}</div><div style="flex:1"><div class="b small">${p.adapters} adaptadores asignados</div><div class="muted">Incluidos sin costo hasta 30 por flota; desde el 31 se pagan una sola vez</div></div><button class="link" data-act="moreAdapters">Pedir más ›</button></div>
    <div class="card row"><div class="ibox" style="background:var(--green-soft);color:var(--green)">${ic('user')}</div><div style="flex:1"><div class="b small">Tu asesor: [NOMBRE]</div><div class="muted">Éxito del cliente · llegaste por ${S.referral ? 'código ' + S.referral : '[TALLER ALIADO]'}</div></div><button class="link" data-act="toast" data-v="Abriendo chat con tu asesor…">Escribir ›</button></div>
    <div class="card" style="padding:4px 14px">
      <button class="list-row" data-go="settings" style="width:100%">${ic('settings')}<span class="small" style="flex:1;text-align:left">Ajustes de alertas</span>${ic('chev')}</button>
      <button class="list-row" data-go="link" style="width:100%">${ic('bt')}<span class="small" style="flex:1;text-align:left">Vincular adaptador</span>${ic('chev')}</button>
      <button class="list-row" data-go="pesv" style="width:100%">${ic('file')}<span class="small" style="flex:1;text-align:left">Reporte PESV</span>${ic('chev')}</button>
      <button class="list-row" data-act="resetData" style="width:100%">${ic('history')}<span class="small" style="flex:1;text-align:left">Restablecer datos de prueba</span>${ic('chev')}</button>
      <button class="list-row" data-act="logout" style="width:100%">${ic('logout')}<span class="small" style="flex:1;text-align:left">Cerrar sesión</span>${ic('chev')}</button>
    </div>
  </div>${tabbar('plan')}`;
} });

const CHECK = ['Luces y direccionales', 'Frenos', 'Llantas (visual)', 'Cinturones', 'Botiquín y extintor', 'Documentos del vehículo'];
def({ id: 'driver', num: '14', role: 'Conductor', title: 'Inicio del conductor', desc: 'Lo que el conductor ve antes de salir: avisos de su vehículo, lo que ya verificó el adaptador y la inspección preoperacional.', hint: 'Marca los puntos de la inspección; al completar los 6 se habilita “Terminar inspección”.', render() {
  const c = S.checklist, done = c.filter(Boolean).length;
  const crit = V('bus07').status === 'crit';
  return `<div class="scr">
    <div class="pre">App del conductor · Bus 07 · WFN 482</div><div class="h1">Hola, [NOMBRE]</div>
    ${crit ? `<div class="card" style="background:var(--orange-soft)"><div class="row b small" style="color:#7a3b06">${ic('alert')}Revisa la temperatura hoy</div><div class="small" style="color:#7a3b06;margin-top:6px;line-height:1.45">El motor se está calentando más rápido de lo normal. Si ves el testigo, detente y repórtalo.</div></div>` : `<div class="card" style="background:var(--green-soft)"><div class="row b small" style="color:var(--green)">${ic('check')}Tu vehículo está listo para salir</div></div>`}
    <div class="card"><div class="sec-title">Verificado por el adaptador</div><div class="chips" style="margin:0"><span class="badge b-green">Batería OK</span><span class="badge b-green">Sin códigos</span><span class="badge ${crit ? 'b-orange' : 'b-green'}">Temperatura</span><span class="badge b-green">Kilometraje</span></div></div>
    <div class="card"><div class="row between"><b class="small">Inspección preoperacional</b><span class="muted">${done} de 6</span></div>
      ${CHECK.map((t, i) => `<button class="check ${c[i] ? 'done' : ''}" data-act="check" data-v="${i}"><span class="c">${c[i] ? ic('check') : ''}</span><span class="${c[i] ? '' : 'b'}">${t}</span></button>`).join('')}</div>
  </div>
  <div class="foot" style="padding-bottom:10px"><button class="btn btn-primary" data-act="finishCheck" ${done === 6 ? '' : 'disabled'}>Terminar inspección</button></div>${tabbar('driver')}`;
} });

def({ id: 'report', num: '15', role: 'Conductor', title: 'Reporte del conductor', desc: 'Permite avisar una novedad en segundos; el reporte se guarda con los datos del vehículo y respalda al conductor.', hint: 'Elige qué pasa, añade nota, foto o voz y envía. El dueño lo ve en su historial y alertas.', render() {
  const r = ui.report;
  const opts = ['Testigo encendido', 'Temperatura alta', 'Ruido extraño', 'Frenos', 'Llanta', 'Otro'];
  const t = new Date();
  const hh = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
  return `<div class="scr">
    <div class="pre">App del conductor · Bus 07</div><div class="h1">Reportar novedad</div>
    <div class="card row" style="background:var(--green-soft);align-items:flex-start"><span style="color:var(--green)">${ic('shield')}</span><div class="small" style="color:#14532d;line-height:1.45">Tu reporte queda guardado con la hora y los datos del vehículo. Te respalda ante fallas que no dependen de ti.</div></div>
    <div class="b small" style="margin:6px 0 8px">¿Qué está pasando?</div>
    <div class="opt-grid">${opts.map((o) => `<button class="opt ${r.opt === o ? 'on' : ''}" data-act="repOpt" data-v="${o}">${o}</button>`).join('')}</div>
    <div class="b small" style="margin-bottom:6px">Cuéntanos más <span class="muted">(opcional)</span></div>
    <textarea class="field" data-change="repNote" placeholder="Ej.: Se prendió el testigo de temperatura subiendo por la Av. Suba.">${r.note}</textarea>
    <div class="btn-row" style="margin:8px 0 12px"><button class="btn ${r.photo ? 'btn-primary' : 'btn-ghost'}" data-act="repAttach" data-v="photo">${ic('camera')}${r.photo ? 'Foto adjunta' : 'Foto'}</button><button class="btn ${r.voice ? 'btn-primary' : 'btn-ghost'}" data-act="repAttach" data-v="voice">${ic('mic')}${r.voice ? 'Nota grabada' : 'Nota de voz'}</button></div>
    <div class="card"><div class="sec-title">Se adjunta automáticamente</div><div class="chips" style="margin:0">${[`${hh} · hoy`, 'Refrigerante 112 °C', 'Código P0217', `${V('bus07').km.toLocaleString('es-CO')} km`].map((x) => `<span class="badge b-gray">${x}</span>`).join('')}</div></div>
  </div>
  <div class="foot" style="padding-bottom:10px"><button class="btn btn-primary" data-act="sendReport" ${r.opt ? '' : 'disabled'}>${ic('send')}Enviar reporte</button></div>${tabbar('report')}`;
} });

def({ id: 'myreports', num: '·', role: 'Conductor', title: 'Mis reportes', desc: 'Los reportes que ha enviado el conductor y su estado. Pantalla complementaria a la 15.', hint: 'Cada reporte enviado desde “Reportar” aparece aquí.', extra: true, render() {
  return `<div class="scr"><div class="pre">App del conductor · Bus 07</div><div class="h1">Mis reportes</div>
    ${S.driverReports.map((r) => `<div class="card"><div class="row between"><b class="small">${r.what}</b><span class="muted">${r.when}</span></div>${r.note ? `<div class="small" style="color:var(--ink-2);margin-top:6px">${r.note}</div>` : ''}<div style="margin-top:8px"><span class="badge b-green">${ic('check')}${r.status}</span></div></div>`).join('')}
    <button class="btn btn-ghost" data-act="logout" style="margin-top:6px">${ic('logout')}Cerrar sesión</button>
  </div>${tabbar('myreports')}`;
} });

def({ id: 'shop', num: '16', role: 'Taller', title: 'Validación del taller', desc: 'El taller ve los mismos datos que el dueño, registra su diagnóstico y envía la cotización para aprobación.', hint: 'Edita la causa y los valores: el total se calcula solo. Al enviar, el dueño recibe la cotización en Alertas.', render() {
  const q = S.quote, total = q.items.reduce((a, [, v]) => a + (+v || 0), 0);
  const st = { draft: ['Borrador · sin enviar', 'var(--ink-3)'], sent: ['Pendiente de aprobación del dueño', 'var(--orange)'], approved: ['Aprobada por el dueño', 'var(--green)'] }[q.status];
  return `<div class="scr">
    ${header('[NOMBRE DEL TALLER]', 'Vista del taller aliado', '', 'welcome')}
    <div class="h1" style="font-size:20px;margin-bottom:2px">Diagnóstico con datos</div><div class="muted" style="margin-bottom:12px">Bus 07 · WFN 482 · el dueño ve esta misma información</div>
    <div class="card"><div class="sec-title">Lo que registró el vehículo</div><div class="row between small"><b>P0217 · Sobretemperatura</b><span class="muted">6 nov · 14:28</span></div>
      <div class="row" style="gap:6px;margin:10px 0">${[['112 °C', 'Pico'], ['16 min', 'Sobre 100 °C'], [String(S.driverReports.length), 'Reporte cond.']].map(([a, b]) => `<div style="flex:1;background:var(--app-bg);border-radius:8px;padding:8px"><div class="b">${a}</div><div class="muted">${b}</div></div>`).join('')}</div>
      <div class="muted">Último servicio: cambio de aceite · 22 oct · 140.950 km</div></div>
    <div class="card"><div class="sec-title">Diagnóstico del taller</div><div class="small" style="margin-bottom:6px">Causa encontrada</div>
      <textarea class="field" data-change="qCause" ${q.status !== 'draft' ? 'disabled' : ''} style="min-height:50px">${q.cause}</textarea>
      ${q.items.map(([n, v], i) => `<div class="row between small" style="margin-top:8px"><span>${n}</span><input class="field" data-change="qItem" data-i="${i}" value="${v}" inputmode="numeric" ${q.status !== 'draft' ? 'disabled' : ''} style="width:120px;text-align:right;padding:6px 8px"/></div>`).join('')}
      <div class="row between" style="border-top:1px solid var(--line);margin-top:10px;padding-top:10px"><b>Total cotizado</b><b data-total>${fmtCOP(total)}</b></div></div>
    <div class="row small" style="color:${st[1]};font-weight:600;margin-bottom:10px"><i style="width:7px;height:7px;border-radius:50%;background:${st[1]}"></i>${st[0]}</div>
    <div class="card row" style="background:var(--blue-soft)"><div class="small" style="color:var(--blue-ink);line-height:1.45">Comisión por referido: <b>10 %</b> de la suscripción anual de cada flota que llegue con tu código. Ej.: una flota Tier 3 anual te deja <b>${fmtCOP(TIERS[2][2] * ANNUAL_PAID_MONTHS * 0.1)}</b>.</div></div>
  </div>
  <div class="foot"><button class="btn btn-primary" data-act="sendQuote" ${q.status === 'draft' ? '' : 'disabled'}>${q.status === 'draft' ? 'Enviar cotización al dueño' : 'Cotización enviada'}</button><button class="btn btn-ghost" data-act="schedule" data-v="bus07" data-title="Mantenimiento preventivo de refrigeración" data-type="Diagnóstico">${ic('cal')}Proponer mantenimiento preventivo</button></div>`;
} });

/* ================= navegación ================= */
const phone = document.getElementById('phone');
let current = 'welcome', prev = [];
let liveTimer = null;

const HOME = { owner: 'panel', driver: 'driver', shop: 'shop' };
const ROLE_OF = { 'Dueño': 'owner', Conductor: 'driver', Taller: 'shop' };
const PUBLIC = ['welcome', 'login'];
function allowed(id) {
  const s = SCREENS.find((x) => x.id === id);
  if (!s) return false;
  if (PUBLIC.includes(id)) return true;
  return !!S.session && ROLE_OF[s.role] === S.session;
}
function go(id, push = true) {
  if (id === 'back') { history.back(); return; }
  if (!allowed(id)) id = S.session ? HOME[S.session] : 'welcome';
  current = id;
  if (push) history.pushState({ id }, '', '#/' + id); else history.replaceState({ id }, '', '#/' + id);
  render();
}
window.addEventListener('popstate', (e) => {
  const id = (e.state && e.state.id) || location.hash.replace('#/', '') || 'welcome';
  current = allowed(id) ? id : (S.session ? HOME[S.session] : 'welcome');
  render();
});

function render() {
  const s = SCREENS.find((x) => x.id === current);
  const scr = phone.querySelector('.scr');
  const keep = scr && phone.dataset.cur === current ? scr.scrollTop : 0;
  phone.innerHTML = s.render();
  phone.dataset.cur = current;
  const n = phone.querySelector('.scr'); if (n) n.scrollTop = keep;
  document.title = current === 'welcome' ? 'Mechanalytics' : `${s.title} · Mechanalytics`;
  clearInterval(liveTimer);
  if (current === 'twin') liveTimer = setInterval(() => {
    const v = V(ui.twinVeh), l = twinLive(v);
    for (const k of ['rpm', 'oil', 'bat', 'spd']) { const e = phone.querySelector(`[data-live="${k}"]`); if (e) e.textContent = l[k]; }
    const e2 = phone.querySelector('[data-live="bat2"]'); if (e2) e2.textContent = l.bat + ' V';
  }, 2000);
}

/* ================= toast & sheets ================= */
const toastEl = document.getElementById('toast');
let toastT;
function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2600); }

function sheet(html, onMount) {
  const bg = document.createElement('div');
  bg.className = 'sheet-bg';
  bg.innerHTML = `<div class="sheet">${html}</div>`;
  bg.addEventListener('click', (e) => { if (e.target === bg || e.target.closest('[data-close]')) bg.remove(); });
  phone.appendChild(bg);
  onMount && onMount(bg);
  return bg;
}

function scheduleSheet({ veh, title, type, alertId }) {
  const v = V(veh);
  const days = [['Lun', 9], ['Mar', 10], ['Mié', 11], ['Jue', 12], ['Vie', 13], ['Sáb', 14]];
  const times = ['7:00 a. m.', '10:00 a. m.', '2:00 p. m.', '4:00 p. m.'];
  const existing = S.jobs.find((j) => j.veh === veh && j.title === title);
  let d = existing ? existing.day : 11, t = existing ? existing.time : times[0];
  const bg = sheet(`<div class="b" style="font-size:17px">${existing ? 'Reprogramar' : 'Agendar'}: ${title}</div><div class="muted" style="margin-bottom:14px">${v.name} · ${v.plate} · [TALLER ALIADO]</div>
    <div class="sec-title">Día</div><div class="chips" data-g="d">${days.map(([l, n]) => `<button class="chip ${n === d ? 'on' : ''}" data-d="${n}">${l} ${n}</button>`).join('')}</div>
    <div class="sec-title">Hora</div><div class="chips" data-g="t">${times.map((x) => `<button class="chip ${x === t ? 'on' : ''}" data-t="${x}">${x}</button>`).join('')}</div>
    <button class="btn btn-primary" data-ok style="margin-top:8px">Confirmar</button><button class="btn" data-close style="margin-top:4px;color:var(--ink-3)">Cancelar</button>`);
  bg.addEventListener('click', (e) => {
    const bd = e.target.closest('[data-d]'), bt = e.target.closest('[data-t]');
    if (bd) { d = +bd.dataset.d; bg.querySelectorAll('[data-d]').forEach((x) => x.classList.toggle('on', x === bd)); }
    if (bt) { t = bt.dataset.t; bg.querySelectorAll('[data-t]').forEach((x) => x.classList.toggle('on', x === bt)); }
    if (e.target.closest('[data-ok]')) {
      if (existing) Object.assign(existing, { day: d, time: t }); else S.jobs.push({ day: d, time: t, type, title, veh });
      if (alertId) { const a = S.alerts.find((x) => x.id === alertId); if (a) { a.done = true; a.unread = false; } }
      save(); bg.remove(); ui.day = d; toast(`Agendado para el ${d} de noviembre · ${t}`); render();
    }
  });
}

/* ================= acciones ================= */
const actions = {
  role(el) { ui.loginRole = el.dataset.v; go('login'); },
  login() {
    const em = phone.querySelector('#lg-email').value.trim(), pw = phone.querySelector('#lg-pass').value;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return toast('Escribe un correo válido.');
    if (pw.length < 4) return toast('La contraseña debe tener al menos 4 caracteres.');
    S.session = ui.loginRole; S.role = ui.loginRole; S.user = em; save();
    history.replaceState({ id: 'welcome' }, '', '#/welcome');
    go(HOME[S.session]);
  },
  logout() { S.session = null; save(); go('welcome'); },
  resetData() { if (!confirm('¿Restablecer todos los datos de la cuenta de prueba?')) return; const r = S.session; S = freshState(); S.session = r; save(); toast('Datos restablecidos.'); go(HOME[r]); },
  refSheet() {
    const bg = sheet(`<div class="b" style="font-size:17px">Código de taller aliado</div><div class="muted" style="margin-bottom:12px">Tu taller te dio un código al recomendarte Mechanalytics.</div><input class="field" id="refc" placeholder="Ej.: TALLER-0421" style="text-transform:uppercase"/><button class="btn btn-primary" data-ok style="margin-top:10px">Aplicar código</button>`);
    bg.querySelector('#refc').focus();
    bg.querySelector('[data-ok]').addEventListener('click', () => { const v = bg.querySelector('#refc').value.trim().toUpperCase(); if (!v) return; S.referral = v; save(); bg.remove(); toast('Código aplicado: tu taller queda asociado a la cuenta.'); render(); });
  },
  toast(el) { toast(el.dataset.v); },
  fleetFilter(el) { ui.fleetFilter = el.dataset.v; render(); },
  openTwin(el) { ui.twinVeh = el.dataset.v; ui.twinTab = 'Gemelo'; go('twin'); },
  predSort(el) { ui.predSort = el.dataset.v; render(); },
  openPred(el) { const p = PREDS.find((x) => x.id === el.dataset.v); if (p.goto) return go(p.goto); ui.predId = p.id; go('pred'); },
  twinTab(el) { ui.twinTab = el.dataset.v; render(); },
  histFor(el) { ui.histVeh = el.dataset.v; },
  schedule(el) { scheduleSheet({ veh: el.dataset.v, title: el.dataset.title, type: el.dataset.type, alertId: el.dataset.alert }); },
  readAlert(el) { const a = S.alerts.find((x) => x.id === el.dataset.v); if (a) a.unread = false; save(); },
  alertFilter(el) { ui.alertFilter = el.dataset.v.split(' ')[0]; render(); },
  day(el) { ui.day = +el.dataset.v; render(); },
  dayAll() { ui.day = 0; render(); },
  histFilter(el) { ui.histFilter = el.dataset.v; render(); },
  pesvMonth(el) { ui.pesvMonth = el.dataset.v; render(); },
  printPesv() {
    const doc = phone.querySelector('#pesv-doc').outerHTML;
    const w = window.open('', '_blank');
    if (!w) return toast('Permite ventanas emergentes para descargar el PDF.');
    w.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Reporte PESV · ${ui.pesvMonth}</title><link rel="stylesheet" href="${location.href.split('#')[0].replace(/[^/]*$/, '')}styles.css"><style>body{background:#fff;padding:40px;max-width:640px;margin:auto}.card{box-shadow:none!important;border:1px solid #e6e6e3}</style></head><body>${doc}<p class="muted">Apoya el componente de vehículos seguros; no sustituye el cumplimiento integral del PESV.</p><script>setTimeout(()=>print(),400)<\/script></body></html>`);
    w.document.close();
  },
  toggleSet(el) { const k = el.dataset.v; S.settings[k] = !S.settings[k]; save(); render(); toast('Ajustes guardados'); },
  linkStep(el) {
    const i = +el.dataset.v, L = ui.link;
    if (i !== L.done) return;
    L.done = i + 1;
    if (L.done === 3) { L.searching = true; setTimeout(() => { L.searching = false; if (current === 'link') render(); }, 1600); }
    render();
  },
  doLink() {
    const plate = (ui.link.plate || '').toUpperCase().trim();
    if (!/^[A-Z]{3} ?\d{2,3}[A-Z]?$/.test(plate)) return toast('Escribe una placa válida, p. ej. WFN 482');
    let v = S.vehicles.find((x) => x.plate.replace(' ', '') === plate.replace(' ', ''));
    if (!v) {
      if (S.vehicles.length >= 30) return toast('Llegaste al tope de 30 adaptadores incluidos.');
      const n = S.vehicles.length + 1;
      v = { id: 'v' + Date.now(), name: `Vehículo ${String(n).padStart(2, '0')}`, plate: plate.replace(/^([A-Z]{3}) ?/, '$1 '), model: 'Nuevo · por identificar', status: 'ok', sub: 'Recién vinculado · 0 km registrados', health: 95, km: 0, temp: 85, onRoute: false };
      S.vehicles.push(v); S.plan.adapters = Math.max(S.plan.adapters, S.vehicles.length);
      toast(`${v.plate} vinculado. Ya ves sus datos en vivo.`);
    } else toast(`Adaptador re-vinculado a ${v.name}.`);
    save(); ui.link = { done: 0, searching: false, found: false, plate: '' }; ui.twinVeh = v.id; ui.twinTab = 'Gemelo'; go('twin');
  },
  billing(el) { S.plan.billing = el.dataset.v; save(); render(); },
  tier(el) { S.plan.tier = +el.dataset.v; save(); render(); toast(`Plan cambiado a ${TIERS[S.plan.tier - 1][0]}`); },
  moreAdapters() {
    const bg = sheet(`<div class="b" style="font-size:17px">Pedir adaptadores</div><div class="muted" style="margin-bottom:12px">Tienes ${S.plan.adapters}. Incluidos sin costo hasta 30 por flota.</div><div class="row" style="justify-content:center;gap:18px;margin:10px 0 16px"><button class="back" data-m="-1">−</button><b id="qty" style="font-size:28px">1</b><button class="back" data-m="1">+</button></div><button class="btn btn-primary" data-ok>Solicitar envío</button>`);
    let q = 1; const max = 30 - S.plan.adapters;
    bg.addEventListener('click', (e) => {
      const m = e.target.closest('[data-m]'); if (m) { q = Math.min(Math.max(1, q + +m.dataset.m), Math.max(1, max)); bg.querySelector('#qty').textContent = q; }
      if (e.target.closest('[data-ok]')) { if (max <= 0) { toast('Ya tienes el máximo de 30 adaptadores incluidos.'); return bg.remove(); } S.plan.adapters += q; save(); bg.remove(); toast(`${q} adaptador(es) en camino por mensajería.`); render(); }
    });
  },
  check(el) { const i = +el.dataset.v; S.checklist[i] = !S.checklist[i]; save(); render(); },
  finishCheck() {
    const d = new Date();
    S.driverReports.unshift({ when: `${d.getDate()} nov · ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`, what: 'Inspección preoperacional', note: '6 de 6 puntos verificados.', status: 'Registrada en el historial' });
    S.history.unshift({ veh: 'bus07', d: String(d.getDate()).padStart(2, '0'), m: 'nov', title: 'Inspección preoperacional completa', sub: '6 de 6 puntos', src: 'Conductor' });
    S.checklist = CHECK.map(() => false); save(); toast('Inspección registrada. ¡Buen viaje!'); render();
  },
  repOpt(el) { ui.report.opt = el.dataset.v; render(); },
  repAttach(el) { const k = el.dataset.v; ui.report[k] = !ui.report[k]; render(); },
  sendReport() {
    const r = ui.report, d = new Date();
    const hh = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    S.driverReports.unshift({ when: `${d.getDate()} nov · ${hh}`, what: r.opt, note: r.note, status: 'Enviado al dueño' });
    S.history.unshift({ veh: 'bus07', d: String(d.getDate()).padStart(2, '0'), m: 'nov', title: `Reporte: ${r.opt.toLowerCase()}`, sub: `${hh}${r.photo ? ' · con foto' : ''}${r.voice ? ' · con nota de voz' : ''}`, src: 'Conductor' });
    S.alerts.unshift({ id: 'r' + Date.now(), kind: 'prev', when: hh, title: `Reporte del conductor: ${r.opt}`, body: r.note || 'Sin nota adicional. Datos del vehículo adjuntos.', veh: 'bus07', action: 'Ver diagnóstico', go: 'diag', unread: true });
    ui.report = { opt: '', note: '', photo: false, voice: false };
    save(); toast('Reporte enviado. Queda guardado con la hora y los datos del vehículo.'); go('myreports');
  },
  sendDiag() { S.diagSent = true; save(); toast('Diagnóstico enviado al taller aliado.'); render(); },
  sendQuote() {
    S.quote.status = 'sent';
    const total = S.quote.items.reduce((a, [, v]) => a + (+v || 0), 0);
    S.alerts.unshift({ id: 'q1', kind: 'quote', when: 'Ahora', title: 'Cotización del taller · Bus 07', body: `${S.quote.cause}. Total: ${fmtCOP(total)}.`, veh: 'bus07', unread: true });
    save(); toast('Cotización enviada. El dueño la verá en Alertas.'); render();
  },
  approveQuote() {
    S.quote.status = 'approved';
    const a = S.alerts.find((x) => x.id === 'q1'); if (a) a.unread = false;
    if (!S.jobs.find((j) => j.veh === 'bus07' && j.type === 'Diagnóstico')) S.jobs.push({ day: 12, time: '2:00 p. m.', type: 'Diagnóstico', title: 'Termostato y manguera', veh: 'bus07' });
    save(); toast('Cotización aprobada. El taller ya puede reparar.'); render();
  },
  clearCode() {
    const v = V('bus07'); Object.assign(v, { status: 'ok', sub: '142.087 km · 89 °C', health: 84, temp: 89 });
    S.alerts = S.alerts.filter((a) => a.kind !== 'crit');
    S.history.unshift({ veh: 'bus07', d: '12', m: 'nov', title: 'Termostato y manguera reemplazados', sub: 'Taller aliado · código P0217 borrado', src: 'Taller' });
    save(); toast('Código borrado. Bus 07 vuelve a operar.'); render();
  },
};

const changes = {
  histVeh(el) { ui.histVeh = el.value; render(); },
  setVal(el) { S.settings[el.dataset.k] = el.value; save(); toast('Ajustes guardados'); },
  plate(el) { ui.link.plate = el.value.toUpperCase(); },
  repNote(el) { ui.report.note = el.value; },
  qCause(el) { S.quote.cause = el.value; save(); },
  qItem(el) {
    S.quote.items[+el.dataset.i][1] = +el.value.replace(/\D/g, '') || 0; save();
    const t = phone.querySelector('[data-total]'); if (t) t.textContent = fmtCOP(S.quote.items.reduce((a, [, v]) => a + v, 0));
  },
};

phone.addEventListener('click', (e) => {
  const a = e.target.closest('[data-act]');
  const g = e.target.closest('[data-go]');
  if (a && !a.disabled && actions[a.dataset.act]) actions[a.dataset.act](a);
  if (g && !g.disabled) go(g.dataset.go);
});
phone.addEventListener('keydown', (e) => { if (e.key === 'Enter' && current === 'login' && e.target.matches('input')) actions.login(); });
phone.addEventListener('input', (e) => { const k = e.target.dataset.change; if (k && ['plate', 'repNote', 'qItem', 'qCause'].includes(k)) changes[k](e.target); });
phone.addEventListener('change', (e) => { const k = e.target.dataset.change; if (k && !['plate', 'repNote', 'qItem', 'qCause'].includes(k)) changes[k](e.target); });
/* ================= arranque ================= */
const start = location.hash.replace('#/', '');
go(allowed(start) ? start : (S.session ? HOME[S.session] : 'welcome'), false);
