import { PageShell } from '../components/PageShell'
import { HowWeWork } from '../components/HowWeWork'

export function HowWeWorkPage() {
  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'How We Work' }]}>
      <HowWeWork />
    </PageShell>
  )
}
