import React from 'react'
import { Link } from 'react-router-dom'
import data from "./productData"
import { IoIosArrowForward } from "react-icons/io";

const Products = () => {
  return (
    <div className="products_container">
        <div className='products_box'>
            {data.map((item, index)=>(
            <div className='products_card' key={index}>
                <h6>{item.category}</h6>
                <p className='prod_name'>{item.name}</p>
                <div className='product_img'>
                    <img src={item.img} alt="" />
                </div>
                <div className='prod_itself'>
                    <div className='prod_price'>
                        {item.salePrice ? (
                            <div>
                                <p className='sale_price'>{item.salePrice} <span>₼</span></p>
                                <p className='first_price1'>{item.price} <span>₼</span></p>
                            </div>
                        ) : (
                            <p className='first_price'>{item.price} <span>₼</span></p>
                        )}
                    </div>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.534668" y="0.0297852" width="33.75" height="34" rx="16.875" fill="#EAEAEA"/>
                        <path d="M20.7297 15.8735V14.2563C20.7297 13.5181 21.6438 13.1313 22.1711 13.6587L25.1946 16.7173C25.5461 17.0337 25.5461 17.561 25.1946 17.8774L22.1711 20.936C21.6438 21.4634 20.7297 21.0767 20.7297 20.3384V18.686H10.1477C9.90159 18.686 9.7258 18.5103 9.7258 18.2642V16.2954C9.7258 16.0845 9.90159 15.8735 10.1477 15.8735H20.7297Z" fill="white"/>
                    </svg>
                </div>
            </div>
            ))}
        </div>
        <Link to='/' className="view_all">
            <p className='see_all'>Hamısını gör</p>
            <IoIosArrowForward className="icon_arrow" />
        </Link>
    </div>
  )
}

export default Products