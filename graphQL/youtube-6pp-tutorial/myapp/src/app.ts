import express from "express";
import helmet from "helmet";
import { connectGraphQL } from "./graphql/graphql.js";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
//import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema.js";
import { graphQLResolver } from "./graphql/resolvers/resolvers.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;




const server = new ApolloServer({
  typeDefs:schema,
  resolvers:graphQLResolver
})


// startStandaloneServer(server,{
//   listen:{
//     port,
//   },
// }).then(()=>{
//   console.log(`Server running at ${port}`);
// })
// .catch((error)=>{
//   console.log(error);
  
// })


const app = express();

// const graphqlServer = connectGraphQL();
// await graphqlServer.start();

await server.start()

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/graphql", expressMiddleware(server));
app.use(cors({ origin: " * ", credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
