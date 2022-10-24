import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../services/account.services';

const Header = () => {
    let navigate = useNavigate()
    const logout = () =>{
        accountService.logout()
        navigate('/')
    }
    return (
        <div className='a-header'>
            Header admin
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Header;