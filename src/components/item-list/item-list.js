import React from "react";
import "./item-list.css";

const ItemList = (props) => {

  const {items, children: renderLabel, onSelectIdItem} = props;

  const itemList = items.map(item => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onSelectIdItem(id)}
        >
          {label}
        </li>
      );
    });

  return <ul className="item-list list-group">{itemList}</ul>;
};

export default ItemList;


