import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Find Me Out ⓒ {currentYear}</p>
      <p>by Samantha Martins</p>
    </footer>
  );
}

export default Footer;
