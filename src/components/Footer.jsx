import insta from "../assets/images/insta.svg";
import twi from "../assets/images/twi.svg";
import tiktok from "../assets/images/tiktok.svg";
import youtube from "../assets/images/youtube.svg";

const Footer = () => (
  <footer className="container">
    <div className="foot-nav column-row">
      <div className="links column-row">
        <div>
          <ul>
            <li>
              <h2 className="heading3 heading">Company</h2>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2 className="heading3 heading">Product</h2>
            </li>
            <li>
              <a href="#">Health conversion</a>
            </li>
            <li>
              <a href="#">Community conversion</a>
            </li>
            <li>
              <a href="#">Resources and Materials</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2 className="heading3 heading">Legal</h2>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="call">
        <h3 className="heading3 clash-display">Sign up for our newsletter</h3>
        <div className="input row">
          <input type="email" placeholder="Enter email" />
          <button className="blue-btn btn white-text">subscribe</button>
        </div>
      </div>
    </div>


    <div className="column-row bottom">
      <div className="social-icons">
        <ul>
          <li>
            <a href="#">
              <img src={insta} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twi} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tiktok} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <p className="heading">&copy; {(new Date()).getFullYear()}, MoodBox All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
