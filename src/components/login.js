import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [cred,setCred] = useState({
        username:'',
        password: ''
    })
    
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:9000/api/login`, cred)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                navigate('/friends');
            })
            .catch(err => console.log(err.error))
    }

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="username">USERNAME</label>
                    <input onChange={handleChange} name="username" id="username"></input>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" onChange={handleChange} id="password"></input>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}