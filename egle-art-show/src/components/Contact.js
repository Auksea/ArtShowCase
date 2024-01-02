import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/pics/pic13.jpg" alt="Background" />
        </Carousel.Item>
        {/* Add more Carousel.Items with images as needed */}
      </Carousel>
      <div className="contact-form">
        <form>
          <div>
            <h4>CONTACT US</h4>
          </div>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <textarea placeholder="MESSAGE"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;