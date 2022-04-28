import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import "./Login.css"

const Login = () => {
    const [error3, setError3]=useState([]);
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useSignInWithEmailAndPassword(auth);
      
      const [user, loading, error] = useAuthState(auth);
      if(error2){
          setError3(error2?.message)

      }
      if(user){
        // console.log("user ache");
        axios.post('http://localhost:5000/login', {
            email: user.email
   
      })
      .then(function (response) {
        const token=response.data.token;
        localStorage.setItem("accessToken", token);
      })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    }
      

    const handleSubmit=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        signInWithEmailAndPassword(email, password)
        // navigate('/home')
    }

    const goToRegister=e=>{
        e.preventDefault();
        navigate('/register')

    }
    
    return (
        <div>
         <h1>Login here</h1>
         <form onSubmit={handleSubmit} action="">
             <input type="email" name="email" placeholder='Enter your email' id="" /><br />
             <input type="password" name="password" placeholder='Enter your password' id="" />
             <button value='submit'>submit</button>
             <p>{error3} </p>
         </form>

         <p>Don't have an account ? <button onClick={goToRegister} className='register-btn'>Register here</button></p>
        </div>
    );
};

export default Login;