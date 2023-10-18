import ItemList from "./item-list";


export default function Page() {
return (
    <main className="bg-violet-200 pb-1 pt-1">
        <h1 className="text-3xl font-bold m-2 text-black pt-5 pl-20">Shopping List</h1>
        <ul>
        <ItemList/>
        </ul>
    </main>
);

}