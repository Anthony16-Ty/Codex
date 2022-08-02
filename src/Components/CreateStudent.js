import React, { useState } from 'react'

function CreateStudent(){

  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({
    name: "", email: "", no: "",
  });

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function onAddStudent(newStudent){
    setStudents([...students, newStudent])
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("https://kimeu-api.herokuapp.com/students", {
      method: 'POST',
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
        onAddStudent(data)
        setFormData({...formData, name: "", email: "", no: ""})
		alert("Student successfully created")
      })
    
  }
  
  return (
    <div className='create-student'>
      <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} value={formData.name} name="name" placeholder="name" required/>
      <input onChange={handleChange} value={formData.email} name="email" placeholder="email" required/>
	    <input onChange={handleChange} value={formData.no} name="no" placeholder="no" required />
      <button>Submit</button>
     
    </form>

   
    </div>
    
  )
}

export default CreateStudent;