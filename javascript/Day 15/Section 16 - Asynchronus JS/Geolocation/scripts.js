// const x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//     console.log(position);
    
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }


// navigator.geolocation.getCurrentPosition(positon=>{
//   console.log(positon);
// },err=>{
//   console.log(err);
// })

console.log('Getting Data');


const getPosition = function(){
  // return new Promise((resolve, reject) => {
  //   navigator.geolocation.getCurrentPosition(positon=>{
  //     resolve(positon);
  //   },err=>{
  //     reject(err);
  //   })
  // })

  //short way
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve,reject)
  })
}

getPosition().then(res => console.log(res))
.catch(err=>console.log(err))