const searchbar =document.getElementById('search');


const searchProducts =async()=>{
    console.log('Fetching API...');
    
    let text =searchbar.value;
    if(!text.length) return;
    const data = await getData();

    const result =[];

    data.forEach(item => {
        if(item.title.toLowerCase().includes(text) || item.category.toLowerCase().includes(text) || item.description.toLowerCase().includes(text)){
            result.push(item);
        }
    });

    console.log(result);
    
}

const logic =(searchFn ,delay)=>{
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(searchProducts,delay)
    }
}

const debouncing = logic(searchProducts,500);


// searchbar.addEventListener('keyup',()=>{
//     console.log(searchbar.value);
//     console.log('Getting Data....');
    
//     searchProducts(searchbar.value);
    
// });

searchbar.addEventListener('keyup',debouncing);