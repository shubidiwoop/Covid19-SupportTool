// import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {registerUser} from '../api';


const FormDataU = () => {
    const [patientName,setPatientName] = useState("");
    const [location,setLocation] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [gender, setGender] = useState("");

    const handleRegister = async () => {
        console.log(patientName + location + age + phone + contactPerson + gender);
        const patientData = {
            patientName : patientName,
            location : location,
            age: age,
            phone : phone,
            contactPerson :contactPerson,
            gender : gender
        }

        const success = await registerUser(patientData);
        window.alert(success);
    };
    return (
        <div>
            <h3>Fill in the Requirement</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  type="text" placeholder="Patient's Name" value={patientName} onChange={(event) => setPatientName(event.target.value)} />
                </Form.Group>


                <Form.Group controlId="formlocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control  type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)} />
                </Form.Group>

                
                <Form.Group controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value) } />
                </Form.Group>

                <Form.Group controlId="Gender" >
                    <Form.Label>Gender</Form.Label>
                    <Form.Check value={gender} onChange={(event) => event.target.checked ? setGender("Male"):""}
                        type="radio"
                        label="Male"
                        name="gender"
                        id="male"
                    />
                    <Form.Check value={gender} onChange={(event) => event.target.checked ? setGender("Female"):""}
                        type="radio"
                        label="Female"
                        name="gender"
                        id="female"
                    />
                </Form.Group>

                <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type="number" placeholder="Phone" value={phone} onChange={(event) => setPhone(event.target.value) }/>
                </Form.Group>

                <Form.Group controlId="ContactPerson">
                    <Form.Label>ContactPerson</Form.Label>
                    <Form.Control required type="text" placeholder="Contact Person" value={contactPerson} onChange={(event) => setContactPerson(event.target.value) } />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );

}
export default FormDataU;

// import React, { Component } from 'react'

// export class FormDataU extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Fill in the Requirement</h3>
//             <Form>
//                 <Form.Group controlId="name">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control required type="text" placeholder="Patient's Name" />
//                 </Form.Group>

//                 <Form.Group controlId="location">
//                     <Form.Label>Location</Form.Label>
//                     <Form.Control required type="text" placeholder="Location" />
//                 </Form.Group>

//                 <Form.Group controlId="Age">
//                     <Form.Label>Age</Form.Label>
//                     <Form.Control type="number" placeholder="Age" />
//                 </Form.Group>

//                 <Form.Group controlId="Gender">
//                     <Form.Label>Gender</Form.Label>
//                     <Form.Check
//                         type="radio"
//                         label="Male"
//                         name="gender"
//                         id="male"
//                     />
//                     <Form.Check
//                         type="radio"
//                         label="Female"
//                         name="gender"
//                         id="female"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="Phone">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control required type="number" placeholder="Phone" />
//                 </Form.Group>

//                 <Form.Group controlId="ContactPerson">
//                     <Form.Label>ContactPerson</Form.Label>
//                     <Form.Control required type="text" placeholder="Contact Person" />
//                 </Form.Group>

//                 {/* <Form.Group>
//                     <Col sm={{ span: 10, offset: 2 }}>
//                         <Button variant="primary"  type="submit">Register</Button>
//                     </Col>
//                 </Form.Group> */}
//             </Form>

//             </div>
//         )
//     }
// }

