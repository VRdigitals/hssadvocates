import { PageShell } from '../components/PageShell'
import { HashimIntro } from '../components/HashimIntro'

export function MeetHashimPage() {
  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Meet Hashim' }]}>
      <HashimIntro />
    </PageShell>
  )
}
