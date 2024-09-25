//Promise are js objects which states the current state of event like pending , rejected , fulfilled for async operations



console.log('Fetching started');

fetch("https://jsonplaceholder.org/posts").then((response)=>console.log('fetching 1 done'))

fetch("https://jsonplaceholder.org/posts").then((response)=>console.log('fetching  2 done'))


console.log('Fetching done');



/*
here sequence is 

Fetching started
Fetching done
fetch 2 done
fetch 1 done

this is bcz flow of execution donot wait for fetch promise to get resolved 
*/
