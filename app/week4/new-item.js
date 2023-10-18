"use client";
import { useState } from "react";



export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert("Your new item is: " + newItem.name + ", amount: " + newItem.quantity + " in " + newItem.category)

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return(
        <div className="min-h-screen bg-sky-300 flex items-center justify-center">
        <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-10 rounded-lg shadow-md">            
            
                <span className="text-gray-700">
                <input 
                    type="text"
                    placeholder="Item name"
                    required                
                    onChange={handleNameChange}
                    value={name}          
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                </span><br/>
            

                <div className="flex flex-row">
                <span className="text-gray-700">
                    <input 
                        type="number"
                        onChange={handleQuantityChange}
                        value={quantity}                        
                        min={1}
                        max={99}
                        required
                        className="mt-1 p-1 block w-24 rounded-md text-black bg-gray-100 focus:bg-white"                
                    />
                </span><br/>
            

            <select className="mt-1 ml-5 p-1 block w-64 rounded-md text-black bg-gray-100 focus:bg-white">
                value={category}
                onChange={handleCategoryChange}
                <option value="product">Product</option>   
                <option value="dairy">Dairy</option>   
                <option value="bakery">Bakery</option>   
                <option value="meat">Meat</option>   
                <option value="frozen-foods">Frozen Foods</option>   
                <option value="canned-goods">Canned Goods</option>   
                <option value="dry-goods">Dry Goods</option>   
                <option value="beverages">Beverages</option>   
                <option value="snacks">Snacks</option>   
                <option value="household">Household</option>   
                <option value="other">Other</option>        
                
            
            </select>
            </div><br/>    

            <button 
                type="submit"
                className="mt-1 p-1 block rounded-md text-black bg-indigo-300 focus:bg-grey"
            >Add</button>               
                    


            
        </form>
        </div>
    )
}