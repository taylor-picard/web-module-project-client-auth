import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddFriends() {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:9000/api/friends`, form,{
            headers: {
                authorization: token
            }
        } )
            .then(res => {
                console.log(res)
                navigate('/friends')
            })
            .catch(err => console.log(err.error))
    }
    
    return (
        <div className="add-friends">
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">FRIEND NAME</label> 
                    <input name="name" id="name" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">FRIEND EMAIL</label> 
                    <input name="email" id="email" onChange={handleChange}></input>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}