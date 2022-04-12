import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, title, price, category } = product;
    return (
      <div className='four wide column' key={id}>
        <Link to={`product/${id}`}>
          <div className=' ui link cards'>
            <div className='card'>
              <div className='image' style={{ height: "300px" }}>
                <img
                  src={image}
                  alt={title}
                  style={{
                    height: "300px",
                    width: "273px",
                  }}
                />
              </div>
              <div
                className='content'
                style={{ width: "280px", height: "100px" }}
              >
                <div className='header' style={{ fontSize: "1rem" }}>
                  {title}
                </div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
