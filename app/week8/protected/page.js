"use client";

import { useUserAuth } from "../_utils/auth-context"


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return(
        <main className="min-h-screen bg-[#E4D6A7] font-sans text-xl p-10">
            <header>
                <h1 className="font-bold text-2xl">Protected Page</h1>
            </header>
            <section>
                { user ? (
                    <p>You are logged in! This page is protected.</p>
                ) : (
                    <p>You must be logged in to view this page</p>
                ) }
            </section>
        </main>
    )

}