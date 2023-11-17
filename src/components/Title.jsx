import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, getProductList } from "../action/MainAction";
import CategoryTitle from "./CategoryTitle";

const Title = () => {
  const dispatch = useDispatch();
  const [activeTitle, setActiveTitle] = useState(null); // Состояние для отслеживания активного элемента

  useEffect(() => {
    dispatch(getCategoryList());
  }, [dispatch]);

  const categorytList = useSelector((state) => state.Data.categorytList);

  // Функция для обработки клика на заголовке
  const handleTitleClick = (index) => {
    setActiveTitle(index);
  };

  return (
    <div className="title_container">
      <div className="title_name">
        {categorytList.map((data, i) => {
          return (
            <CategoryTitle
              key={i}
              data={data}
              isActive={i === activeTitle} 
              onClick={() => handleTitleClick(i)} 
            />
          );
        })}
      </div>
      <Products />
    </div>
  );
};

export default Title;
