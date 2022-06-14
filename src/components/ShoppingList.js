import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  //console.log(items);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemArray, setItemArray] = useState(items);

  //category filter
  const itemsToDisplay = itemArray
    .filter((item) => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory;
      }
    })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  //console.log(itemsToDisplay);

  //
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setItemArray((itemArray) => (itemArray.filter((item) => {
        if (selectedCategory === "All") {
          return true;
        } else {
          return item.category === selectedCategory;
        }
      })
    ))
  }

  //console.log(itemArray);
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setItemArray((itemArray) => (itemArray = itemsToDisplay));
  };
  //console.log(itemArray);
  
  const onItemFormSubmit = (itemObj) => {
    setItemArray([...itemArray, itemObj]);
  };
  //console.log(itemArray);
  
  const itemCard = itemArray.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));
  //console.log(itemCard)

  console.log("component rendered")

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={}
        setSearch={}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">{itemCard}</ul>
    </div>
  );
}

export default ShoppingList;
