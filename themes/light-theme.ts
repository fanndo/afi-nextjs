import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6439ff'
    },
    secondary: {
      main: '#3A64D8'
    },
    info: {
      main: '#fff'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
          boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.12)',
          height: 60,
          padding:0,
        },
      }
    },
    MuiPaper:{
      defaultProps: {
        elevation: 1,
      },
      styleOverrides:{
        root:{
          padding:'2rem'
        },
      }
    },
    MuiTableCell:{
      styleOverrides:{
        root:{
          borderBottom: '.5px solid #5B5C8C',
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 24,
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '2.5rem',
          fontWeight: 600,
        },
        subtitle2: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    // MuiButton: {
    //   defaultProps: {
    //     variant: 'contained',
    //     size: 'small',
    //     disableElevation: true,
    //     color: 'info'
    //   },
    //   styleOverrides: {
    //     root: {
    //       margin:1,
    //       textTransform: 'none',
    //       boxShadow: 'none',
    //       borderRadius: 8,
    //       height:48,
    //       fontSize:18,
    //       fontWeight:600,
    //       ":hover": {
    //         backgroundColor: 'red',
    //         transition: 'all 0.3s ease-in-out'
    //       }
    //     }
    //   }
    // },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});