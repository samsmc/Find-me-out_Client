import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Find Me Out ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
