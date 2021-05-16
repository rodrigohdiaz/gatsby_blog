import React from "react"
import { Link } from "gatsby"
import "../styles/media.scss"
import "../styles/global.scss"
import git from "../images/github.png"
import code from "../images/codepen.png"
import twit from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import insta from "../images/instagram.png"
import mail from "../images/mail.png"




export default function Layout ({ children }) {
    return (
            <div className="container-fluid text-center">
                <div className="icons">
                  <a href="https://github.com/rodrigohdiaz" target="_blank"><img src={git} className="icon"></img></a>
                  <a href="https://codepen.io/rodrigohdiaz" target="_blank"><img src={code} className="icon"></img></a>
                  <a href="https://twitter.com/rodrigohdiaz" target="_blank"><img src={twit} className="icon"></img></a>
                  <a href="https://www.linkedin.com/in/rodrigohdiaz/" target="_blank"><img src={linkedin} className="icon"></img></a>
                  <a href="https://www.instagram.com/rodrigohdiaz/" target="_blank"><img src={insta} className="icon"></img></a>
                  <a href="mailto: rodrigohdiaz@gmail.com" target="_blank"><img src={mail} className="icon"></img></a>
                </div>
        </div>
        
    )
}