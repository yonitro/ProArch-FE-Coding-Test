import React from "react";
import { Link } from "react-navi";
import Logo from "../../styles/images/pssroarch-logo-no-icon.png";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt="Proarch" className="logo" />
      <Link className="profile" href={`/profile`}>Profile</Link>
    </header>
  );
};
