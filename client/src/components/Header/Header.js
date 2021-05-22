import React from 'react'
import { 
    Button,
    Form,
    FormControl,
    Nav, 
    Navbar, 
    NavDropdown 
} from 'react-bootstrap'

//* IMPORTING STYLES HERE...
import styles from './style.module.css'

export const Header = (props) =>{
    return(

        <Navbar fixed="top"  bg='light' style={{backgroundColor:'rgba(#000000, 0.5)'}}  expand="lg">
            <Navbar.Brand href="/">Netflix Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-danger">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header