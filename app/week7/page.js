"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";



export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState("");
    const [items, setItems] = useState(
        itemsData.map((item) => ({ ...item}))
        );

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    // const handleItemSelect = (item) =>{
    //     //console.log('Received item:', item);
    //     // let cleanItemName;
    //     // if (item && item.name){
    //     //     if (item.name.includes(',')) {            
    //     //         const cleanedItemName = item.name.split(',')[0].replace(/[^a-zA-Z ]/g, '');
    //     //         setSelectedItemName(cleanedItemName);}
    //     //     else {
    //     //         setSelectedItemName(item.name);
    //     //     let withOutEmoji = cleanItemName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    //     //     setSelectedItemName(withOutEmoji);
    //     //     console.log(withOutEmoji);
    //     // } }  
    //     const cleanedItemName = item.split(',')[0].trim();
    //     setSelectedItemName(cleanedItemName);     
        
    // };

    const handleItemSelect = (item) => {
        let itemName;
        let cleanName;
        if (item.name.includes(",")) {
          itemName = item.name.split(",");
          cleanName = itemName[0].trim();
        } else {
          itemName = item.name.split(" ");
          cleanName = itemName[0].trim();
        }
        let withOutEmoji = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
        setSelectedItemName(withOutEmoji);
        console.log(withOutEmoji);
      };

return (
    <main className="min-h-screen bg-[#E4D6A7] font-sans pb-1 pt-1 flex">
        <div className="">
            <h1 className="text-3xl font-bold m-2 text-[#222422] pt-5 pl-5">Shopping List</h1>
            <ul className ="mt-5">
                <NewItem
                    onAddItem={handleAddItem}
                />
            </ul>
            <ul className ="mt-10">
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </ul>
        </div>
        <div className="ml-20 mt-20">
            <MealIdeas 
            ingredient={selectedItemName}
            />
        </div>
    </main>

    );
}