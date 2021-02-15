import React from 'react';
import Applayout from '../../../Applayout/Applayout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Blue from '../../../../ImageAssets/blue.png';
import Pink from '../../../../ImageAssets/pink.png';

import './index.css';

export const MainUi = ()=>{

   return(
      <Applayout>
         <section className='home-side'>
            <Container fluid>
               <Row>
                  <Col lg={12} sm={12} xs={12}>
                     <p className='text-bold text-uppercase tittle mb-0 center-text'>
                        John Doe's
                        <br/>
                        <span className='text-bold sub-tittle'>! A Perfect gin, Do not expect any hangover !</span>
                        <br/>
                        <span className='text-capitalize text-weight sub-tittle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi ut aliquip ex ea commodo consequat.
                        </span>
                     </p>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='about-intro py-1'>
            <Container>
               <Row>
                  <Col lg={12} className='mb-0 mt-4'>
                     <p className='title text-uppercase center-text text-bold stayOnPhone'>
                        Products I have produced
                     </p>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4'>
                     <div className='shadow'>
                        <Image
                           src={Pink}
                           alt='Pink'
                        />
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Blue}
                        alt='Blue'
                     />
                     </div>
                  </Col>
                  
                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                           src={Pink}
                           alt='Pink'
                     />
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Blue}
                        alt='Blue'
                     />
                     </div>
                  </Col>

               {/* </Row>
            </Container>
            <Container className='align-align-items-center'>
               <Row> */}

               <Col lg={3} md={4} sm={4} xs={6} className='mb-4 stayOnPhone'>
                     <div className='shadow'>
                     <Image
                        src={Blue}
                        alt='Blue'
                     />
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                           src={Pink}
                           alt='Pink'
                     />
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                     <Image
                        src={Blue}
                        alt='Blue'
                     />
                     </div>
                  </Col>

                  <Col lg={3} md={4} sm={4} xs={6} className='mb-4 removeOnMobile'>
                     <div className='shadow'>
                        <Image
                           src={Pink}
                           alt='Pink'
                        />
                     </div>
                  </Col>
               </Row>
            </Container>
			</section> 
      </Applayout>
   );
};