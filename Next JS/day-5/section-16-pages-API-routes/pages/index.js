import Link from "next/link";
import { useRef, useState } from "react";

function HomePage() {
  const emailRef =useRef();
  const feedbackRef= useRef();
  const [dataArr,setDataArr] =useState([]);

  function handleSubmit(event){
    event.preventDefault();
    const email =emailRef.current.value;
    const feedback =feedbackRef.current.value;
    const reqBody ={email:email,text:feedback}
     fetch('/api/feedback',{
      method:'POST',
      body:JSON.stringify(reqBody),
      headers:{
        'Content-Type':'application/json',
      }
    }).then(response=>response.json())
    .then((data)=>console.log(data))
    .catch(err=>console.log(err));
  }

  function handleLoadData(){
    fetch('/api/feedback',{
      method:'GET',
    }).then(response=>response.json())
    .then((data)=>setDataArr(data))
    .catch(err=>console.log(err));
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <input type="text" name="feedback" id="feedback" ref={feedbackRef} />
        </div>
        <button>Submit</button>
      </form>
      <br />
      <br />
      <div>
        <Link href={'/feedback'}>GO TO FEEDBACK</Link>
        <button onClick={handleLoadData}>Load feedback</button>
      </div>
      <br />
      <br />
      <div>
        {dataArr.map((data)=>(
          <div key={data.id}>

            <p>Email - {data.email}</p>
            <p>Feedback -{data.text}</p>
              <br />
          </div>
        ))}
      </div>

    </div>
  );
}

export default HomePage;
