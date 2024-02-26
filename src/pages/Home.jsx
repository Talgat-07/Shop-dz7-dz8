// import React from 'react'
import { useContext, useEffect } from 'react';
// import { api } from '../api/axios.api';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../context/ProductContext.jsx';

const Home = () => {
  const { fetchProducts, items } = useContext(ContextProvider);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="products">
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="product"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <b>${item.price}</b>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
