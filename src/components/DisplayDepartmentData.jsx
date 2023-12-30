import React, { useEffect,useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNavigator from "./SideNavigator";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function DisplayEmployeeData (props){

    const [associateDetails, setAssociateDetails] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/getBookingDetailsForAssociate`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(response => response.json())
            .then(response => setAssociateDetails(response))
            .catch(error => console.log(error))
    },[])

return (
    <Container>
        <hr/>
        <Row>
            <Col xs={3}> <SideNavigator></SideNavigator> </Col>
            <Col xs={9}>
                <div className="table-responsive">
                      <Table  striped bordered hover>
                        <thead>
                            <tr>
                                <th id="previousquarter">Department ID</th>
                                <th id="currentquarter">Department Name</th>
                                <th id="previousquarter">Department Code</th>
                                <th id="previousquarter">Department Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            associateDetails && associateDetails.map
                            ( events => {
                                return <tr key={events.id}>
                                    <td><Link to={`/editDepartment/${events.id}`}>{events.id}</Link>  </td>
                                    <td> {events.departmentName} </td>
                                    <td> {events.departmentCode} </td>
                                    <td> {events.departmentDescription} </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </Col>
            </Row>
           </Container>
            )
        }
        export  default DisplayEmployeeData;
