import React from 'react';

export default function Item({item, onSelect}){
    //const handleClick = () => {onSelect}

    return (
        // <li onClick={() => onSelect(item.name)}>
            <div className="bg-[#6B654B] text-[#ffffff] w-96 m-7 p-2 focus:ring-2 focus:ring-[#E3B23C] focus:bg-[#E3B23C]"
                onClick={() => onSelect(item)}
                //onClick={onSelect}
                > 
                <h3 className="text-xl font-sans font-bold">{item.name}</h3>
                <p> Buy {item.quantity} in {item.category} </p>        
            </div>
        // {/* </li> */}
    );    
}