// src/components/AnimatedText.jsx
import React from "react";
import Typical from "react-typical";

const AnimatedText = () => {
  return (
    <Typical
      steps={['Welcome to our website', 1000, 'Enjoy your stay', 1000, 'Feel free to explore', 1000]}
      loop={1} // Set to 1 for a single loop or set to Infinity for infinite loop
      wrapper="h1" // Change the element to wrap the text, e.g., 'h1', 'span'
    />
  );
};

export default AnimatedText;
