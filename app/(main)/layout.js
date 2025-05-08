import MainNav from '@/components/main-nav';
import SiteFooter from '@/components/site-footer';
import React from 'react';

const navLinks = [
    { 
      title: "Features",
      href: "/features",
    },
    { 
        title: "Pricing",
        href: "/pricing",
    },
    { 
        title: "Blog",
        href: "/blog",
    },
    { 
        title: "Documentation",
        href: "/documentation",
    }, 
    
  ];

const MainLayout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen'>
    <header className='fixed top-0 left-0 right-0 z-40 border-b bg-background/60 backdrop-blur-md'>
    <div className='container flex items-center justify-between h-20 py-6'>
        <MainNav items={navLinks} />
    </div>

    </header>
    
    <main> {children} </main>
    <SiteFooter/>

</div>
    );
};

export default MainLayout;