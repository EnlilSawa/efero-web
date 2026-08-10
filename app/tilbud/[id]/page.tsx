import type { Metadata } from 'next'
import { getPublicQuote } from '@/app/actions/quote'
import { QuotePublicView } from '@/components/QuotePublicView'

// Token ligger i ?t= → alltid dynamisk, aldri cachet.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tilbud · Efero',
  robots: { index: false, follow: false },
}

export default async function TilbudPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ t?: string }>
}) {
  const { id } = await params
  const { t } = await searchParams
  const token = t ?? ''
  const quote = await getPublicQuote(id, token)
  return <QuotePublicView quote={quote} id={id} token={token} />
}
