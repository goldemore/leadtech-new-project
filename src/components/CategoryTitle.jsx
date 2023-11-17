import React from "react";

const CategoryTitle = ({ data, isActive, onClick }) => {
  return (
    <span
      className={`title_item ${isActive ? "active_title_name" : ""}`}
      onClick={onClick}
    >
      {data.name}
    </span>
  );
};

export default CategoryTitle;
