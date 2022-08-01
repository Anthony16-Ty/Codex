// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
// import axios from "axios";
import StudentForm from "./StudentForm";

// EditStudent Component
const EditStudent = (props) => {
const [formData, setFormData] = useState({
	name: "",
	email: "",
	no: "",
});

function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
	
// //onSubmit handler
// const onSubmit = (studentObject) => {
// 	axios
// 	.put(
// 		"https://kimeu-api.herokuapp.com/students" +
// 		props.match.params.id,
// 		studentObject
// 	)
// 	.then((res) => {
// 		if (res.status === 200) {
// 		alert("Student successfully updated");
// 		props.history.push("/student-list");
// 		} else Promise.reject();
// 	})
// 	.catch((err) => alert("Something went wrong"));
// };
function handleSubmit(e,){
    e.preventDefault();
    fetch("https://kimeu-api.herokuapp.com/students" +
	props.match.params.id,
	 {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
		name: formData.name,
        email: formData.email,
		no: formData.no
		
	  })})

      .then ((response) => response.json())
      .then((data) => {
        // onAddStudent(data)
        setFormData({...formData, name: "", email: "", no: ""})
		alert("Student successfully updated")
      })
    
  }

// Load data from server and reinitialize student form
// useEffect(() => {
// 	// axios
// 	.get(
// 		"https://kimeu-api.herokuapp.com/students"
// 		+ props.match.params.id
// 	)
// 	.then((res) => {
// 		const { name, email, no } = res.data;
// 		setFormData({ name, email, no });
// 	})
// 	.catch((err) => console.log(err));
// }, []);

// Return student form
return (
	
	<form onSubmit={handleSubmit} className="form">
	<input onChange={handleChange} value={formData.name} name="name" placeholder="name" required/>
	<input onChange={handleChange} value={formData.email} name="email" placeholder="email" required/>
	<input onChange={handleChange} value={formData.no} name="no" placeholder="no" required />
	<button>Submit</button>
   
  </form>
	
);
};

// Export EditStudent Component
export default EditStudent;
