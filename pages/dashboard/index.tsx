import Layout from '@dashboard/Layout'
import Seo from '@components/compSeo'
import Menu from '@components/dashboard/Menu'
import { Grid } from '@mui/material'
import CashFlow from '@components/dashboard/CashFlow'
import Welcome from '@components/dashboard/Welcome'
import Actions from '@components/dashboard/Actions'

export default function Dashboard() {
  return (
    <Layout>
      <Seo title="Dashboard" />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 2 }}>
          <Menu />
        </Grid>
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Welcome />
          <Actions />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <CashFlow />
        </Grid>
      </Grid>
    </Layout>
  )
}
