import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hamb from "../assets/images/hamb.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { BsX } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);
  
  const handleNav = () => {
    setActive((state) => !state);
    document.body.classList.toggle('hidden');
  }

  return (
    <header className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className="desktop-nav">
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
            <button className="btn white-btn clash-display">Get Started</button>
          </li>
        </ul>
      </nav>
      <button className="hamb" onClick={handleNav}>
        <img src={hamb} alt="hamburger icon" />
      </button>

      { active && <nav className="mobile-nav">
        <button className="close" onClick={handleNav}>
          <BsX />
        </button>

        <ul>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Reviews</Link>
          </li>
          <li>
            <Link href="#">FAQs</Link>
          </li>
          <li>
            <button className="btn white-btn clash-display">Get Started</button>
          </li>
        </ul>
      </nav> }
    </header>
  );
};

export default Nav;
