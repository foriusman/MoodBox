import play from "../assets/images/play.svg";
import apple from "../assets/images/apple.svg";
import two from "../assets/images/two.png";

const CallToAction = () => (
  <section className="container call-to column-row">
    <div className="text white-text">
      <h4 className="clash-display heading2 heading padding-b">Try MoodBox Today</h4>
      <p className="p padding-b">Ready to take control of your mental health and wellbeing? Download MoodBox today and start your journey towards a happier, healthier life.</p>

      <div className="row call-btns">
        <button className="btn2 row heading">
          <div className="play-icon">
            <img src={play} alt="" />
          </div>

          <div className="column">
            <h5 className="heading5 white-text">Get it on</h5>
            <h4 className="heading3 google-font">Google play</h4>
          </div>
        </button>

        <button className="btn2 row heading">
          <div className="play-icon">
            <img src={apple} alt="" />
          </div>

          <div className="column">
            <h5 className="heading5 white-text">Get it on</h5>
            <h4 className="heading3">Apple store</h4>
          </div>
        </button>
      </div>
    </div>

    <div className="two-phones">
      <img src={two} alt="" />
    </div>
  </section>
);

export default CallToAction;
