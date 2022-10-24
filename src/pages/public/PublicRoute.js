import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout, Home, Services, Contact, Error} from './index'

const PublicRoute = () => {
    return (
        <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='*' element={<Error />} />
        </Route>        
      </Routes>
    );
};

export default PublicRoute;