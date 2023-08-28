import React, {useState, useEffect} from "react";
import axios from "axios";

export default function FriendsList() {
const [friends,setFriends] = useState([]);

useEffect(()=> {
    const token = localStorage.getItem('token');
    axios.get(`http://localhost:9000/api/friends`, {
        headers: {
            authorization: token
        }
    })
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err=> console.log(err.error))
},[]);

    return (
        <div>
            <h1>FRIENDS LIST</h1>
            <div>
                <ul>
                    {
                        friends.map(friend=> {
                            return <li key={friend.id}>{friend.name}-{friend.age}-{friend.email}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}