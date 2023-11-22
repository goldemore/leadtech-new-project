import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Slider from "react-slider";
import ProductSelectedCategory from "./ProductSelectedCategory";

const MIN = 500;
const MAX = 5500;

const SelectedCategory = () => {
  const [values, setValues] = useState([MIN, MAX]);

  const data = [
    {id: 1, phone: "Apple", amount: 93},
    {id: 2, phone: "Samsung", amount: 1},
    {id: 3, phone: "Blackview", amount: 17},
    {id: 4, phone: "Huawei", amount: 6},
    {id: 5, phone: "Honor", amount: 21},
    {id: 6, phone: "Infinix", amount: 17},
    {id: 7, phone: "Itel", amount: 8},
    {id: 8, phone: "Google", amount: 3},
  ]
    
  
  return (
    <div className="slc_ctg_container">
      <div className="slc_ctg_filter">
        <div className="slc_ctg_box">
          <div className="slc_prod_name">
            <h3>Smartfonlar</h3>
            <span>(365)</span>
          </div>
          <div className="slc_filter">
            <p>Filtr</p>
            <img src="/images/filter-icon.svg" alt="" />
          </div>
          <div className="slc_price_context">
            <div className="slc_price_context_name">
              <h4>Qiymət</h4>
              {/* <FiPlus size={16}/> */}
              <FiMinus size={16} />
            </div>
            <div className="price_input">
              <div className="price_field">
                <input type="number" className="input_min" value={values[0]} />
                <span>₼</span>
              </div>
              <div className="separator">
                <FiMinus size={20} />
              </div>
              <div className="price_field">
                <input type="number" className="input_max" value={values[1]} />
                <span>₼</span>
              </div>
            </div>
            <div>
              <Slider
                className="slider"
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
              />
            </div>
          </div>
          <div className="prod_producer">
            <div className="slc_price_context_name">
              <h4>İstehsalçı</h4>
              {/* <FiPlus size={16}/> */}
              <FiMinus size={16} />
            </div>
            <div className="phoneName_container">
              {data.map((item, index)=>(
                <div className="phoneName_boxes" key={index}>
                  <div className="phoneName_box">
                    <input type="checkbox" id="phone"/>
                    <label htmlFor="phone">{item.phone}</label>
                  </div>
                  <span>({item.amount})</span>
                </div>
              ))}
            </div>
          </div>
          <div className="prod_producer">
            <div className="slc_price_context_name">
              <h4>Lorem Ipsum</h4>
              <FiPlus size={16}/>
              {/* <FiMinus size={16} /> */}
            </div>
          </div>
          <div className="prod_producer">
            <div className="slc_price_context_name">
              <h4>Lorem Ipsum</h4>
              <FiPlus size={16}/>
              {/* <FiMinus size={16} /> */}
            </div>
          </div>
          <div className="prod_producer">
            <div className="slc_price_context_name">
              <h4>Lorem Ipsum</h4>
              <FiPlus size={16}/>
              {/* <FiMinus size={16} /> */}
            </div>
          </div>
          <div className="prod_producer">
            <div className="slc_price_context_name">
              <h4>Lorem Ipsum</h4>
              <FiPlus size={16}/>
              {/* <FiMinus size={16} /> */}
            </div>
          </div>
        </div>
      </div>
      <ProductSelectedCategory/>
    </div>
  );
};

export default SelectedCategory;
