import { PageShell } from '../components/PageShell'
import { HashimTimeline } from '../components/HashimTimeline'

export function ExperiencePage() {
  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Experience' }]}>
      <HashimTimeline />
    </PageShell>
  )
}
