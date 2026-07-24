import React from 'react';

const ItemList = () => {
  const items = ['React', 'Vue', 'Angular', 'java'];

  return (
     <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
     </ul>
  );
}

export default ItemList;
