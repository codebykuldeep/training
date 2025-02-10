import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.listen(8000, () => {
  console.log("SERVER STARTED AT PORT 8000");
});
