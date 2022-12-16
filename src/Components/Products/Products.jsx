import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        if (componentMounted) {
          setData(data);
          setFilter(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [componentMounted]);

  const filterProducts = function (type) {
    const filteredItems = data.filter((item) => item.category === type);
    setFilter(filteredItems);
  };

  const Loading = () => (
    <>
      <p className={styles.loading}>Loading...</p>
    </>
  );

  const ShowProducts = () => (
    <>
      <div className={styles.buttons}>
        <button className="btn" onClick={() => setFilter(data)}>
          All
        </button>
        <button
          className="btn"
          onClick={() => filterProducts("men's clothing")}
        >
          Men's clothing
        </button>
        <button
          className="btn"
          onClick={() => filterProducts("women's clothing")}
        >
          Women's clothing
        </button>
        <button className="btn" onClick={() => filterProducts("jewelery")}>
          Jewelery
        </button>
        <button className="btn" onClick={() => filterProducts("electronics")}>
          Electronics
        </button>
      </div>

      <div className={styles.cards}>
        {filter.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.card_header}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.card_body}>
              <h3 className={styles.title}>
                {product.title.substring(0, 15)}...
              </h3>
              <div className={styles.others}>
                <span>
                  <AiFillHeart className={`icons ${styles.icon}`} />
                  {product.rating.rate}
                </span>
                <span>${product.price}</span>
              </div>
            </div>

            <div className={styles.card_footer}>
              <Link to={`/products/${product.id}`} className={styles.buy_now}>
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.products}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <h1 className={styles.title}>Latest products</h1>
            <hr />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
