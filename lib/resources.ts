export type ResourceArticle = {
  slug: string
  title: string
  description: string
  eyebrow: string
  intro: string
  steps: Array<{ title: string; text: string }>
  tips: string[]
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'lag-tilbud-med-kalkulasjon',
    title: 'Lag tilbud med kalkulasjon',
    description: 'Slik lager du et tilbud med egne oppskrifter, arbeidstimer, materialkost, påslag og frosne kundepriser i Efero.',
    eyebrow: 'Tilbud og kalkyle',
    intro: 'Kalkulasjon passer når du vil regne fra mengde til arbeid og materialer. Du bruker bedriftens egne oppskrifter og satser – Efero legger ikke inn skjulte bransjenormer.',
    steps: [
      { title: 'Velg Kalkulasjon', text: 'Opprett et nytt tilbud, velg kunde og velg Kalkulasjon. Enkelt pristilbud er fortsatt tilgjengelig når du bare vil skrive salgspris direkte.' },
      { title: 'Legg inn timer og materialer', text: 'Velg arbeidstimer som egen linje, eller søk etter en vare på navn eller varenummer. Antall eller m² er det eneste du trenger å skrive når grunnlaget allerede finnes.' },
      { title: 'Kontroller kost og påslag', text: 'Kostpris, påslag og beregnet salgspris vises internt. Du kan justere bedriftens egne faktorer før tilbudet opprettes.' },
      { title: 'Send en trygg kundelenke', text: 'Kunden ser beskrivelse, mengde, pris og MVA – aldri kostpris, påslag, margin eller leverandørinformasjon.' },
    ],
    tips: ['Lag oppskrifter for arbeid dere gjør ofte.', 'Bruk en tydelig egen linje for arbeidstimer.', 'Kontroller gyldighetsdato før utsending.'],
  },
  {
    slug: 'oppdater-grossistpriser',
    title: 'Oppdater grossistpriser fra prisfil',
    description: 'Importer CSV- eller TXT-priser, match på varenummer og forhåndsvis alle endringer før materialbiblioteket oppdateres.',
    eyebrow: 'Materialer og grossist',
    intro: 'Prisfilimport gjør det mulig å oppdatere innkjøpspriser uten å skrive hver vare på nytt. Efero matcher varenummer og lar deg kontrollere endringene før de lagres.',
    steps: [
      { title: 'Eksporter prisfilen', text: 'Hent CSV eller TXT fra grossisten. Filen må inneholde varenummer, navn eller beskrivelse, enhet og kostpris.' },
      { title: 'Velg leverandør og påslag', text: 'Skriv leverandørnavn og standardpåslag for nye varer. Eksisterende varer beholder sitt avtalte påslag.' },
      { title: 'Forhåndsvis', text: 'Efero viser hvilke varer som er nye, hvilke priser som endres og hvilke som er uendret. Store avvik blir enkle å oppdage.' },
      { title: 'Importer', text: 'Bekreft først når tallene ser riktige ut. Allerede opprettede tilbud beholder sine opprinnelige priser.' },
    ],
    tips: ['Ta vare på originalfilen fra grossisten.', 'Kontroller prisformat med komma eller punktum.', 'Send aldri kostpris eller påslag i kundedokumenter.'],
  },
  {
    slug: 'folg-opp-sendte-tilbud',
    title: 'Følg opp sendte tilbud',
    description: 'Se når kunden åpner tilbudet, motta spørsmål og få godkjenning eller avslag direkte i Efero.',
    eyebrow: 'Kundeoppfølging',
    intro: 'Et sendt tilbud bør ikke forsvinne i innboksen. Den sikre kundelenken samler åpning, spørsmål og endelig svar i samme tilbudstidslinje.',
    steps: [
      { title: 'Send til riktig kontakt', text: 'Velg kundens kontaktperson og kontroller emne og melding. Utsendingen låser riktig tilbudsversjon.' },
      { title: 'Kunden åpner lenken', text: 'Kunden får et mobilvennlig tilbud med linjer, MVA og totalsum. Åpningen registreres i kundeaktiviteten.' },
      { title: 'Svar og spørsmål', text: 'Kunden kan sende et spørsmål, godkjenne eller avslå. Kommentar og navn følger hendelsen.' },
      { title: 'Følg opp fra kontoret', text: 'Tilbudsstatus og tidslinje oppdateres i Efero. Svarfrister som nærmer seg vises også i oversikten.' },
    ],
    tips: ['Bruk en konkret emnelinje.', 'Sett alltid en realistisk svarfrist.', 'Svar raskt når kunden stiller spørsmål.'],
  },
  {
    slug: 'prosjektokonomi-i-efero',
    title: 'Prosjektøkonomi uten falsk margin',
    description: 'Sammenlign godkjente tilbud med netto fakturert og se hva som gjenstår, uten å blande omsetning med lønnskost eller regnskapsresultat.',
    eyebrow: 'Prosjektkontroll',
    intro: 'Efero viser tall det faktisk har belegg for: godkjente tilbud, utstedte fakturaer, kreditert beløp og registrerte timer. Det kalles omsetningskontroll – ikke regnskapsmargin.',
    steps: [
      { title: 'Knytt oppdrag til prosjektet', text: 'Prosjektet samler oppdrag for samme kunde og eventuelt samme arbeidssted.' },
      { title: 'Bruk godkjente tilbud som grunnlag', text: 'Nettoverdien av godkjente, jobbknyttede tilbud blir prosjektets kommersielle grunnlag.' },
      { title: 'Følg faktureringen', text: 'Utstedte fakturaer og kreditnotaer summeres mot de samme oppdragene. Efero viser gjenstående eller overfakturert beløp.' },
      { title: 'Se timer separat', text: 'Estimerte og registrerte timer vises ved siden av økonomien. Lønnskost og regnskapsmargin krever egne, autoritative data.' },
    ],
    tips: ['Knytt tilbudet til riktig oppdrag.', 'Kontroller at alle prosjektjobber er koblet.', 'Bruk regnskapet som fasit for endelig resultat.'],
  },
]

export function resourceBySlug(slug: string) {
  return resourceArticles.find(article => article.slug === slug)
}
