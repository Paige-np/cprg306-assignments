"use client"; 

import { useState } from "react";
import Item from "./item";



export default function ItemList({items, onItemSelect}){
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
    //onClick={items}
  >
    
    <div>
      <label className="text-xl font-bold m-2 text-[#222422] pt-5 pl-10">Sort by: </label>
      
        <button
        onClick={(e) => setSortBy(e.target.value)}
        value="name"
        className="p-2 m-2 w-28 rounded-md text-white bg-[#BC5D2E] focus:ring-2 focus:ring-[#E3B23C] focus:bg-[#E3B23C]"
        >Name  </button>

        <button
        onClick={(e) => setSortBy(e.target.value)}
        value="category"
        className="p-2 m-2 w-28 rounded-md text-white bg-[#BC5D2E] focus:ring-2 focus:ring-[#E3B23C] focus:bg-[#E3B23C]"
        > Category </button>
      
    </div>

    <section className="gap-5 pl-5">
      {itemArray.map((item) => (
        <Item key={item.id} item={item} 
         //onSelect={() => onItemSelect(item.name)} 
        onSelect = {onItemSelect}
        />
      ))}
    </section>
  </div>
  );    
}