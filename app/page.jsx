"use client"; 
import React, { useEffect, useState } from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "product"]';
      const productsData = await client.fetch(query);
      setProducts(productsData);
    };

    const fetchBannerData = async () => {
      const bannerQuery = '*[_type == "banner"]';
      const bannerData = await client.fetch(bannerQuery);
      setBannerData(bannerData);
    };

    fetchProducts();
    fetchBannerData();
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      {/* Only render HeroBanner when bannerData is loaded */}
      {bannerData.length > 0 && <HeroBanner heroBanner={bannerData[0]} />}
      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {/* Only render products when data is loaded */}
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* Only render FooterBanner when bannerData is loaded */}
      {bannerData.length > 0 && <FooterBanner footerBanner={bannerData[0]} />}
    </div>
  );
};

export default Home;
