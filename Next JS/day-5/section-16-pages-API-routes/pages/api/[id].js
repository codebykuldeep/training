import path from "path";
import fs from "fs";
function handler(req, res) {
    const id =req.query.id;
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  if(isNaN(id) || id>=data.length) return res.json({error:"NO DATA EXISTS"})
  return res.json(data[id]);
}

export default handler;
