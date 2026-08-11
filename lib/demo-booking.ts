export const DEMO_MODULES = [
  {
    id: 'customers',
    label: 'Kunder og CRM',
    description: 'Kunderegister, kontaktpersoner, adresser og historikk.',
  },
  {
    id: 'planning',
    label: 'Jobber og planlegger',
    description: 'Oppdrag, bemanning, kalender og løpende oversikt.',
  },
  {
    id: 'quotes',
    label: 'Tilbud og kalkulasjon',
    description: 'Profesjonelle tilbud, materialer, arbeidstid og godkjenning.',
  },
  {
    id: 'time',
    label: 'Timer og ansatte',
    description: 'Timeføring, fravær og oversikt over medarbeidere.',
  },
  {
    id: 'materials',
    label: 'Materialer og innkjøp',
    description: 'Materialforbruk, kostnader og innkjøp på riktig jobb.',
  },
  {
    id: 'invoicing',
    label: 'Faktura og økonomi',
    description: 'Fakturagrunnlag, lønnsomhet og kontroll før utsending.',
  },
  {
    id: 'quality',
    label: 'HMS og kvalitet',
    description: 'Sjekklister, risikovurderinger, avvik og dokumentasjon.',
  },
  {
    id: 'service',
    label: 'Service og vedlikehold',
    description: 'Serviceavtaler, utstyr og periodiske oppdrag.',
  },
  {
    id: 'unsure',
    label: 'Usikker – hjelp meg å velge',
    description: 'Vi finner sammen modulene som passer arbeidsflyten deres.',
  },
] as const

export const TEAM_SIZE_OPTIONS = [
  'Kun meg selv',
  '2–3 personer',
  '4–8 personer',
  '9–20 personer',
  '21+ personer',
] as const

export const START_TIMELINE_OPTIONS = [
  'Så snart som mulig',
  'Innen 1 måned',
  'Om 1–3 måneder',
  'Om 3–6 måneder',
  'Senere enn 6 måneder',
  'Bare utforsker mulighetene',
] as const

export type DemoBooking = {
  name: string
  company: string
  email: string
  phone: string
  teamSize: string
  modules: string[]
  startTimeline: string
  message: string
  website: string
}

export type DemoBookingValidation =
  | { ok: true; data: DemoBooking }
  | { ok: false; errors: Record<string, string> }

const moduleIds = new Set<string>(DEMO_MODULES.map(module => module.id))
const teamSizes = new Set<string>(TEAM_SIZE_OPTIONS)
const startTimelines = new Set<string>(START_TIMELINE_OPTIONS)

function cleanString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export function validateDemoBooking(input: unknown): DemoBookingValidation {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, errors: { form: 'Ugyldig skjema.' } }
  }

  const raw = input as Record<string, unknown>
  const data: DemoBooking = {
    name: cleanString(raw.name, 100),
    company: cleanString(raw.company, 140),
    email: cleanString(raw.email, 254).toLowerCase(),
    phone: cleanString(raw.phone, 40),
    teamSize: cleanString(raw.teamSize, 40),
    modules: Array.isArray(raw.modules)
      ? [...new Set(raw.modules.filter((item): item is string => typeof item === 'string' && moduleIds.has(item)))].slice(0, DEMO_MODULES.length)
      : [],
    startTimeline: cleanString(raw.startTimeline, 60),
    message: cleanString(raw.message, 2_000),
    website: cleanString(raw.website, 200),
  }

  const errors: Record<string, string> = {}
  if (data.name.length < 2) errors.name = 'Skriv inn fullt navn.'
  if (data.company.length < 2) errors.company = 'Skriv inn bedriftsnavn.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Skriv inn en gyldig e-postadresse.'
  if (data.phone && !/^[+\d][\d\s().-]{5,}$/.test(data.phone)) errors.phone = 'Skriv inn et gyldig telefonnummer.'
  if (!teamSizes.has(data.teamSize)) errors.teamSize = 'Velg størrelse på teamet.'
  if (data.modules.length === 0) errors.modules = 'Velg minst én modul, eller velg at du ønsker hjelp.'
  if (!startTimelines.has(data.startTimeline)) errors.startTimeline = 'Velg når dere ønsker å starte.'

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, data }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character)
}

function moduleLabels(moduleIdsToFormat: string[]) {
  return moduleIdsToFormat.map(id => DEMO_MODULES.find(module => module.id === id)?.label ?? id)
}

export function buildDemoEmail(data: DemoBooking) {
  const modules = moduleLabels(data.modules)
  const phone = data.phone || 'Ikke oppgitt'
  const message = data.message || 'Ingen tilleggsinformasjon.'
  const rows = [
    ['Navn', data.name],
    ['Bedrift', data.company],
    ['E-post', data.email],
    ['Telefon', phone],
    ['Størrelse på team', data.teamSize],
    ['Ønsket oppstart', data.startTimeline],
  ]

  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 16px 8px 0;color:#5a7268;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#00281f;font-weight:600">${escapeHtml(value)}</td>
    </tr>`).join('')

  return {
    subject: `Ny demoforespørsel: ${data.company}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;color:#00281f">
        <h1 style="font-size:24px;margin:0 0 20px">Ny demoforespørsel</h1>
        <table style="border-collapse:collapse;width:100%;margin-bottom:24px">${htmlRows}</table>
        <h2 style="font-size:17px;margin:0 0 10px">Ønskede moduler</h2>
        <ul style="margin:0 0 24px;padding-left:20px">${modules.map(module => `<li style="margin:6px 0">${escapeHtml(module)}</li>`).join('')}</ul>
        <h2 style="font-size:17px;margin:0 0 10px">Tilleggsinformasjon</h2>
        <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
      </div>`,
    text: [
      'Ny demoforespørsel',
      '',
      ...rows.map(([label, value]) => `${label}: ${value}`),
      `Ønskede moduler: ${modules.join(', ')}`,
      '',
      'Tilleggsinformasjon:',
      message,
    ].join('\n'),
  }
}
