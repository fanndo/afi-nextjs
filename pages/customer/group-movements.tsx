import React from 'react'
import { Grid, Typography } from '@mui/material'

import { PrincipalLayout } from '../../components/layouts'

const CustomerPage = () => {
  return (
    <PrincipalLayout title='Detalle de Movimientos en Grupo' pageDescription='Detalle de Movimientos en Grupo de la plataforma'>
      <Grid container justifyContent='stretch' height='100vh'>
        <Grid item >
          <Typography variant="h1" color="primary"  >
            Movimiento en Grupo
          </Typography>
        </Grid>
      </Grid>
    </PrincipalLayout>
  )
}

export default CustomerPage