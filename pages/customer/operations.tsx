import React from 'react'
import { Grid, Typography } from '@mui/material'

import { PrincipalLayout } from '../../components/layouts'

const CustomerPage = () => {
  return (
    <PrincipalLayout title='Operaciones' pageDescription='Operaciones de tus asesores'>
      <Grid container justifyContent='stretch' height='100vh'>
        <Grid item >
          <Typography variant="h1" color="primary"  >
            Operations
          </Typography>
        </Grid>
      </Grid>
    </PrincipalLayout>
  )
}

export default CustomerPage