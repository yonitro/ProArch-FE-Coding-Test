import React from "react";
import Logo from "../../styles/images/pssroarch-logo-no-icon.png";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt="Proarch" className="logo" />
    </header>
  );
};
