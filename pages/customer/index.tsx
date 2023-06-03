import React, { useState } from 'react'
import { Box, Card, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

import { PrincipalLayout } from '../../components/layouts'

const CustomerPage = () => {

  const [open, setOpen] = useState(false);


  return (
    <PrincipalLayout title='Clientes' pageDescription='Clientes de la plataforma'>
      <Grid container spacing={{ xs: 4, md: 5 }}  display='flex' flexDirection='column' >
        <Grid item xs={12}>
          <Typography variant="h1" color="primary"  >
            Mis Clientes
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box component={ Paper } sx={{ backgroundColor:'#e5e5ff' }} >
            <Grid container spacing={{ xs: 6, sm:1, md:3 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth color='primary'  >
                  <InputLabel id="category">Seleccione una categor&iacute;a</InputLabel>
                  <Select
                    labelId="category"
                    id="category-select"
                    label="Seleccione una categor&iacute;a"
                    variant='standard'
                  >
                    <MenuItem value={1}>Apellido y Nombre</MenuItem>
                    <MenuItem value={2}>Cuenta Comitente</MenuItem>
                    <MenuItem value={3}>T&iacute;tulo</MenuItem>
                  </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <TextField type="search" variant="standard" label="Completar Campo de b&uacute;squeda" />
                  <SearchIcon />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper >
            adsad
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Grid}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>Apellido y Nombre</TableCell>
                  <TableCell align="right">CC</TableCell>
                  <TableCell align="right">Disponible ARS</TableCell>
                  <TableCell align="right">Disponible USD/ARS</TableCell>
                  <TableCell align="right">Disponible USD/USA</TableCell>
                  <TableCell align="right">Total Porfolio</TableCell>
                  <TableCell align="right">Total Valorizado</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell>vaeas</TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell align="right"> datos </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </Grid>
      </Grid>
    </PrincipalLayout>
  )
}

export default CustomerPage