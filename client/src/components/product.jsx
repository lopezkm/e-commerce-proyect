import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';


const Product = ({ name, description, price, stock, media, developer, publisher, publishDate }) => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block w-80"
                            src={media[0]}
                            alt="Primera imagen"
                        />
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="d-flex justify-content-around">
                        <img
                            className="d-block w-70"
                            src={media[1]}
                            alt="Segunda imagen"
                        />

                        <img
                            className="d-block w-70"
                            src={media[1]}
                            alt="Segunda imagen"
                        />
                        
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-between">
                        <img
                            className="d-block w-20"
                            src={media[2]}
                            alt="Tercera imagen"
                        />

                        <img
                            className="d-block w-20"
                            src={media[2]}
                            alt="Tercera imagen"
                        />

                    </div>
                </Carousel.Item>
            </Carousel>


            <Card style={{ width: '100%' }}>
                <Card.Body>
                     <Card.Title className="text-center"> TITULO DEL JUEGO: {name} </Card.Title>
                        <Card.Text >
                            
                            <p className="text-center"> ESTA ES UNA DESCRIPCIÓN DEL JUEGO: {description} </p>
                            <p> Stock disponible: {stock} </p>
                            <p> Desarrollado por: {developer}   </p>
                            <div className= "d-flex">
                                <p>Publicado por: {publisher}  |  Fecha de publicación: {publishDate} </p>
                                <Button className="d-flex ml-auto">ADD for $ {price} </Button>
                            </div>
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Product;