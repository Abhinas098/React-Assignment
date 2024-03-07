import React from "react";
import NavLinks from "./links/NavLinks";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        {" "}
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt=""
          className={style.image}
        />
      </div>
      <NavLinks />
    </div>
  );
};

export default Header;
