import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const paintings = [
    { src: '/pics/pic1.jpg', description: 'Description' },
    { src: '/pics/pic2.jpg', description: 'Description' },
    { src: '/pics/pic3.jpg', description: 'Description' },
    { src: '/pics/pic4.jpg', description: 'Description' },
    { src: '/pics/pic5.jpg', description: 'Description' },
    { src: '/pics/pic6.jpg', description: 'Description' },
    { src: '/pics/pic7.jpg', description: 'Description' },
    { src: '/pics/pic8.jpg', description: 'Description' },
    { src: '/pics/pic9.jpg', description: 'Description' },
    { src: '/pics/pic10.jpg', description: 'Description' },
    { src: '/pics/pic11.jpg', description: 'Description' },
    { src: '/pics/pic12.jpg', description: 'Description' },
    { src: '/pics/pic13.jpg', description: 'Description' },
    { src: '/pics/pic14.jpg', description: 'Description' },
    { src: '/pics/pic15.jpg', description: 'Description' },
    { src: '/pics/pic16.jpg', description: 'Description' },
    { src: '/pics/pic17.jpg', description: 'Description' },
    { src: '/pics/pic18.jpg', description: 'Description' },
    { src: '/pics/pic19.jpg', description: 'Description' },
    { src: '/pics/pic20.jpg', description: 'Description' },
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



