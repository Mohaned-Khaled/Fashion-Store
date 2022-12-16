import styles from "./Footer.module.css";
import Logo from "../../assests/Logo White.png";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur facilis cum recusandae quia possimus totam dolores
                error laborum tenetur id accusantium hic, voluptatum vitae.
                Molestias dolor possimus distinctio accusantium doloremque.
              </p>
            </div>
          </div>

          <div className={styles.col}>
            <h3>Quick Links</h3>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.col}>
            <h3>Follow US</h3>
            <div>
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

        <div className={styles.row}>
          <div className={styles.col}>
            <hr />
            <div className={styles.copyrights}>
              <p className={styles.copy}>
                &copy;2022, All Rights Reserved, Powered By Mohanad Khaled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
