const getData=()=>{
    const request = new XMLHttpRequest();
    request.open('GET',`https://dummyjson.com/users`);
    request.send();

    request.addEventListener('load',()=>{
        const {data} = JSON.parse(this.responseText);
        console.log(data);
    });
}

getData();