import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const StudentTableRow = ({student, onDelete}) => {
const { id, no, name, email } = student;

const deleteStudent = () => {
	fetch(`https://kimeu-api.herokuapp.com/students/${id}`,{
		method: "DELETE",
	})
	.then(res => res.json())
	.then(() => {
		onDelete(id)
		alert("Student successfully deleted!")
	})
}

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{no}</td>
	<td>
		{/* <Link className="edit-link"
		to={"/edit-student/" + id}>
		Edit
		</Link> */}
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
