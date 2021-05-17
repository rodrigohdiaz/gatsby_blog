// import * as React from "react"
import React from "react"
import { Link } from "gatsby"
import "../styles/global.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "@popperjs/core/dist/umd/popper.min.js";
import Layout from "../components/layout"
import Media from "../components/media"



export default function Home(props) {
  return (
        <Layout>
            <div className="container-fluid">
              <h1 className="text-center">Rodrigo D&iacute;az</h1>
            </div>
            <Media></Media>
        </Layout>
          
          )
}
