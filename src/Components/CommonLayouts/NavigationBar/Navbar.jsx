import React, { useState } from 'react';
import './Navstyle.css'; 

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container-fluid">
         
          <div className={`collapse navbar-collapse`} id="ftco-nav">
            <ul className="navbar-nav m-auto">
            
                <div class="dropdown">
                      <li class="dropbtn">Home </li>  
                </div>

                <div class="dropdown">
                    <li class="dropbtn">Work </li>
                </div>

                <div class="dropdown">
                    <li class="dropbtn">About </li>
                    <div class="dropdown-content">
                        <a href="#">About 1</a>
                        <a href="#">About 2</a>
                    </div>
                </div>

                <div class="dropdown">
                      <li class="dropbtn">Contact</li>
                      <div class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <div class="nested-dropdown">
                              <a href="#">My Contact</a>
                              <div class="nested-dropdown-content">
                                  <a href="#">Sublink 1</a>
                                  <a href="#">Sublink 2</a>
                                  <a href="#">Sublink 3</a>
                              </div>
                          </div>
                      </div>
                </div>
                
                <div class="dropdown">
                  <li class="dropbtn">Services</li>
                  <div class="dropdown-content">
                    <div class="mega-menu">
                      <div class="mega-menu-column">
                        <h3>Web Development</h3>
                        <a href="#">PHP Web Development</a>
                        <a href="#">PHP + Laravel Web Development</a>
                        <a href="#">WordPress Web Development</a>
                        <a href="#">Web Development with ReactJS</a>
                      </div>
                      <div class="mega-menu-column">
                        <h3>Mobile Development</h3>
                        <a href="#">Android Application Development</a>
                      </div>
                      <div class="mega-menu-column">
                        <h3>Designing</h3>
                        <a href="#">Web Designing</a>
                      </div>
                    </div>
                  </div>
                </div>

   
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
