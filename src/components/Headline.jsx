import { Link } from "react-router-dom";
import effect from "../assets/images/effect.svg";
import play from "../assets/images/play.svg";
import apple from "../assets/images/apple.svg";

const Headline = () => (
  <section className="container headline">
    <div className="flex-items headline-text">
      <h2 className="clash-display heading1 heading">
      Take Control of Your Mental Health with
      </h2>
      <div className="effect row start padding-b">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdOgAoCOKXw39KgB754K7SHNermzt5cjJzfYk_jQ608vO0-yw/viewform?usp=sf_link" target="_blank" className="clash-display blue-text heading1">MoodBox</Link>
        <div className="effect-img">
          <img src={effect} alt="" />
        </div>
      </div>

      <p className="p">MoodBox is a powerful mental health platform that provides young people with access to medical support anytime, anywhere. </p>
      <h5 className="h5">Take a quick survey on Mental Health</h5>

      <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSdOgAoCOKXw39KgB754K7SHNermzt5cjJzfYk_jQ608vO0-yw/viewform?usp=sf_link" className="blue-btn white-text clash-display">Get Started</Link>
    </div>

    <div className="flex-items back-cont">
      <div className="back">
        <svg width="614" height="631" viewBox="0 0 614 631" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C11.1929 0 0 11.1929 0 25V606C0 619.807 11.1929 631 25 631H589C602.807 631 614 619.807 614 606V390C614 376.193 602.807 365 589 365H391C377.193 365 366 353.807 366 340V25C366 11.1929 354.807 0 341 0H25Z" fill="url(#pattern0)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25 0C11.1929 0 0 11.1929 0 25V606C0 619.807 11.1929 631 25 631H589C602.807 631 614 619.807 614 606V390C614 376.193 602.807 365 589 365H391C377.193 365 366 353.807 366 340V25C366 11.1929 354.807 0 341 0H25Z" fill="black" fill-opacity="0.2"/>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image" transform="matrix(0.00150467 0 0 0.00146413 -0.270389 0)"/>
            </pattern>

            <image id="image" href="../assets/images/back3.png" width="1024" height="683" />
          </defs>
        </svg>
      </div>
      <div className="woman"></div>
    </div>

    <div className="float column-row">
      <div className="row call-btns">
        <button className="btn2 row heading">
          <div className="play-icon">
            <img src={play} alt="" />
          </div>

          <div className="column">
            <h5 className="heading5 white-text">Get it on</h5>
            <h4 className="heading3 white-text">Google play</h4>
          </div>
        </button>

        <button className="btn2 row heading">
          <div className="play-icon">
            <img src={apple} alt="" />
          </div>

          <div className="column">
            <h5 className="heading5 white-text">Get it on</h5>
            <h4 className="heading3 white-text">Apple store</h4>
          </div>
        </button>
      </div>

      <div>
        our happy customers
      </div>
    </div>
  </section>
);

export default Headline;
