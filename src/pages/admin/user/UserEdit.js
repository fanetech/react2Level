import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../../services';
const UserEdit = () => {
    let {uid} = useParams()
    const flag = useRef(false)
    const [user, setUser] = useState({})

    useEffect(() =>{
        if(flag.current ===false){
            userService.getUser(uid)
            .then(res => setUser(res.data.data) )
            .catch(err => console.log(err))
        }
        return () => (flag.current = true)
    }, [])

    const onChange = () => {
        
    }
    const onSubmit = () => {

    }

    return (
        <div className='user-edit'>
            <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='login'>Nom</label>
                <input type="text" name="email"  value={user.nom} onChange={onChange} />
            </div>
            <div className='group'>
                <label htmlFor='nom'>Identifiant</label>
                <input type="text" name="nom" value={user.password} onChange= {onChange} />
            </div>
            <div className='group'>
                <label htmlFor='prenom'>prenom</label>
                <input type="text" name="prenom" value={user.prenom} onChange= {onChange} />
            </div>
            <div className='group'>
                <label htmlFor='pseudo'>Pseudo</label>
                <input type="text" name="pseudo" value={user.pseudo} onChange= {onChange} />
            </div>
            <div className='group'>
                <label htmlFor='email'>Email</label>
                <input type="text" name="email" value={user.email} onChange= {onChange} />
            </div>
            <div className='group'>
                <button>Editer</button>
            </div>
        </form>           
        </div>
    );
};

export default UserEdit;