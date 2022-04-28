import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
// import auth from '../../../Firebase.init';
import "./Register.css"

const Register = () => {
    const [error1, setError]=useState();
    const navigate=useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const [
        createUserWithEmailAndPassword,
        user2,
        loading2,
        error2,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(email && password && password.length>=5){
            createUserWithEmailAndPassword(email, password)
            navigate('/home')
            // console.log(user);
        }
        else{
            setError("pass must be more than 5")
        }
        
    }
    return (
        <div>
            <h1>Register here</h1>
            <form onSubmit={handleRegister} action="">
                <input type="text" name="name" placeholder='Enter your name' id=""  /><br />
                <input type="email" name="email" placeholder='Enter your email' id="" required/><br />
                <input type="password" name="password" placeholder='Enter your password' id="" required/><br />
                <p>{error1} </p>
                <button value='submit'>submit</button>

            </form>
        </div>
    );
};

export default Register;