import React from 'react';
import { reverse } from 'named-urls';
import {
	Navbar,
	Container,
	Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RoutesName from '../../../App/Config/routes';
import './index.css';
import Image from "../../../ImageAssets/logo.png"

export const NavBarUi =()=>{

   return(
      <>
      <Navbar 
         className='MyNavbar'
         collapseOnSelect
         sticky='top'
         expand='lg'
         variant='light'
         bg='l'
      >
         <Container className='Container'>
            <Navbar.Brand className="Navbar-brand">
               <Link to="/" className='disabled'>
                  <img src={Image} alt="Logo" />
                  <p className="name">Nubay</p>
               </Link>
            </Navbar.Brand>

            <Navbar.Collapse id='navBarMenu' >
						<Nav className="Link-Container mx-auto">
							<Link to={reverse(RoutesName.home)} className='nav-link'>
                        HOME
							</Link>
							<Link
								to={reverse(RoutesName.home)}className='nav-link disabled'>
                        PRODUCT
							</Link>

							<Link to={reverse(RoutesName.home)} className='nav-link disabled'>
                        RESUME
							</Link>
							<Link to={reverse(RoutesName.home)} className='nav-link disabled'>
                        ABOUT
							</Link>
							<Link to={reverse(RoutesName.pages.blog)} className='nav-link'>
                        BLOG
							</Link>
							<Link to={reverse(RoutesName.pages.contact)} className='nav-link'>
                        CONTACT
							</Link>
						</Nav>
					</Navbar.Collapse>
               <Navbar.Toggle aria-controls='navBarMenu' />
         </Container>
      </Navbar>
      </>
   );
};