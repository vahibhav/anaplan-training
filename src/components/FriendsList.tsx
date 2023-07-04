import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Friend {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
}

const FriendsList: React.FC = () => {
    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await axios.get('http://localhost:3002/friends');
                setFriends(response.data);
            } catch (error) {
                console.error('Error fetching friends list:', error);
            }
        };
        fetchFriends();
    }, []);

    const handleRemoveFriend = async (friendId: string) => {
        try {
            await axios.delete(`http://localhost:3002/friends/${friendId}`);
            setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== friendId));
        } catch (error) {
            console.error('Error removing friend:', error);
        }
    };

    return (
        <div>
            <h1>My Friends</h1>
            {friends.map((friend) => (
                <div key={friend.id}>
                    <img src={friend.picture} alt={friend.firstName} />
                    <h3>{`${friend.firstName} ${friend.lastName}`}</h3>
                    <Link to={`/profile/${friend.id}`}>See Profile</Link>
                    <button onClick={() => handleRemoveFriend(friend.id)}>Remove Friend</button>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;
