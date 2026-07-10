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
  params: { id: string }
  searchParams: { t?: string }
}) {
  const token = searchParams.t ?? ''
  const quote = await getPublicQuote(params.id, token)
  return <QuotePublicView quote={quote} id={params.id} token={token} />
}
