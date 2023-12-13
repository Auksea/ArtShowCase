import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const paintings = [
    { src: '/pics/painting1.jpg', description: 'Description' },
    { src: '/pics/painting2.jpg', description: 'Description' },
    { src: '/pics/painting3.jpg', description: 'Description' },
    // Add more painting objects as needed
  ];

  return (
    <div>
      <Carousel interval={3000} pause={false}>
        {paintings.map((painting, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + painting.src}
              alt={`Painting ${index + 1}`}
            />
            <Carousel.Caption>
              <p>{painting.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;



