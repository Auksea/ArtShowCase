import facebookIcon from './icons/facebook-icon.jpg';
import twitterIcon from './icons/twitter-icon.png';
import instagramIcon from './icons/instagram-icon.jpg';
import './Footer1.css'; // Import your CSS file for Footer styles

const Footer1 = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>Email: example@gmail.com</p>
        </div>
        <div className="footer-social">
          {/* Social media icons as buttons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
