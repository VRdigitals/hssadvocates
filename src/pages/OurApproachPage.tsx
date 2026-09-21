import { PageShell } from '../components/PageShell'
import { Approach } from '../components/Approach'

export function OurApproachPage() {
  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Approach' }]}>
      <Approach />
    </PageShell>
  )
}
