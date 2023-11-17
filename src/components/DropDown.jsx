import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="la:list-ul">
                <path
                  id="Vector"
                  d="M2.59082 3.07324V7.98233H7.49991V3.07324H2.59082ZM4.22718 4.70961H5.86355V6.34597H4.22718V4.70961ZM9.13627 4.70961V6.34597H15.2726H21.409V4.70961H9.13627ZM2.59082 9.6187V14.5278H7.49991V9.6187H2.59082ZM4.22718 11.2551H5.86355V12.8914H4.22718V11.2551ZM9.13627 11.2551V12.8914H21.409V11.2551H9.13627ZM2.59082 16.1642V21.0732H7.49991V16.1642H2.59082ZM4.22718 17.8005H5.86355V19.4369H4.22718V17.8005ZM9.13627 17.8005V19.4369H21.409V17.8005H9.13627Z"
                  fill="#333E48"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.59082 0V4.90909H5.49991V0H0.59082ZM2.22718 1.63636H3.86355V3.27273H2.22718V1.63636ZM7.13627 1.63636V3.27273H13.2726H19.409V1.63636H7.13627ZM0.59082 6.54545V11.4545H5.49991V6.54545H0.59082ZM2.22718 8.18182H3.86355V9.81818H2.22718V8.18182ZM7.13627 8.18182V9.81818H19.409V8.18182H7.13627ZM0.59082 13.0909V18H5.49991V13.0909H0.59082ZM2.22718 14.7273H3.86355V16.3636H2.22718V14.7273ZM7.13627 14.7273V16.3636H19.409V14.7273H7.13627Z"
                fill="white"
              />
            </svg>
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
