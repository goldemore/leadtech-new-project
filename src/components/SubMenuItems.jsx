import React from "react";

const SubMenuItems = ({ data }) => {
  const { menuItems, image } = data;
  return (
    <div className="grid-container">
      {menuItems?.map((item, index) => (
        <div key={index}>
          <h1 className="item-title">{item.title}</h1>
          <ul className="products-list">
            {item.products.map((product, productIndex) => (
              <li key={productIndex}>
                <a href={product.url}>{product.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="image-item">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SubMenuItems;
