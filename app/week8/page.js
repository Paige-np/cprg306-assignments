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
        <main>
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p className="text-black">Welcome, {user.displayName}</p>
                        <img src={user.photoURL} className="w-8 h-8"/>
                        <button
                            className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:underline" 
                            onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <button
                        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:underline" 
                        onClick = {handleSignIn}>Sign in</button>
                ) }

            </section>
        </main>
    )
}