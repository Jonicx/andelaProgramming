import React, { useState } from 'react';
import {	Container,Row,Col,Form,Button} from 'react-bootstrap';
import AppLayout from '../../../Applayout/Applayout';
import './index.css';
import { firebaseConfig } from "../../../../services/firebase";

export const ContactUsUi =()=>{

   const [validated, setValidated] = useState(false);

   const [customer, setCustomer] = useState({
		name: '',
		message: '',
		email: '',
   });
   
   const handleChange = e => {
		const { name, value } = e.target;
		setCustomer(data => ({ ...data, [name]: value }));
   };
   
   const handleSubmit = e =>{
      e.preventDefault();

		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		setValidated(true);
   };
   return (
   <AppLayout> 
      <section className='contact-side'>
         <Container>
            <Row className='justify-content-center'>
               <Col lg={12}>
                  <p className='title text-uppercase text-left mb-0'>
                     <span className='text-bold'>Dearly,</span>
                     <br />
                     Contact me today !
                  </p>
               </Col>
            </Row>
         </Container>
      </section>
      <section className='send-message'>
         <Container fluid>
            <Row className='justify-content-center'>
               <Col lg={9} sm={8}>
                     <Form
                        className='mt-3'
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                     >
                        <Row>
                           <Col lg={12}>
                              <p
                                 className='title text-uppercase center-text text-bold'
                                 style={{ color: '#000' }}
                              >
                                 Send mail
                              </p>
                           </Col>
                        </Row>
                        <Form.Row className='mt-3'>
                           <Col lg={6} xs={12}>
                              <Form.Control
                                 type='text'
                                 id='name'
                                 name='name'
                                 placeholder='Name'
                                 required={true}
                                 autoComplete={false}
                                 value={customer.name}
                                 onChange={handleChange}
                              />

                              <Form.Control.Feedback type='invalid'>
                                 Your names are required
                              </Form.Control.Feedback>
                           </Col>
                           <Col lg={6} xs={12}>
                              <Form.Control
                                 type='email'
                                 id='email'
                                 name='email'
                                 placeholder='Email'
                                 className='email'
                                 required={true}
                                 autoComplete={false}
                                 value={customer.email}
                                 onChange={handleChange}
                              />

                              <Form.Control.Feedback type='invalid'>
                                 Your email is required
                              </Form.Control.Feedback>
                           </Col>
                        </Form.Row>
                        <Row className='mt-3'>
                        </Row>
                        <Form.Row className='mt-3 mb-4'>
                           <Col className='message'>
                              <Form.Group 
                              controlId="exampleForm.ControlTextarea1">
                                 <Form.Control 
                                 name='message'
                                 as="textarea" 
                                 id='message'
                                 rows={2} 
                                 placeholder='Message'
                                 autoComplete={false}
                                 required={true}
                                 onChange={handleChange}
                                 value={customer.message}/>

                                 <Form.Control.Feedback type='invalid'>
                                    Please fill this message field.
                                 </Form.Control.Feedback>
                              </Form.Group>
                           </Col>
                           
                           <Col lg={3}>
                              <Button
                                 type='submit'
                                 variant='primary'
                                 className='btn-block py-2 mb-5'
                                 style={{ fontSize: '14px' }}
                              >
                                 <i className='fa fa-check-circle'></i> Send mail
                              </Button>
                           </Col>
                        {/* </Row> */}
                        </Form.Row>
                     </Form>
                  </Col>
            </Row>
         </Container>
      </section>
</AppLayout>
   );
};