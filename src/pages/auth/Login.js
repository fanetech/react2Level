import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../fr.json';
import { accountService } from '../../services/account.services';

const Login = () => {
    let navigate = useNavigate()    
    const [credentials, setCredentials] = useState({
        email: 'root',
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
        const user = data.user.find(user => user.email === credentials.email && user.password === credentials.password)
        if(user){
            accountService.saveToken(user.email)
            navigate('/admin')
        }
        else{
            console.log("user no found")
        }
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