import React from 'react';

const CategoryFilter = ({categories, onFilterChange}) => {
  
  const func = (value) => {
    onFilterChange(value.target.textContent)
  }
  
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
      <span onClick={(e) => func(e)}>All Categories</span>
      {categories.map((category) => (
        <span onClick={(e) => func(e)} key={category}>
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryFilter;
