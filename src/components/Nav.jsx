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

  const handleAnchorTags = () => {
    setActive(false);
    document.body.classList.remove('hidden');
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
            <AnchorLink href="#about" onClick={handleAnchorTags}>About</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#reviews" onClick={handleAnchorTags}>Reviews</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#" onClick={handleAnchorTags}>FAQs</AnchorLink>
          </li>
          <li>
            <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSdOgAoCOKXw39KgB754K7SHNermzt5cjJzfYk_jQ608vO0-yw/viewform?usp=sf_link" className="btn white-btn clash-display">Get Started</Link>
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
            <a href="#about" onClick={handleAnchorTags}>About</a>
          </li>
          <li>
            <a href="#reviews" onClick={handleAnchorTags}>Reviews</a>
          </li>
          <li>
            <Link href="#" onClick={handleAnchorTags}>FAQs</Link>
          </li>
          <li>
            <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSdOgAoCOKXw39KgB754K7SHNermzt5cjJzfYk_jQ608vO0-yw/viewform?usp=sf_link" className="btn white-btn clash-display">Get Started</Link>
          </li>
        </ul>
      </nav> }
    </header>
  );
};

export default Nav;
