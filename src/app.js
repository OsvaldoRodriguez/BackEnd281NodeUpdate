import express from "express";
import { Route } from "./routes/index";
import cors from "cors";
import bodyParser from "body-parser";
import {bcrypt} from 'bcrypt'
var history = require('connect-history-api-fallback')

const app = express();


app.use(history());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json()); // para capturar datos en formato json -> para usar req.body
app.use(express.urlencoded({ extended: true })); // para recibir por url encoded (peticion post)


// para las imagenes
app.use(express.static('public'));
// habilitando rutas
app.use('/api', Route);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`servidor corriendo**** en puerto ${PORT}`);
});

