import React from 'react';
import {	Container,Row,Col,Form,Button} from 'react-bootstrap';
import RoutesName from '../../../App/Config/routes';
import { reverse } from 'named-urls';
import { Link } from 'react-router-dom';

import './index.css';

export const Footer =() =>{
   return(
      <>
		<section className='news-letter'>
			<Container fluid className='p-0'>
				<Row className='justify-content-center'>

					<Col lg={6} sm={12} xs={12} className='left-form'>
						<p className='text-uppercase center-text text-bold color'>NewsLetter</p>

						<p className='text-capitalize center-text font-smaller sub-tittle color mt-4'>
							Join our newsletter and be the first to know when we have published our new
							gin or when we got a special offer for you.
						</p>

						<Form className='mt-5'>
							<Form.Row className='mt-3'>
                           <Col>
                              <Form.Control
                                 type='email'
                                 name='email'
											placeholder='johndoe@example.com'
											className='email'
                                 required={false}
                                 autoComplete={false}
                              />
                           </Col>
                           
                           <Col lg={3}>
                              <Button
                                 type='submit'
                                 variant='primary'
                                 className='btn-block py-2 mb-5'
                                 style={{ fontSize: '14px' }}
                              >
                                 <i className='fa fa-check-circle'></i> Join
                              </Button>
                           </Col>
                        </Form.Row>
						</Form>
					</Col>

					<Col lg={6} sm={12} xs={12} className='right-form'>
						<p className='right-form-title text-uppercase center-text text-bold right-color'>The preferable drinking gin</p>

						<p className='text-capitalize center-text font-smaller sub-tittle right-color mt-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</Col>
				</Row>
			</Container>
		</section>

		<footer className='footer py-5'>
			<Container>
				<Row className='justify-content-center'>
					<Col lg={4} md={4} sm={12} xs={12} className='py-3'>
						<p className='border-bottom pb-3 text-uppercase tittle text-bold Footer-text-color'>Let me build the website you need</p>

						<p className='text-capitalize center-text font-smaller sub2-tittle  Footer-text-color mt-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</Col>
					<Col lg={3} md={4} sm={12} xs={12} className='py-3'>
							<p className='border-bottom pb-3 text-uppercase tittle text-bold Footer-text-color'>Resources</p>

							<ul className='mt-4'>
								<li>
									<Link to={reverse(RoutesName.home)} className='nav-links text-bold btn-outline-default disabled'>PRODUCT</Link>
								</li>
								<li>
									<Link to={reverse(RoutesName.home)} className='nav-links text-bold btn-outline-default disabled'>RESUME</Link>
								</li>
								<li>
									<Link to={reverse(RoutesName.home)} className='nav-links text-bold btn-outline-default disabled'>ABOUT</Link>
								</li>
								<li>
									<Link to={reverse(RoutesName.pages.blog)} className='nav-links text-bold btn-outline-default'>BLOG</Link>
								</li>
								<li>
									<Link to={reverse(RoutesName.pages.contact)} className='nav-links text-bold btn-outline-default'>CONTACT</Link>
								</li>
							</ul>
						</Col>
						
						<Col lg={4} md={4} sm={12} xs={12} className='py-3'>
							<p className='border-bottom pb-3 text-uppercase tittle text-bold Footer-text-color'>
								Our Location	
							</p>

							<p className='mt-4'>
								<span className='text-bold'>Address</span>{' '}
								<span className='float-right'>
									KGL 250 Streets, Gasabo, Rwanda
								</span>{' '}
								<br />
								<span className='text-bold'>Email</span>{' '}
								<span className='float-right'>johndoe@example.com</span>
								<br />
								<span className='text-bold'>Toll Free</span>{' '}
								<span className='float-right'>+250 78000000</span> 
								<br/>
								<span className='text-bold'>My social medias</span>{' '}
								<span className='float-right'>@John Doe's Gin</span> 
							</p>
						</Col>
				</Row>
			</Container>
		</footer>
      </>
   );
};