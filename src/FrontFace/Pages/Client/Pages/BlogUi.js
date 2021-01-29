import React from 'react';
import AppLayout from '../../../Applayout/Applayout';
import {Row, Col, Image, Container,Button} from 'react-bootstrap';
import { reverse } from 'named-urls';
import RoutesName from '../../../../App/Config/routes';
import { Link } from 'react-router-dom';

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
                     <Col lg={6}>
                     <p className=' text-bold mt-6 ml-3'>
                        <Link to={reverse(RoutesName.pages.blog)} className='btn signup btn-outline-default text-center text-bold pl-5 pr-5 py-3 mt-4'>
                           SignUp
                        </Link>
                     </p>
                     </Col>
                     <Col lg={6}>
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
      </AppLayout>
   );
};