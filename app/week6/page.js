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
    <main className="bg-violet-200 pb-1 pt-1">
        <h1 className="text-3xl font-bold m-2 text-black pt-5 pl-20">Shopping List</h1>
        <ul>
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