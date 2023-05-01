import pic5 from "../assets/images/pic5.png";
import pic6 from "../assets/images/pic6.png";

const Reviews = () => (
  <section id="reviews">
    <h5 className="heading5 heading4 center-text">testimonials</h5>
    <h2 className="title heading clash-display heading2 center-text">What Our Customers are Saying</h2>
    <div className="column-row">
      <div className="review-card flex-items blue">
        <div className="card-img">
          <img src={pic5} alt="profile picture" />
        </div>

        <div className="intro">
          <h5 className="name heading blue-text">Sodiq Tajudeen</h5>
          <p className="profession heading">Product Designer</p>
        </div>

        <p className="p">As an designer, I'm always under a lot of stress, but MoodBox helps me to manage my anxiety and stay focused on what's important</p>
      </div>

      <div className="review-card flex-items orange">
        <div className="card-img">
          <img src={pic6} alt="profile picture" />
        </div>

        <div className="intro">
          <h5 className="name heading orange-text">Sa'dat Hassan</h5>
          <p className="profession heading">Nurse</p>
        </div>

        <p className="p">I've struggled with depression for years, but MoodBox has given me the tools I need to manage my symptoms and live a more fulfilling life.</p>
      </div>
    </div>
  </section>
);

export default Reviews;
