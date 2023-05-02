import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Faq = (props) => {
  const {question, answer} = props;

  let [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon((state) => (!state));
  }

  return (
    <details onClick={handleClick}>
      <summary className="clash-display padding-b">
        <h3 className="heading3">{question}</h3>
        {icon && <BsChevronDown />}
        {!icon && <BsChevronUp />}
      </summary>
      <p className="p">{answer}</p>
    </details>
  );
};

export default Faq;
