import React, { cloneElement, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          onChange={(e) => setItemName(e.target.value)}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          onChange={(e) => setItemCategory(e.target.value)}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
