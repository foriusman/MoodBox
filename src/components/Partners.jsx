import partner1 from "../assets/images/partner1.svg";
import partner2 from "../assets/images/partner2.svg";
import partner3 from "../assets/images/partner3.svg";
import partner4 from "../assets/images/partner4.svg";

const Partners = () => (
  <section className="partners" data-aos="flip-right">
    <img src={partner1} alt="Partner logo" />
    <img src={partner2} alt="Partner logo" />
    <img src={partner3} alt="Partner logo" />
    <img src={partner4} alt="Partner logo" />
  </section>
);

export default Partners;
