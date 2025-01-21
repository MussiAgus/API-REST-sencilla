/*import express from "express"
import dotenv from "dotenv"
import mongoose, {connection} from "mongoose";
import bodyParser from "body-parser";
dotenv.config();

import gameRoutes from './routes/games.routes.js'

//express para los middlewares
const app=express();
app.use(bodyParser.json())

//Conexion con base de datos
mongoose.connect(process.env.MONGO_URL, {dbName:process.env.MONGO_DB_NAME})
const db=mongoose.connection;

app.use('/games', gameRoutes)

const port=process.env.PORT||3000;

app.listen(port, ()=>{
    console.log(`Servidor iniciado en puerto ${port}`);
})*/

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bodyParser from "body-parser";
dotenv.config();

import gameRoutes from './routes/games.routes.js'

// express para los middlewares
const app = express();
app.use(bodyParser.json())

// Conexion con base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;  // No es necesario importar connection

// Manejo de eventos de la base de datos
db.on('error', (error) => {
    console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});

app.use('/games', gameRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto ${port}`);
})
