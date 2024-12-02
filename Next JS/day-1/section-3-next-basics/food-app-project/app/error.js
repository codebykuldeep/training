'use client'
export default function ErrorPage({error}){
    console.log(error);
    
    return(
        <main className="error">
            <h1>Error Occured</h1>
            <p>Failed to fetch meals...</p>
        </main>
    )
}