import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import SideNavigator from "./SideNavigator";
import Modal from "react-bootstrap/Modal";

function CreateDepartmentEntry() {

    const [departmentName, setDepartmentName] = useState("");
    const [departmentCode, setDepartmentCode] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");

    const [showTwo, setShowTwo] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleCloseTwo = () => setShowTwo(false);
    const handleCloseError = () => setShowError(false);
    const handleSubmit = events => {
        fetch(`http://localhost:8083/api/departments/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({departmentName:departmentName,departmentCode:departmentCode,
                departmentDescription:departmentDescription })
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
                                <FloatingLabel controlId="floatingInput" label="Department Name" className="mb-3">
                                    <Form.Control type="text" placeholder='Department Name' id="departmentName" value={departmentName} onChange={e => setDepartmentName(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="Department Code" className="mb-3">
                                    <Form.Control type="text" placeholder='Department Code'  value={departmentCode} onChange={e => setDepartmentCode(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>


                        <Row>
                            <Col xs={8}>
                                <FloatingLabel controlId="floatingInput" label="Department Description" className="mb-3">
                                    <Form.Control type="text" placeholder='Department Description'  value={departmentDescription} onChange={e => setDepartmentDescription(e.target.value)} />
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
                        <p> Department Details Saved Successfully</p>
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
                        <p> Department Details Not Saved</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </Container>
    );
}

export default CreateDepartmentEntry;