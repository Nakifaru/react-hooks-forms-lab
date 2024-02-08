import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [list, setList] = useState(items)

  function addToList(newItem) {
    setList([...list, newItem])
  }

  console.log(list);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = list.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItems = itemsToDisplay.filter((itemToDisplay) => {
    if (search === "") return true;

    return itemToDisplay.name.includes(search);
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addToList}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
