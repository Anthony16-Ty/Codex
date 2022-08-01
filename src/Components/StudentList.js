import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";


const StudentList = () => {
const [students, setStudents] = useState([]);



useEffect(() => {
	axios
	.get("https://kimeu-api.herokuapp.com/students")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const handleDelete = (id) =>{
	const newStudentList = students.filter((student ) => student.id !== id)
	setStudents (newStudentList)
}

const DataTable = () => {
	return students.map((student) => {
	return <StudentTableRow student={student} onDelete = {handleDelete} key={student.id} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th> No</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	
	</div>
);
};

export default StudentList;
