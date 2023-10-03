import React from 'react';
import Header from './Header';
import Navigation from "../sidenavigation/Navbar";

interface Props  {
   children:React.ReactNode;
  }

const Layout: React.FC<Props > = ({ children }) => {
    return (
    <React.Fragment>
         <div id="layout">
        <Header />
        <Navigation />
        <main>{children}</main>
        </div> 
    </React.Fragment>
    );
};
export default Layout;