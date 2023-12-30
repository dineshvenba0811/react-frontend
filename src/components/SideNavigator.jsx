import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function SideNavigator() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Create Employee Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/viewEmployee">View Employee Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/editEmployee/:id">Edit Employee Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/createDepartment">Create Department Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/viewDepartment">View Department Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/editDepartment/:id">Edit Department Details</Navbar.Brand>
                </Container>
            </Navbar>
            <br/>

        </>
    );
}

export default SideNavigator;