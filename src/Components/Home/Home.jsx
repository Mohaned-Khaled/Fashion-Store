import React from "react";
import styles from "./Home.module.css";
import Hero from "../../assests/hero.jpg";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img src={Hero} alt="hero img" />
        <div className="container">
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.content}>
                <h5 className={styles.title}>New Season Arrivals</h5>
                <p className={styles.subtitle}>Check out all the trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
