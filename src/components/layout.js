import React from "react"
import { Link } from "gatsby"
import "../styles/nav.scss"
import "../styles/global.scss"
import logo from "../images/logoR.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

const ListLink = props => (
  <li style={{className:"nav"}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout ({ children }) {
    return (
      <header>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
              <ListLink to="/">
                  <img src={logo} alt="Logo" className="logo"/>
              </ListLink>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <listLink className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </listLink>
              <listLink className="nav-item">
                <a className="nav-link" href="#">About</a>
              </listLink>
              <listLink className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </listLink>
              <listLink className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </listLink>
              <listLink className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </listLink>
            </ul>
        
          </div>
        </Nav>
        </header>
    )
}


{/* <div>
        //         <ul className="navbar-nav mr-auto">
        //           <ListLink to="/" className="nav-item active nav-link">Home</ListLink>
        //           <ListLink to="/about/" className="nav-item active nav-link">About</ListLink>
        //           <ListLink to="/gallery/" className="nav-item active nav-link">Gallery</ListLink>
        //           <ListLink to="/projects/" className="nav-item active nav-link">Projects</ListLink>
        //           <ListLink to="/contact/" className="nav-item active nav-link">Contact</ListLink>
        //         </ul>
        //         </Navbar.Collapse>
             
        //       </header>
        //     {children}
        // </div> */}