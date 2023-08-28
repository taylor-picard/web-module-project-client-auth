import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:9000/api/logout`, {}, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                localStorage.removeItem('token')
                navigate('/')
            })
            .catch(err => console.log(err.error))
    }, []);
    
    return (
        <div>
        </div>
    )
}