import React from "react";
import styles from "./Header.module.css";
import {
  AiFillPhone,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { BsCartPlusFill } from "react-icons/bs";
import Logo from "../../assests/Logo White.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.HandleCart);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.col}>
            <div className={styles.topDiv}>
              <AiFillPhone className="icons" />
              <span>+02011000000</span>
            </div>

            <div className={styles.topDiv}>
              <MdEmail className="icons" />
              <span>mohanedkhf98@gmail.com</span>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.topDiv}>
              <Link to="/">
                <FaFacebook className={`${styles.icons} icons`} />
              </Link>
              <Link to="/">
                <AiFillTwitterCircle className={`${styles.icons} icons`} />
              </Link>
              <Link to="/">
                <AiFillInstagram className={`${styles.icons} icons`} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.middleRow}>
          <div className={styles.col}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className={styles.col}>
            <div className={styles.nav}>
              <ul>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? `${styles.active}` : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? `${styles.active}` : ""
                    }
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? `${styles.active}` : ""
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? `${styles.active}` : ""
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.buttons}>
              <Link to="/login">
                <FiLogIn className="icons" /> <span>Login</span>
              </Link>
              <Link to="/register">
                <FiUserPlus className="icons" /> <span> Register</span>
              </Link>
              <Link to="/cart">
                <BsCartPlusFill /> <span>Cart({state.length})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
