import { signOut } from 'firebase/auth';
import { Container, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import VolunteerRegi from './Components/VolunteerRegister/VolunteerRegi';
import auth from './Firebase.init';
import logo from "../src/logos/Group 1329.png"
import Admin from './Components/Admin/Admin';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const signout=e=>{
      e.preventDefault();
      signOut(auth);
  }
  return (
    <div className="App">

<div className='navbar-section'>
                <Navbar className='navbar' bg="light" variant="light">
                    <Container className='navbar-container'>
                        <Link to="/home"><img className='nav-logo' src={logo} alt="" /></Link>
                        <div className='nav-links'>
                            <Link to="/home">Home</Link>
                            <Link to="/donation">Donation</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link className='register-button' to="/login">{user? `${user.displayName? user.displayName:"No name"}`: "Login" } </Link>
                            <button onClick={signout}>{user? "Signout": ""} </button>
                            <Link className='admin-btn' to="/admin">Admin</Link>
                            <Link className='' to="/addVolunteer">add Vol</Link>
                        </div>
                    </Container>
                </Navbar>
            </div>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/addVolunteer' element={<VolunteerRegi></VolunteerRegi>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
