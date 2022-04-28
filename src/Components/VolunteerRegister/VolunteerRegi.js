import axios from 'axios';
import React from 'react';
import "./VolunteerRegi.css"

const VolunteerRegi = () => {

    const createNewMember=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const desc=e.target.description.value;
        const books=e.target.organicBook.value;
        const date=e.target.date.value;

        axios.post('http://localhost:5000/newVolunteer', {
            name: name,
            email: email,
            desc: desc,
            books: books,
            date: date
       
      })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    }

    
    return (
        <div>
           <h1>Register as volunteer</h1>
           <form onSubmit={createNewMember} action="">
               <input type="text" name="name" placeholder='full name' id="" />
               <input type="email" name="email" placeholder='email' id="" />
               <input type="date" name="date" placeholder='date' id="" />
               <input type="description" name="description" placeholder='description' id="" />
               <input type="text" name="organicBook" placeholder='organic books as library' id="" />
               <button value='submit'>submit</button>
           </form>
        </div>
    );
};

export default VolunteerRegi;