import React from "react";
import { useNavigation } from "react-navi";

export default function Error() {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate("/");
  };
  return (
    <div>
      We got an Error.
      <a href="#/" onClick={goToHome}>
        <i className="fas fa-home home-icon"></i>Home
      </a>
    </div>
  );
}
