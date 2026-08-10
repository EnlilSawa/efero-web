'use client'

import { useState } from 'react'

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="max-w-[760px]">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        const btnId = `faq-button-${i}`
        return (
          <div key={item.q} className="border-b border-mist">
            <h2 className="m-0 text-[inherit] font-inherit">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-[17px] md:text-[18px] font-medium text-ink pr-4">{item.q}</span>
                <span
                  className={`font-mono text-[18px] text-forest shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="m-0 text-[15px] md:text-[16px] leading-[1.7] text-[#2f4a41]">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
