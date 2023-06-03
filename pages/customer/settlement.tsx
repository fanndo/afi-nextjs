import React from 'react'
import { Grid, Typography } from '@mui/material'

import { PrincipalLayout } from '../../components/layouts'

const CustomerPage = () => {
  return (
    <PrincipalLayout title='Detalle de Liquidacion' pageDescription='Detalle de Liquidacion de tus asesores'>
      <Grid container justifyContent='stretch' height='100vh'>
        <Grid item >
          <Typography variant="h1" color="primary"  >
            Detalle de liquidación
          </Typography>
        </Grid>
      </Grid>
    </PrincipalLayout>
  )
}

export default CustomerPage