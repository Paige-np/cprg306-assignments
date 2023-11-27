"use client";


import { addNewItem, getItemList } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    if(user){
        const item = getItemList(user.uid);
        console.log(item);
    }

    let newItem = {
        name: 'Onion',
        category: 'Produce',
        quantity: 4,
    };

    //addNewItem(user.uid, newItem)

    return(
        <main className="min-h-screen bg-[#E4D6A7] font-sans text-xl p-10">
            <header>
                <h1 className="font-bold text-2xl">Protected Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                    <p>You are logged in! This page is protected.</p>
                    <button onClick= {() => addNewItem(user.uid, newItem)}>Add Test Item</button>
                    </div>
                ) : (
                    <p>You must be logged in to view this page</p>
                ) }
            </section>
        </main>
    )

}