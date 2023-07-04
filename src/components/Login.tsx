import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {

        if (username === 'demo' && password === 'password') {

            navigate('/home');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>

        </div>
    )
}

export default Login
