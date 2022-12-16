import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Product.module.css";
import { AiFillHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);

      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  console.log(product);

  const Loading = () => (
    <>
      <p className={styles.loading}>Loading...</p>
    </>
  );

  const ShowProduct = () => (
    <>
      <div className={styles.col}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.col}>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>
          <AiFillHeart className={`icons ${styles.icon}`} />
          {product.rating && product.rating.rate}
        </p>
        <p>{product.description}</p>
        <h1>${product.price}</h1>
        <div className={styles.buttons}>
          <button
            className={`btn ${styles.add}`}
            onClick={() => addProduct(product)}
          >
            <MdAddShoppingCart className={`icons ${styles.shoppingIcon}`} /> Add
            To Cart
          </button>
          <Link to="/products">
            <button className={`btn ${styles.add}`}>Back To Porducts</button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className={`container ${styles.product}`}>
      <div className={styles.row}>
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
