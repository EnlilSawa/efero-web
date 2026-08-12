export const PRICING_PLANS = [
  {
    name: 'Liten',
    price: '690 kr/mnd',
    priceMinor: 69_000,
    teamLabel: 'Inntil 3 feltbrukere',
    description: 'For enkeltpersonforetak og små fagbedrifter som vil samle den daglige driften.',
    features: ['Inntil 3 feltbrukere', 'Alle funksjoner i grunnpakken', 'Gratis personlig oppstart', 'E-postsupport innen én virkedag'],
  },
  {
    name: 'Middels',
    price: '1 490 kr/mnd',
    priceMinor: 149_000,
    teamLabel: 'Inntil 8 feltbrukere',
    description: 'For bedrifter i vekst som trenger den samme gode flyten for et større lag.',
    features: ['Inntil 8 feltbrukere', 'Alle funksjoner i grunnpakken', 'Gratis personlig oppstart', 'Prioritert e-postsupport'],
  },
  {
    name: 'Stor',
    price: '2 490 kr/mnd',
    priceMinor: 249_000,
    teamLabel: 'Inntil 15 feltbrukere',
    description: 'For større fagmiljøer som vil samle kontor, felt og prosjektoppfølging i Efero.',
    features: ['Inntil 15 feltbrukere', 'Alle funksjoner i grunnpakken', 'Gratis personlig oppstart', 'Prioritert e-postsupport'],
  },
] as const

export const EXTRA_FIELD_USER_PRICE = '119 kr/mnd'
export const EXTRA_FIELD_USER_PRICE_MINOR = 11_900

export const CORE_PACKAGE_FEATURES = [
  'Kunder og kundehistorikk',
  'Oppdrag, prosjekter og planlegger',
  'Timer, ansatte og fravær',
  'Tilbud og kalkulasjon',
  'Fakturagrunnlag og PDF-eksport',
  'Mobilapp, bilder og jobbarkiv',
] as const

export const OPTIONAL_MODULES = [
  { name: 'HMS og kvalitet', description: 'Sjekklister, risiko, SJA, RUH og dokumentasjon.' },
  { name: 'Materialer og grossistpriser', description: 'Prisimport, materialbibliotek, innkjøp og forbruk.' },
  { name: 'Service og vedlikehold', description: 'Serviceavtaler, utstyr og periodiske oppdrag.' },
  { name: 'Prosjektøkonomi og rapporter', description: 'Utvidet økonomioversikt, nøkkeltall og rapportering.' },
  { name: 'Integrasjoner og tilpasning', description: 'Regnskap, grossister og særskilte arbeidsflyter.' },
] as const

export const PRICING_TERMS = {
  trial: '30 dager gratis uten betalingskort',
  setup: 'Personlig oppstart uten etableringsgebyr',
  cancellation: 'Månedsabonnement uten bindingstid',
  support: 'E-postsupport med svar innen én virkedag',
} as const
