import React from 'react';
import AppLayout from '../../../Applayout/Applayout';
import {Row, Col, Image, Container,Button} from 'react-bootstrap';
import { reverse } from 'named-urls';
import RoutesName from '../../../../App/Config/routes';
import { Link } from 'react-router-dom';
import Blackman from '../../../../ImageAssets/blackMan.png';
import Blueonline from '../../../../ImageAssets/blueOnline.png';
import Glasses from '../../../../ImageAssets/glasses.png';
import Woman from '../../../../ImageAssets/women.png';

import './index.css';

export const BlogUi = ()=>{
   return(
      <AppLayout>
         <section className='Blog-page'>
            <Container>
               <Row className='justify-content-left'>
                  <Col lg={12}>
                     <p className='title text-uppercase text-left mb-4'>
                        <span className='text-bold'>John Doe's </span>
                        {/* <br /> */}
                        Blog!
                     </p>
                  </Col>
                  <Row className=''>
                     <Col lg={6} sm={6} xs={6}>
                     <p className=' text-bold mt-6 ml-3'>
                        <Link to={reverse(RoutesName.pages.blog)} className='btn signup btn-outline-default text-center text-bold pl-5 pr-5 py-3 mt-4'>
                           SignUp
                        </Link>
                     </p>
                     </Col>
                     <Col lg={6} sm={6} xs={6}>
                     <p className=' text-bold mt-6'>
                        <Link to={reverse(RoutesName.pages.blog)} className='btn login btn-outline-default text-center text-bold pl-5 pr-5 py-3 mt-4'>
                           LogIn
                        </Link>
                     </p>
                     </Col>
                  </Row>
               </Row>
            </Container>
         </section>
         <section className='about-intro blog py-1'>
            <Container>
               <Row>
                  <Col lg={12} className='mb-0 mt-4'>
                     <p className='title text-uppercase center-text text-bold'>
                     Leatest articles
                     </p>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Blueonline}
                        alt='Blueonline'
                     />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 stayOnPhone'>
                     <div className='shadow'>
                        <Image
                           src={Blackman}
                           alt='Blackman'
                        />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Woman}
                        alt='Woman'
                     />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>
                  
                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                           src={Glasses}
                           alt='Glasses'
                     />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>

               {/* </Row>
            </Container>
            <Container className='align-align-items-center'>
               <Row> */}

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 stayOnPhone'>
                     <div className='shadow'>
                     <Image
                           src={Glasses}
                           alt='Glasses'
                     />

                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.  
							</p>
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Woman}
                        alt='Woman'
                     />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                        <Image
                           src={Blackman}
                           alt='Blackman'
                        />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.  
							</p>
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Blueonline}
                        alt='Blueonline'
                     />
                     <p
								className='text-capitalize text-center pl-3 pr-3 pb-5 mt-4 mb-0'
								style={{ fontSize: '12px' }}
							>
                        <span className='text-bold'>John Doe's content</span>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</p>
                     </div>
                  </Col>

               </Row>
            </Container>
			</section> 
      </AppLayout>
   );
};