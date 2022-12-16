import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/action/index";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state.HandleCart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className={`${styles.col} ${styles.firstCol}`} key={cartItem.id}>
        <div className={styles.topCol}>
          <button className="btn" onClick={() => handleDelete(cartItem)}>
            X
          </button>
        </div>
        <div className={styles.middleCol}>
          <div className={styles.left}>
            <img src={cartItem.image} alt={cartItem.title} />
          </div>
          <div className={styles.right}>
            <h3>{cartItem.title}</h3>
            <span>${cartItem.price}</span>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className={styles.col}>
        <h2>Your Cart is Empty!</h2>
        <Link to="/products">
          <button className="btn">Back To Products</button>
        </Link>
      </div>
    );
  };

  const buttonCheckout = () => {
    return (
      <div className={styles.col}>
        <Link to="/checkout" className={`${styles.checkout} btn`}>
          Proceed to Checkout
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className={styles.cart}>
        <div className="container">
          <div className={styles.row}>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttonCheckout()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
