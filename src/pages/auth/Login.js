import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../services';
import Axios from '../../services/caller.services';

const Login = () => {
    let navigate = useNavigate()    
    const [credentials, setCredentials] = useState({
        email: 'root@gmail.com',
        password: 'root'
    })

    const onChange = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        Axios.post('/auth/login', credentials)
        .then(res => {
            accountService.saveToken(res.data.access_token)
            navigate('/admin')
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name="email" value={credentials.email} onChange={onChange} />
            </div>
            <div className='group'>
                <label htmlFor='password'>Identifiant</label>
                <input type="password" name="password" value={credentials.password} onChange= {onChange} />
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;