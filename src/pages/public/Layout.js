import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/public/Navbar';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;