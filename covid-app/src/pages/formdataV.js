import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";
import { useState } from 'react';
import {registerVolunteer} from '../api';

const FormDataV = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    const handleRegister = async () => {
        console.log(fname + lname + email + phone + location);
        const patientData = {
            fname,
            lname,
            email,
            phone,
            location
        }

        const success = await registerVolunteer(patientData);
        window.alert(success);
    };

    return (
        <div>
            <h3>Fill in the Requirement</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="firstname">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control required type="text" placeholder="First Name" value={fname} onChange={(event) => setFname(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="Last Name">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control required type="text" placeholder="Last Name" value={lname} onChange={(event) => setLname(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type="number" placeholder="Phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="Location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="primary" onClick={handleRegister} type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );

};

export default FormDataV;