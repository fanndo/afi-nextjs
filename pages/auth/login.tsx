import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next'
import { signIn, getSession, getProviders } from 'next-auth/react';

import { Avatar, Box, Button,  Divider, Grid, Link, Paper, TextField, Typography } from '@mui/material';
// import { ErrorOutline } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

// import { validations } from '../../utils';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../components/layouts';
import { authOptions } from '../api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';


type FormData = {
    username   : string,
    password: string,
};


const LoginPage = () => {

    const router = useRouter();
    // const { loginUser } = useContext( AuthContext );

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);

    const [providers, setProviders] = useState<any>({});

    useEffect(() => {
      getProviders().then( prov => {
        if(prov)
            setProviders(prov)
      })
    }, [])



    const onLoginUser = async( { username, password }: FormData ) => {

        //setShowError(false);

        // const isValidLogin = await loginUser( email, password );
        // if ( !isValidLogin ) {
        //     setShowError(true);
        //     setTimeout(() => setShowError(false), 3000);
        //     return;
        // }
        // // Todo: navegar a la pantalla que el usuario estaba
        // const destination = router.query.p?.toString() || '/';
        // router.replace(destination);

        signIn('credentials', { password ,user: username })
        // try{
        //     const user = await signIn('credentials', { redirect: false, password: 'password',user: username })
        // } catch(e){
        //     console.log('error onLoginUser',e)
        // }

    }

    return (
        <AuthLayout title={'Ingresar'}>
            <Grid container  height='100vh'>
                <Grid
                    container
                    display={{ xs: "none", sm: "flex" }}
                    xs={false}
                    sm={6}
                    sx={ {background: '#e5e5ff'}}
                >
                    <Grid item display={{ xs:"none", sm: "flex" }} flexDirection='column' >
                        <Box sx={{ ml:5, mr:1 }} >
                            <Typography variant="subtitle1" color="primary"  >
                                Te damos la bienvenida
                            </Typography>
                            <Typography variant="subtitle1" color="primary"  >
                                al Master Account de IOL AFI
                            </Typography>
                        </Box>
                        <Box sx={{ ml:5, mr:1 }} >
                            <Typography>
                                Gestiona el asesoramiento a tus clientes de forma sencilla desde IOL invertironline.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item component={Box}  display={{ xs: "none", sm: "flex" }} alignItems='strech' >
                        <Box display='flex' >
                            <img
                                src={ `${"/Images/loginImage.png"}`}
                                alt='logo'
                                loading="lazy"
                                style={{ width:'100%', height:'auto'}}
                            />
                        </Box>
                    </Grid>
                </Grid>
                {/* login form */}
                <Grid item xs={12} sm={6} display='flex' flexDirection='column' component={ Paper }  elevation={3}  >
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        flex={1}
                        sx={{
                            mx:{ xs:3, md:6 },
                            my:4
                        }}
                    >
                        <Avatar sx={{ p: 1, bgcolor: 'secondary.main' }}>
                        {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography color='primary' variant="h1"> Ingresá </Typography>
                        <Box component="form" noValidate onSubmit={ handleSubmit(onLoginUser)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Usuario"
                                type='text'
                                variant="standard"
                                autoComplete="username"
                                autoFocus
                                { ...register('username', {
                                    required: 'Este campo es requerido'
                                })}
                                error={ !!errors.username }
                                helperText={ errors.username?.message }
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                variant="standard"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                { ...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                                })}
                                error={ !!errors.password }
                                helperText={ errors.password?.message }
                            />
                            <Button
                                type="submit"
                                color="primary"
                                className='circular-btn'
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Ingresar
                            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Olvidaste tu Clave?
                                </Link>
                            </Grid>
                            <Grid item xs={12} display='flex' flexDirection='column' justifyContent='end'>
                            <Divider sx={{ width: '100%', mb: 2 }} />
                            {
                                Object.values( providers ).map(( provider: any ) => {

                                    if ( provider.id === 'credentials' ) return (<div key="credentials"></div>);

                                    return (
                                        <Button
                                            key={ provider.id }
                                            variant="outlined"
                                            fullWidth
                                            color="primary"
                                            sx={{ mb: 1 }}
                                            onClick={ () => signIn( provider.id ) }
                                        >
                                            { provider.name }
                                        </Button>
                                    )

                                })
                            }

                        </Grid>
                        </Grid>

                        </Box>
                    </Box>
                    <Box >
                        {/* <Copyright sx={{ mt: 5 }} /> */}
                        <Typography variant="body2" color="text.secondary" align="center" >
                            {'Copyright © '}
                            <Link color="inherit" href="https://mui.com/">
                                Invertir Online
                            </Link>{' '}
                            {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </AuthLayout>
  )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ req,res, query }) => {

    const session = await getSession({ req });
    const session2 = await getServerSession(req, res, authOptions)

        const { p = '/' } = query;

    if ( session ) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: true
            }
        }
    }

    return {
        props: { }
    }
}



export default LoginPage