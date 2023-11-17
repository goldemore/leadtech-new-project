import React from "react";

const ProductListShow = ({ data }) => {
    console.log(data);
  return (
    <>
      <div className="products_card">
        <h6>{data.category.name}</h6>
        <p className="prod_name">{data.name}</p>
        <div className="product_img">
          <img src={data.image[0].image} alt="" />
        </div>
        <div className="prod_itself">
          <div className="prod_price">
            {data.final_price ? (
              <div>
                <p className="sale_price">
                  {data.final_price} <span>₼</span>
                </p>
                <p className="first_price1">
                  <del>{data.price} <span>₼</span></del>
                </p>
              </div>
            ) : (
              <p className="first_price">
                {data.price} <span>₼</span>
              </p>
            )}
          </div>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.534668"
              y="0.0297852"
              width="33.75"
              height="34"
              rx="16.875"
              fill="#EAEAEA"
            />
            <path
              d="M20.7297 15.8735V14.2563C20.7297 13.5181 21.6438 13.1313 22.1711 13.6587L25.1946 16.7173C25.5461 17.0337 25.5461 17.561 25.1946 17.8774L22.1711 20.936C21.6438 21.4634 20.7297 21.0767 20.7297 20.3384V18.686H10.1477C9.90159 18.686 9.7258 18.5103 9.7258 18.2642V16.2954C9.7258 16.0845 9.90159 15.8735 10.1477 15.8735H20.7297Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProductListShow;
