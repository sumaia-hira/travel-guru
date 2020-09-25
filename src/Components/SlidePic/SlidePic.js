import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './SlidePic.css';




const SlidePic = () => {

    const cardPic=fakeData;
    const [showCard,setShowCard]=useState(cardPic[0]);

    
    return (
        <section>
            <Container className="pt-5 mt-5">

                <Row>
                    <Col lg={5} className='text-center'>
                        <h2 className='placeName'>{showCard.name}</h2>
                        <p className='description'>{showCard.shortDescription}</p>
                        <br/>
                        <Link to={'/booking/' + showCard.name}><button className='booking'>Booking  🠪</button> </Link>


                    </Col>

                    <Col lg={7}  className=''>

                        <Row>
                            {
                                cardPic.map(cp=>
                                     <Col className='pic' sm={4}  key={cp.name}>

                                         <div>
                                             
                                            <Link to={`/booking/${cp.name}`}> <img className="cardImage" src={cp.img} alt=""/>
                                             <h4 className="textPlace"><b>{cp.name}</b></h4>

                                             </Link>

                                         </div>


                                     </Col>)
                            }
                        </Row>


                    </Col>


                </Row>


            </Container>

        </section>
    );
};

export default SlidePic;