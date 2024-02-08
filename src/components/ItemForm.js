import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";


function ItemForm({onItemFormSubmit}) {
  
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function addNewItem (event) {
    setItemName(event.target.value)
  }

  function selectedCategory (event) {
    setItemCategory(event.target.value)
  }

  function itemFormSubmit() {
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    };

    onItemFormSubmit(newItem)
  }
  
  
  return (
    <form onSubmit={itemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={addNewItem} type="text" name="name"/>
      </label>

      <label>
        Category:
        <select onChange={selectedCategory} name="category">
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
