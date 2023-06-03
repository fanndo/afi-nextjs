import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import { Typography } from '@mui/material';
import { PrincipalLayout } from '../components/layouts';

// import { ShopLayout } from '../components/layouts';

// import { ProductList } from '../components/products';
// import { useProducts } from '../hooks';

// import { FullScreenLoading } from '../components/ui';


const HomePage: NextPage = () => {


//   const { products, isLoading } = useProducts('/products');

const session = useSession()



  return (
    <PrincipalLayout title={'Productores- Home'} pageDescription={'Gestiona el asesoramiento a tus clientes de forma sencilla desde IOL invertironline.' }>

        <Typography variant='h1' sx={{ mb: 1 }}>Prueba 2</Typography>

        <Typography variant='h2' sx={{ mb: 1 }}>Prueba</Typography>
    </PrincipalLayout>
  )
}

export default HomePage