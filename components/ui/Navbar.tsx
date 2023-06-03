import React from 'react';
import NextLink from 'next/link';

import { AppBar, Box, Link, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material';
import { MenuOutlined, AlarmAdd } from '@mui/icons-material';
// import { Profile } from './Profile';
// import { useUiStore } from '../../../hooks';
// import { Sidebar } from './SideBar';


interface Props {
    drawerWidth:number;
    container: (() => any) | undefined;
}

const pages = [
  {
    text:'Mis cuenta',
    href:'/'
  },
  {
    text:'Mis clientes',
    href:'/customer'
  },
  {
    text:'Operaciones',
    href:'/customer/operations'
  },
  {
    text:'Movimientos',
    href:'/customer/movements'
  },
  {
    text:'Movimientos Grupo',
    href:'/customer/group-movements'
  },
  {
    text:'Liquidacion',
    href:'/customer/settlement'
  },
];
  
export const Navbar = ({ drawerWidth , container }: Props) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
          //   sx={{
          //     width: { sm: `calc(100% - ${drawerWidth}px)` },
          //     ml: { sm: `${drawerWidth}px` },
          //   }}
          >
            <Toolbar  sx={{ my:1,  display:{xs:'flex'} , justifyContent:{ xs:'space-between' }  }} >
              <Box>
                  <NextLink href='/' passHref>
                      <Link display='flex' alignItems='center'>
                          <Typography variant="h6" noWrap component="div">
                              <img src='https://micuenta.invertironline.com/Images/svg/iol-logo-v7.svg' alt='logo' width="170" height="42" />
                          </Typography>
                      </Link>  
                  </NextLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm:'flex' }}}  justifyContent='flex-end'>
                {pages.map((page) => (
                  <NextLink
                    href={ page.href } passHref legacyBehavior
                    key={page.text}

                  >
                    <Link style={{ display:'flex'}} >
                      <IconButton  color="secondary" aria-label="add an alarm">
                        <AlarmAdd />
                      </IconButton>
                      <Button
                        sx={{ display:{ sm:'none', md:'block' } }}
                        variant="text"
                      >
                        {page.text}
                      </Button>
                    </Link>
                  </NextLink>
                ))}
              </Box>
              <Box sx={{ display: {xs:'flex', sm: 'none' } }}>
                  <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  >
                    <MenuOutlined />
                  </IconButton>

              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {/* <Sidebar /> */}
                  <NextLink href='/auth/login' passHref>
                      <Link>
                          Hombres
                      </Link>
                  </NextLink>
            </Drawer>

          </Box>
        </Box>
    );
};