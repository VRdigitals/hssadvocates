import { PageShell } from '../components/PageShell'
import { PracticeAreas } from '../components/PracticeAreas'

export function ServicesIndexPage() {
  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}>
      <PracticeAreas />
    </PageShell>
  )
}
