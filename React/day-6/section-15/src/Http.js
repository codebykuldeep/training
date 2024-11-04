export async function updateUserPlaces(places){
    console.log(places);
    
    const response = await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({places}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json();

    if(!response.ok){
        throw new Error('Failed to update user places.')
    }

    return data.message;
}


export async function getUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
        const {places} = await response.json();

        if(!response.ok){
          throw new Error('Failed to fetch Places');
        };

    return places;
}