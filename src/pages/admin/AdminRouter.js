import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cocktail from './cocktail/Cocktail';
import CocktailEdit from './cocktail/CocktailEdit';
import {ALayout, Dashboard} from './index'
import {User, Add, Edit} from './user/index'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='user'>
                    <Route index element={<User/>} />
                    <Route path='edit/:uid' element={<Edit/>} />
                    <Route path='add' element={<Add/>} />
                </Route>
                <Route path='cocktail'>
                    <Route path='index' element={<Cocktail/>} />
                    <Route path='edit' element={<CocktailEdit/>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRouter;