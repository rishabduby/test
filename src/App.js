/**
 * File Name : App.js
 *  Author : Rishabh Dwivedi
 * Version : 1.0
 * Last update : 1 Oct 2020
 */

import React from 'react';
import './App.css';
import { Navbar, Nav} from 'react-bootstrap';
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
	constructor(){
		super();
        this.state={
            
        }
    }
    /* LifeCycle */

    // componentDidMount() {
        
    // }

	render(){
		return(
			<div>
        <Navbar collapseOnSelect expand="lg" style={{}}>
          <Navbar.Brand href="#home"><img src={require('./img/logo.png')} alt="logo.png" className="logo"/></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="text-color">HOME</Nav.Link>
              <Nav.Link href="#about" className="text-color">ABOUT US</Nav.Link>
              <Nav.Link href="#howitworks" className="text-color">HOW IT WORKS</Nav.Link>
              <Nav.Link href="#advantages" className="text-color">ADVANTAGES</Nav.Link>
              <Nav.Link href="#features" className="text-color">FEATURES</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'></div>
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-6 col-lg-6">
              <div className="h4_div_crowd ml-4 pl-4 mt-4 pt-4">
                <h4 className="ml-4 mt-4">CROWD SHARING</h4>
              </div>
              <div className="ml-4 pl-4 mt-4 pt-4">
                <p className="ml-4" style={{"color": '#fff'}}>
                  The Crowd Sharing project is a decentralized platform based on the Industry's most innovative and widely used blockchain technology.
                </p>
              </div>
              <div>
                <form className="ml-4">
                  <div className="ml-4 pl-4" style={{"color": '#fff'}}>
                    <div>
                      <span>ID : </span>
                      <span>{Math.floor(Math.random() * 1000) + 1}</span>
                    </div>
                    <div>
                      <span>ETH ADDRESS : </span>
                      <span>..............</span>
                    </div>
                    <div>
                      <span>REFRAL ID : </span>
                      <span>R{Math.floor(Math.random() * 100000) + 1}</span>
                    </div>
                    <div>
                      <span>DIRETC SPONSER ID : </span>
                      <span>DS{Math.floor(Math.random() * 100000000) + 1}</span>
                    </div>
                  </div>
                  <div className="ml-4 pl-4 mt-3" style={{"color": '#fff'}}>
                    <span>
                      <label htmlFor="clone_addr">Clone Address</label>
                    </span>
                    <span>
                      <input type="text" value="Naygon Technology" id="clone_addr" name="clone_addr" className="mt-2 form-control clone_addr" readOnly/>
                    </span>
                  </div> 
                </form>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="promo_main ml-4 pl-4">
                <img src={require('./img/promo-bg.png')} alt="promo-bg.png" className="promo_bg img-fluid"/>
              </div>
            </div>
          </div>
        </div>
			</div>
		)
	}
}

export default App;
