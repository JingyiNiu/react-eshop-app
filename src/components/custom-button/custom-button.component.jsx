import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  // if props contains inverted or isGoogleSignIn, then add them to class name
  // and alwasys has custom-button as class name
  <button
    className={`${inverted ? "inverted" : ""} 
      ${isGoogleSignIn ? "google-sign-in" : ""} 
      custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
