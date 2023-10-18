

export default function Item({item}){
    return (
        <li>
            <div className="bg-[#6B654B] text-[#ffffff] w-96 m-7 p-2"> 
                <h3 className="text-xl font-sans font-bold">{item.name}</h3>
                <p> Buy {item.quantity} in {item.category} </p>        
            </div>
        </li>
    );    
}