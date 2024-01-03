import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="background">
      <div className="text-container">
        <h1>Apie Autorių</h1>
        <p>Čia tavo tekstas kurį duosi apie save</p>
        <p>Pvz, tavo idėjos</p>
        <p>Ir kažkokie asmeniniai išgyvenimai</p>
        <p>Ar apie kūrybą</p>
        <p className="citation">
          "Čia galima įdėti kokią nors citatą"
        </p>
      </div>
    </div>
  );
};

export default About;
