import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreateForm from './Pages/CreateForm';
import { auth } from '../Firebase-config';
import { signOut } from "firebase/auth";
import EditPost from './Pages/EditPost';
import Register from './Pages/Register';

const App = () => {

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const logout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
        signOut(auth).then(() => {
          localStorage.removeItem('isAuth');
          setIsAuth(false);
          navigate('/');
        }).catch((error) => {
          console.log(error.message)
      })
    }
}

  return (
    <div>
      <Navbar isAuth={isAuth} logout={logout} />

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
        <Route path="/register" element={<Register setIsAuth={setIsAuth} />}/>
        <Route path='/create-post' element={<CreateForm isAuth={isAuth} />} />
        <Route path='/edit-post/:id' element={<EditPost isAuth={isAuth} />} />
      </Routes>


    </div>
  )
};

export default App;
