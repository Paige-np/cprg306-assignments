"use client";

import { useUserAuth } from "./_utils/auth-context"



export default function Page() 
{
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    //console.log(user);

    return(
        <main className="min-h-screen bg-[#E4D6A7] font-sans text-xl p-10">
            <header>
                <label className="text-2xl font-bold p-10 text-[#222422]">Login Page</label>
            </header>
            <section>
                { user ? (
                    <div className="ml-10">
                        <p className="text-black mt-2">Welcome, {user.displayName}</p>
                        <p>Your user ID is: {user.uid}</p>
                        <img src={user.photoURL} className="w-20 h-20 mt-5 rounded-xl"/>
                        <button
                            //className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:underline" 
                            className="p-2 mt-3 w-28 rounded-md text-white bg-[#BC5D2E] focus:ring-2 focus:ring-[#E3B23C] focus:bg-[#E3B23C] hover:underline"
                            onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div className="ml-10">
                        <button
                            //className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:underline" 
                            className="p-2 mt-3 w-28 rounded-md text-white bg-[#BC5D2E] focus:ring-2 focus:ring-[#E3B23C] focus:bg-[#E3B23C] hover:underline"
                            onClick = {handleSignIn}>Sign in</button>
                    </div>
                ) }

            </section>
        </main>
    )
}