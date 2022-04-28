import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

// import axios from "axios";
import "./Home.css"

const Home = () => {
    const [volunteer, setVolunteer]=useState([]);
    const navigate=useNavigate();
  
    useEffect(()=>{
        axios.get('http://localhost:5000/volunteer')
    .then(response=>{

        setVolunteer(response.data)
    })
    .catch(function (error) {
  
    })
    }, [])
    // console.log(volunteer);

    const details=e=>{
        e.preventDefault();
        navigate('/details')

    }
   
    // console.log(user);

    return (
        <div>
            
            
            <header>
                <h1 className='text-center mt-5 mb-3'>I GROW BY HELPING PEOPLE IN NEED</h1>

                <div className="input-group m-4">
                    <div id="search-autocomplete" className="form-outline">
                        <input type="search" id="form1" className="form-control" />
                        <button type="button" className="btn btn-primary"> search</button>
                    </div>
                  
                </div>   </header>

                <main>
                    <div className='volunteer-div'>
                    {
                        volunteer.map(singleVolunteer=>{
                            return(

                                // to genarate random color 
                                //const randomHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
                                //  style={{background: randomHex}}
                               
                                <div className='single-data'>
                                    <img src={singleVolunteer.image} alt="" />
                                    <button onClick={details}>{singleVolunteer.name}</button>
                                </div>

                               
                            )
                        })
                    }
                    </div>

                </main>

        </div>
    );
};

export default Home;