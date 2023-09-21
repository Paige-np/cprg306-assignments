

export default function Item({name, quantity, category}){
    return (
        <li>
            <div className="bg-amber-200 w-96 m-7 p-2"> 
                <h3 className="text-xl font-bold">{name}</h3>
                <p> Buy {quantity} in {category} </p>        
            </div>
        </li>

    );
    
}