

export default function Item({item}){
    return (
        <li>
            <div 
            inline-block align-baseline
            className="bg-indigo-300 w-96 m-7 p-2"> 
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p> Buy {item.quantity} in {item.category} </p>        
            </div>
        </li>
    );    
}