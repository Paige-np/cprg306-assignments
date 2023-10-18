"use client"; 

import { useState } from "react";
import Item from "./item";


export default function ItemList({items}){
  const [sortBy, setSortBy] = useState("name");

  let itemArray = items.map((item) => ({ ...item }));
  
  itemArray = itemArray.sort((a, b) => {      
      if (sortBy === "name"){        
        if (a.name < b.name){
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;                
      }

      if (sortBy === "category"){        
        if (a.category < b.category){
          return - 1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      }
      
  }
);

return (
  <div 
    className="min-h-screen"
    //onCilck={items}
  >
    
    <div>
      <label>Sort by: </label>
      <button
      onClick={(e) => setSortBy(e.target.value)}
      value="name"
      className="bg-indigo-500 p-1 m-2 w-28 focus:ring-2 focus:ring-grey-600"
      >Name  </button>

      <button
      onClick={(e) => setSortBy(e.target.value)}
      value="category"
      className="bg-indigo-500 p-1 m-2 w-28 focus:ring-2 focus:ring-grey-600"
      > Category </button>
    </div>

    <section className="gap-5 p-5">
      {itemArray.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  </div>
  );    
}