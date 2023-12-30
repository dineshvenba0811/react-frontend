import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import SideNavigator from "./SideNavigator";
import {useParams} from "react-router-dom";
function EditEmployeeEntry() {

    const [firstName,setFirstName] = useState("");

    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [departmentCode, setDepartmentCode] = useState("");

    const [departmentsMap, setDepartmentsMap] = useState(null);

    const [showTwo, setShowTwo] = useState(false);
    const [showError, setShowError] = useState(false);
    const handleCloseTwo = () => setShowTwo(false);
    const handleCloseError = () => setShowError(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8083/api/employees?id=${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(response => response.json())
            .then(response => setEmployeeDetailsResults(response))
            .catch(error => console.log(error))
    },[])

    const setEmployeeDetailsResults = response => {
        setFirstName(response[0].firstName)
        setLastName(response[0].lastName)
        setEmail(response[0].email)
        setDepartmentCode(response[0].departmentCode)
    }
    const handleSubmit = events => {
        fetch(`http://localhost:8083/api/employees/update?id=${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({firstName:firstName,lastName:lastName,
                email:email,associateName:departmentCode})
        })
            .then(success => setShowTwo(true) )
            .catch(error => console.log(error))
    }



    return (
        <Container>
            <hr/>
            <Row>
                <Col xs={3}> <SideNavigator></SideNavigator> </Col>
                <Col xs={9}>
                    <Form>
                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="FirstName" className="mb-3">
                                    <Form.Control type="text" placeholder='FirstName' id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                                    <Form.Control type="text" placeholder='Last Name'  id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control type="text" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="Department code" className="mb-3">
                                    <Form.Select  id="activityCode" value={departmentCode} onChange={e => setDepartmentCode(e.target.value)} >
                                        {
                                            departmentsMap &&  departmentsMap.map
                                            (
                                                ac => {
                                                    return  <option value={ac.departmentCode}>{ac.departmentCode}</option>
                                                }
                                            )
                                        }
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <button type="button" className="a-button a-button--primary -without-icon" onClick={ ()=> handleSubmit() }>
                            <div class="btn-primary">Submit</div>
                        </button>

                    </Form>
                </Col>
            </Row>
            <Modal show={showTwo} onHide={handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p> Booking Details Saved Successfully</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={showError} onHide={handleCloseError}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p> Booking Details Not Saved</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </Container>

    );

}

export default EditEmployeeEntry;