import { DataSource } from "typeorm";
import { Client } from "../entities/client";
import { Banker } from "../entities/banker";
import { Transaction } from "../entities/transaction";

export const db = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "typeorm",
    entities:[Client,Banker,Transaction],
    synchronize:true,
    logger:'simple-console',
})