"use client";  // This marks the component as a Client Component

import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../../lib/client';
import { Product } from '../../../components';
import { useStateContext } from '../../../context/StateContext';

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  useEffect(() => {
    const fetchProductData = async () => {
      const productQuery = `*[_type == "product" && slug.current == '${params.slug}'][0]`;
      const productsQuery = '*[_type == "product"]';

      const fetchedProduct = await client.fetch(productQuery);
      const fetchedProducts = await client.fetch(productsQuery);

      setProduct(fetchedProduct);
      setProducts(fetchedProducts);
    };

    fetchProductData();
  }, [params.slug]);  // Fetch product data when the slug changes

  const handleBuyNow = () => {
    if (product) {
      onAdd(product, qty);
      setShowCart(true);
    }
  };

  if (!product) {
    return <div>Loading...</div>;  // Optional: handle loading state
  }

  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
              alt={name}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
