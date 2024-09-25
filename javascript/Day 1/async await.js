async function getData() {
    console.log('Fetching data');

    const data1 = await fetch("https://jsonplaceholder.org/posts")
    console.log('fetch 1 done');
    
    const data2 = await fetch("https://jsonplaceholder.org/posts")
    console.log('fetch 2 done');


    const data3 = await fetch("https://jsonplaceholder.org/posts")
    console.log('fetch 3 done');

    
    const data4 = await fetch("https://jsonplaceholder.org/posts")
    console.log('fetch 4 done');


    console.log('Fetching completed');
    
}
getData()




/*
here sequence is 

Fetching data
fetch 1 done
fetch 2 done
fetch 3 done
fetch 4 done
Fetching completed

this is bcz flow of execution donot wait for fetch promise to get resolved 
*/