import path from 'path';
import fs from 'fs'

function FeedbackPage(props) {
    const {data} =props;
  return (
    <div>
        <h1>Feedback Data</h1>
      <div>
        {data.map((data)=>(
          <div key={data.id}>

            <p>Email - {data.email}</p>
            <p>Feedback -{data.text}</p>
              <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
    const filePath =path.join(process.cwd(),'data','feedback.json');
    const fileData =fs.readFileSync(filePath);
    const data =JSON.parse(fileData);
    return{
        props:{
            data:data
        }
    }
}

export default FeedbackPage