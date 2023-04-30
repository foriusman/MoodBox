import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const Nav = () => (
  <header className="container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>

    <nav>
      <ul>
        <li>
          <AnchorLink href="#">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#">Reviews</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#">FAQs</AnchorLink>
        </li>
        <li>
          <button className="btn">Get Started</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
