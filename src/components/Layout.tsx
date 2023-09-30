import React from 'react';
import Header from './Header';
import Navigation from "../sidenavigation/Navbar";

const Layout = ({ children }) => {
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