import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function HeaderComponent() {
    return (
        <>
            <Row>
              <hr/>
            </Row>
            <Row>
                <Col xs lg="2"> </Col>
                <Col xs lg="4"> <h3>Spring Boot React Microservice </h3></Col>

            </Row>
        </>
    );
}

export default HeaderComponent;