import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import categories from "./categories";
import { IoIosArrowForward } from "react-icons/io";
import SubMenuItems from "./SubMenuItems";

const DropDown = () => {
  let isHomePage = useLocation().pathname === "/";
  const [isOpen, setIsOpen] = useState(isHomePage ? false : true);

  const [selectedCategory, setSelectedCategory] = useState(null);

  function onMouseLeave() {
    setSelectedCategory(null);
  }

  function onClick() {
    setSelectedCategory(null);
    setIsOpen(!isOpen);
  }

  return (
    <div className="catg_menu" onMouseLeave={onMouseLeave}>
      <div className={!isOpen ? "head_of_menu" : "head_of_menu_black"}>
        <div onClick={onClick}>
          {!isOpen ? (
            <img src="/images/la_list-ul.svg" alt="list" />
          ) : (
            <img src="/images/la_list-ul_white.svg" alt="list" />
          )}
          <div className="menu_text">Məhsulların kataloqu</div>
        </div>
      </div>

      {!isOpen && (
        <div className="dropdown_wrapper">
          <ul className="catg_list">
            {categories.map((category) => (
              <li
                className="item_link"
                key={category.id}
                onMouseEnter={() =>
                  setSelectedCategory({
                    menuItems: category.subMenu,
                    image: category.subMenuImage,
                  })
                }
              >
                <div className="prod_catg">
                  <img className="component" src={category.img} alt="comp" />
                  <p className="text_wrapper">{category.title}</p>
                </div>
                <IoIosArrowForward className="icon-outline" />
              </li>
            ))}
          </ul>
          {selectedCategory && (
            <div className="submenu">
              <SubMenuItems data={selectedCategory} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
