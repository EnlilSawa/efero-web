import { NewJobMockup, TechnicianMockup, InvoiceMockup } from './AppMockup'

const steps = [
  {
    number: 'Steg 1',
    title: 'Opprett jobben på 20 sekunder',
    text: 'Kunden ringer. Du åpner Efero, skriver inn navn, adresse og hva som skal gjøres. Velger hvilken tekniker som tar jobben. Ferdig.',
    mockup: <NewJobMockup />,
    imageLeft: true,
  },
  {
    number: 'Steg 2',
    title: 'Teknikeren ser jobben på telefonen',
    text: 'Teknikeren åpner appen og ser dagens jobber med adresse og beskrivelse. Navigerer dit. Trykker ferdig når jobben er gjort.',
    mockup: <TechnicianMockup />,
    imageLeft: false,
  },
  {
    number: 'Steg 3',
    title: 'Faktura sendes automatisk',
    text: 'I det teknikeren trykker ferdig genereres fakturaen automatisk med riktig MVA. Kunden får den på e-post og betaler innen forfall.',
    mockup: <InvoiceMockup />,
    imageLeft: true,
  },
]

function MockupStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-lgray rounded-[12px] p-4 border border-border">
      {children}
    </div>
  )
}

export function HowItWorks() {
  return (
    <section className="bg-white border-b border-border py-24 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-4">
            Slik fungerer Efero
          </h2>
          <p className="text-[18px] text-slate">
            Fra første jobb til betalt faktura — på minutter.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Mockup */}
              <div className={`${step.imageLeft ? 'md:order-1' : 'md:order-2'} order-1`}>
                <MockupStage>{step.mockup}</MockupStage>
              </div>

              {/* Text */}
              <div className={`${step.imageLeft ? 'md:order-2' : 'md:order-1'} order-2 max-w-[440px] ${!step.imageLeft ? 'md:ml-0' : ''}`}>
                <div className="inline-block bg-eblue text-white text-[12px] font-semibold px-3 py-1 rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-[28px] font-semibold text-navy leading-[1.25] tracking-tight mb-5">
                  {step.title}
                </h3>
                <p className="text-[16px] text-slate leading-[1.7]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
