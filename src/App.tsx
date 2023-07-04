import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">My Friends</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
