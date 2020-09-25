import React, { useContext } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png';
import './HotelDetails.css';
import HotelData from "./HotelData";
import Hotels from './Hotels';

import { UserContext } from '../../App';

const HotelDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (


        <section className='hotelDetails'>
            <br></br>

            <Container>

                <Row>
                    <Col lg={6}>


                        <Navbar.Brand to="/"><img className="logoLogin" src={logo} alt="" /></Navbar.Brand>
                    </Col>

                    <Col lg={6}>

                        <Navbar variant="dark">


                            <Navbar.Collapse id="basic-navbar-nav">

                                <Link className='hotelNav ml-5' to="home">News</Link>
                                <Link className='hotelNav ml-5' to="destination">Destination</Link>
                                <Link className='hotelNav ml-5' to="blog">Blog</Link>
                                <Link className='hotelNav ml-5' to="contact">Contact</Link>
                                <Link to='/login'><Button className='button'>{loggedInUser.name}</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>


                    </Col>

                </Row>

                <hr></hr>



            </Container>

            <Container>
                <Row> 

                    <Col md={7}>

                        {
                            HotelData.map(hotel=> <Hotels hotel={hotel}></Hotels>)

                        }


                    </Col>
                    <Col md={5}>

                        <div className='container'> 
                        


                        </div>



                    </Col>




                </Row>



            </Container>

        </section>
    );
};

export default HotelDetails;