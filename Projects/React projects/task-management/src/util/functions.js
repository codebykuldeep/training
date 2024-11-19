export function generateId(){
    const id = Math.floor(Math.random()*1000);
    return id;
}

export async function updateDataToServer(tasks) {
    const body =JSON.stringify(tasks)
    const response = await fetch('https://todo-react-f6ae9-default-rtdb.firebaseio.com/todo.json',{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body
    });

    if(!response.ok){
      //.....
    }

    const data = await response.json();
    console.log(data);
    
  }