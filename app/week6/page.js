"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";


export default function Page() {

    const [items, setItems] = useState(
        itemsData.map((item) => ({ ...item}))
        );

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

return (
    <main className="min-h-screen bg-[#E4D6A7] font-sans pb-1 pt-1">
        <h1 className="text-3xl font-bold m-2 text-[#222422] pt-5 pl-5">Shopping List</h1>
        <ul className ="mt-5">
            <NewItem
                onAddItem={handleAddItem}
            />
        </ul>
        <ul className ="mt-10">
            <ItemList items={items}/>
        </ul>
    </main>

    );
}