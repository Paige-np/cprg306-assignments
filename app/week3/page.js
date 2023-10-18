import ItemList from "./item-list";


export default function Page() {
return (
    <main className="min-h-screen bg-[#E4D6A7] font-sans pb-1 pt-1">
        <h1 className="text-3xl font-bold m-2 text-[#222422] pt-5 pl-5">Shopping List </h1>
        <ul>
        <ItemList/>
        </ul>
    </main>
);

}