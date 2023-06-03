import { FC } from 'react';
import { PropsWithChildren } from 'react'; 

import Head from 'next/head';
import { Navbar } from '../ui';

// import { Navbar, SideMenu } from '../ui';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

const drawerWidth = 240;

export const PrincipalLayout:FC<PropsWithChildren<Props>> = ({ children, title, pageDescription, imageFullUrl }) => {

  let container 
  if (typeof window !== "undefined") {
    container = window !== undefined ? () => window.document.body : undefined;
  }
  
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
            <Navbar drawerWidth={ drawerWidth } container={ container} />
        </nav>

        {/* <SideMenu /> */}

        <main className='main-container'>
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>

    </>
  )
}