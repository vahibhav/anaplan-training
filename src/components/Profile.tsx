import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;

}

const Profile: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response: any = await axios.get(`http://localhost:3002/profile/${userId}`, {

                });
                setUserProfile(response);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, [userId]);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{`${userProfile.firstName} ${userProfile.lastName}'s Profile`}</h1>
            {/* <img src={userProfile.picture} alt={userProfile.firstName} /> */}
            <p>Email: {userProfile.email}</p>
            {/* Add other user profile details as needed */}
        </div>
    );
};

export default Profile;

