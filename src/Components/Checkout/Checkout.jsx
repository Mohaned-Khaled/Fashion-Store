import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const state = useSelector((state) => state.HandleCart);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;

    return (
      <div className={styles.totalContent} key={item.id}>
        <p>{item.title}</p>
        <span>{item.price}</span>
      </div>
    );
  };

  return (
    <>
      <div className={`container ${styles.checkoutItems}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.formGroup}>
              <label htmlFor={styles.name}>Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={styles.address}>Address</label>
              <input type="text" id="address" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={styles.phone}>Phone</label>
              <input type="text" id="phone" />
            </div>
            <div className={styles.formGroup}>
              <Link to="/" className={`${styles.checkout} btn`}>
                Checkout
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.totalCart}>
              <h2>
                Your Cart <span>{state.length}</span>
              </h2>
              <div className={styles.totalInfo}>{state.map(itemList)}</div>
              <div className={styles.total}>
                <p>Total:</p>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
