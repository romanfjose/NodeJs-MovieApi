import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes.js";

const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, HOSTNAME, () =>{
    console.log('movies api server online in http://' + HOSTNAME +':' + PORT);
})
