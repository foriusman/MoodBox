import { useState } from "react";
import Faq from "./Faq";

const Faqs = () => {
  const faqs = [
    {
      question: "What is MoodBox?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 1,
    },
    {
      question: "How to use MoodBox?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 2,
    },
    {
      question: "How do I cancel an appointment?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 3,
    },
    {
      question: "How do I save the recording?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 4,
    },
    {
      question: "How do I book an appointment?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 5,
    },
    {
      question: "Why should I use this app?",
      answer: "MoodBox The MoodBox project aims to develop a mobile application platform that provides accessible mental health support services to young people who are struggling with mental health disorders such as depression. The platform will offer a safe and supportive space where users can connect with qualified mental health professionals, access resources, and receive the care they need to manage their mental health.",
      id: 6,
    },
  ];

  return (
    <section id="faqs" className="container">
      <h5 className="heading5 blue-text heading center-text padding-b clash-display">FAQ</h5>
      <h2 className="heading center-text heading1 padding-b clash-display">Frequently Asked Questions</h2>
      <p className="profession center-text padding-b">Get the answers to your questions about MoodBox.</p>

      <div className="questions">
        {
          faqs.map((faq) => (
            <Faq question={faq.question} key={faq.id} answer={faq.answer} icon={faq.icon} />
          ))
        }
      </div>
    </section>
  );
};

export default Faqs;
