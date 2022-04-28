import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import "./Events.css"

const Events = () => {

    const [events, setEvents]=useState([]);
    const [error, setError]=useState();
    useEffect(()=>{
        axios.get('http://localhost:5000/allEvents')
    .then(response=>{

        setEvents(response.data)
    })
    // .catch(function (error) {
  
    // })

    }, [])

    const [user]=useAuthState(auth)


    const addNewEvent=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const details=e.target.details.value;
        const url=e.target.url.value;
        // console.log(url);

        axios({
            method: 'post',
            url: 'http://localhost:5000/addEvents',
            data: {
                name: name,
                details: details,
                image: url
                 },
            headers : {email:user.email,
                       token: localStorage.getItem("accessToken")
                    }
          })
          .then(function (response) {
            setError(response?.data?.success);
          })
          .catch(function (error) {
            setError("error is ", error?.data?.success);
          });


    //     axios.post('http://localhost:5000/addEvents', {
    //         name: name,
    //         details: details,
    //         image: url
       
    //   })
     

    }
    return (
        <div>
            <div className='volunteer-div'>
                {
                    events.map(event=>{
                        return (

                              <div className='single-data'>
                                  
                                    <img src={event.image} alt="" />
                                    <h4>{event.name}</h4>
                                    <p>{event.details} </p>
                                </div>
                    )})
                }
            </div>

            <h2>add event</h2>
            <form onSubmit={addNewEvent} action="">
                <input type="text" name="name" placeholder='event name' id="" /> <br />
                <input type="text" name="details" placeholder='event details' id="" /><br />
                <input type="url" name="url" placeholder='image link' id="" /><br />
                <p>{error} </p>
                <button value="submit">submit</button>
            </form>
            
        </div>
    );
};

export default Events;