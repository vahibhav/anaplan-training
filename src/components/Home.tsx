import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
    isFriend: boolean;
}
const Home = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3002/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const addFriend = async (userId: string) => {
        try {

            await axios.post('http://localhost:3002/friends', { userId });

            setUsers((prevUsers) =>
                prevUsers.map((user) => (user.id === userId ? { ...user, isFriend: true } : user))
            );
        } catch (error) {
            console.error('Error adding friend:', error);
        }
    };
    return (
        <div>
            <h1>Friends Book</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <img src={user.picture} alt={user.firstName} />
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <Link to={`/profile/${user.id}`}>See Profile</Link>

                    {!user.isFriend && (
                        <button onClick={() => addFriend(user.id)}>Add Friend</button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Home
