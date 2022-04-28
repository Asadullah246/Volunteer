import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Admin.css"

const Admin = () => {
    const[members, setMembers]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/volunteerList')
    .then(response=>{

        setMembers(response.data)
        
    })
    .catch(function (error) {

        console.log(error);
    })
    }, [])
    console.log( "member is", members);

    const deleteMember=id=>{
        // e.preventDefault();
        const url=`http://localhost:5000/volunteerList/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data is ' , data);
            const remaining=members.filter(member=>member._id !== id)
            setMembers(remaining)
        })

    }

    return (
        <div>
            <h1 className='text-center'>volunteer list</h1>

            <div className='volunteer-div'>
            {
                members.map(member=>{
                    return (
                        <>
                        <div className='single-data'>
                                    <h4>Name :{member.name}</h4>
                                    <p>Email : {member.email}</p>
                                    <p>Desc : {member.desc}</p>
                                    <p>Book : {member.books}</p>
                                    <p>date is : {member.date}</p>
                                    <p>id is : {member._id}</p>
                                    <button onClick={()=>deleteMember(member._id)}>delete</button>
                                </div>
                        </>
                    )
                })
            }
            </div>
           
        </div>
    );
};

export default Admin;