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
      <div className="back"></div>
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
