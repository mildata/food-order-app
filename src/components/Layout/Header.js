import React from "react";
import styles from "./Header.module.css";
import headerImg from "../../assets/header.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
        <img src={headerImg} alt="A table full of delicious food"/>
      </div>
    </>
  );
};

export default Header;
