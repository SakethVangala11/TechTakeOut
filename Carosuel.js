import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
export default function Carouse(){
    return(
        <div >
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg"
      alt="First slide"
      height="450px"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F1056%2Fimage20210121071055.jpg"
      alt="Second slide"
      height="450px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://dash.railrestro.com/images/RR_banner_1612440144.jpg"
      alt="Third slide"
      height="450px"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}