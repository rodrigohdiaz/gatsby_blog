import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"
import "../styles/global.scss"
import logo from "../images/logoR.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const ListLink = props => (
  <li style={{className:"nav"}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout ({ children }) {
    return (
            <div>
              <header>
              
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <div className="logo">
                <Link to="/">
                <img src={logo} alt="Logo" className="logo"/>
                </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent"></div>
                <ul className="navbar-nav mr-auto">
                  <ListLink to="/" className="nav-item active nav-link">Home</ListLink>
                  <ListLink to="/about/" className="nav-item active nav-link">About</ListLink>
                  <ListLink to="/gallery/" className="nav-item active nav-link">Gallery</ListLink>
                  <ListLink to="/projects/" className="nav-item active nav-link">Projects</ListLink>
                  <ListLink to="/contact/" className="nav-item active nav-link">Contact</ListLink>
                </ul>
                </Navbar.Collapse>
             
              </header>
            {children}
        </div>
        
    )
}



    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar> */}