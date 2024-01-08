import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="background">
      <div class="blurry-bg"></div>
      <div className="text-container">
        <h1>Apie Autorių</h1>
        <p>Mano vardas Eglė. Esu labai jautri, miela moteris.</p>
        <p>Man visada patiko menas. Man pasisekė gyventi Italijoje – šalyje, kurioje gausu meno kūrinių, bet neįsivaizdavau, kad galiu ką nors sukurti. Visada įsivaizdavau save labai logišką, racionalią. Tikrai «ne prie meno».</p>
        <p>O štai visai netikėtai. 2022 m., dėl nepakeliamo skausmo po mylimo žmogaus netekties, ieškant išeities kaip išeiti iš depresijos / kelias nuvedė i meno terapijos pamoką.</p>
        <p>Kai mano namai tapo pilni paveikslų. Atėjo noras pasidalinti savo darbais su visu pasauliu.</p>
        <p className="citation">
          "Tapyba – tai poezija, kuri matoma, o poezija – tai tapyba, kuri girdima." (Italų dailininkas Leonardo da Vinci)
        </p>
      </div>
    </div>
  );
};

export default About;
