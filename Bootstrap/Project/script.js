let productCount =0 ;


const spinner =document.getElementById('spinner');
const productContainer =document.querySelector('.product-container')
const productList =document.querySelector('.product-list')
const loadBtn = document.getElementById('get-more');

const getData = async() =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    return data;
}

const insertData = async()=>{
    const data = await getData();
    console.log(data);
    
    const arr = data.slice(productCount,productCount+6);
    productCount+=6;
    arr.forEach(item => {
        let html =`<div class="col">
                    <div class="card flex-row">
                      <div class='img-box'><img src="${item.image}" alt="..." /></div>
                      <div class="card-body  d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">${item.title}</h5>
                            <h6 class="card-subtitle">${item.category}</h6>
                        </div>
                       
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="price">$${item.price}</div>
                            <a href="#" class="btn btn-outline-secondary">Buy</a>
                        </div>
                      </div>
                    </div>
                  </div>`;

                    productList.insertAdjacentHTML('beforeend',html);
        
    });
}

const UpdateUI = async()=>{
    productContainer.style.display='none';
    spinner.style.display='block';

    await insertData();
    
    spinner.style.display='none';
    productContainer.style.display='block';
    
}


loadBtn.addEventListener('click',async ()=>{
    loadBtn.innerHTML =`<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>`;
  
    await insertData();
  
    loadBtn.innerHTML='Load More';
})

UpdateUI();