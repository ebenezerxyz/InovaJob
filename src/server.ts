import express from "express";
import bodyParser from "body-parser";
import { MainDataSource } from "./database/data-source";
import router from "../api/src/routes/router";
import { authMiddleware } from "../api/libs/Auth/auth_middleware";

const server = express();
const port: number = 3333;
const host: string = "localhost";

MainDataSource.initialize()
    .then(() => {
        console.log(`Connected at database!📦`)
    })
    .then(() => {
        server.use(bodyParser.json());
        server.use(express.json());
        server.use(authMiddleware);
        server.use(router);
        server.listen(port, host, () => {
            console.log(`Server is running in ( http://${host}:${port})`)
        });
    })
    .catch((error) => {
        console.log(error);
    })