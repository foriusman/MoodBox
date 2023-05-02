import bell from "../assets/images/bell.svg";
import star from "../assets/images/star.svg";

const About = () => (
  <section id="about" className="container">
    <article>
      <div className="column-row">
        <h2 className="heading2 onethird clash-display">Each Person, Couple and Family has Unique psychological journey!</h2>
        <p className="p twothird">The psychological journey of each person, couple, or family is shaped by a variety of factors including upbringing, genetics, culture, life experiences, and individual differences. No two people or families have the same experiences, perspectives, or coping mechanisms, and as such, each psychological journey is unique.</p>
      </div>

      <div className="man">
      </div>
    </article>

    <article className="column-row-reverse">
      <div className="flex-items">
        <h5 className="heading4 clash-display letter-spacing">Features</h5>
        <h2 className="heading1 heading clash-display padding-b">How MoodBox Can Help?</h2>
    
        <p className="p">MoodBox is designed to help you improve your mental wellbeing and manage your emotions. Our app offers a variety of tools and resources to help you cope with stress, anxiety, and other mental health challenges. Many people struggle to find the support they need to manage their mental health. Therapy and counseling can be expensive and time-consuming, and many people feel embarrassed or ashamed to seek help. This can lead to a cycle of negative emotions that can be difficult to break out of.</p>
      </div>

      <div className="phone phone1 flex-items">
      </div>
    </article>

    <article className="column-row">
      <div className="flex-items">
        <h5 className="heading4 clash-display letter-spacing">Advantages</h5>
        <h2 className="heading1 heading clash-display padding-b">Personalized Support</h2>
        <div className="head-icon padding-b">
          <div className="icon">
            <img src={bell} alt="Bell icon" />
          </div>

          <h3 className="heading3 heading clash-display">Clever Notifications</h3>
        </div>
        <p className="p">With MoodBox, you'll have access to personalized support that's tailored to your unique needs. Our app uses advanced technology to provide you with customized resources and recommendations based on your individual situation.</p>
      </div>

      <div className="phone phone2 flex-items">
      </div>
    </article>

    <article className="column-row-reverse">
      <div className="flex-items">
        <div className="padding-b">
          <div className="head-icon padding-b">
            <div className="icon">
              <img src={star} alt="Bell icon" />
            </div>

            <h3 className="heading3 heading clash-display">Community support</h3>
          </div>
          <p className="p">In addition to personalized support and self-care tools, MoodBox also offers a supportive community where you can connect with others who are going through similar challenges. Our community is a safe and welcoming space where you can share your experiences, offer support, and receive encouragement from others.</p>
        </div>

        <div>
          <div className="head-icon padding-b">
            <div className="icon">
              <img src={star} alt="Bell icon" />
            </div>

            <h3 className="heading3 heading clash-display">Export guidance</h3>
          </div>
          <p className="p">MoodBox is designed in collaboration with mental health professionals, ensuring that you're receiving expert guidance and support every step of the way. Our app is based on evidence-based practices and is regularly updated to reflect the latest research and best practices in the field.</p>
        </div>
      </div>

      <div className="phone phone3 flex-items">
      </div>
    </article>
  </section>
);

export default About;
