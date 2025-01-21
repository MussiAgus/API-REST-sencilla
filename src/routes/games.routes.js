import express from "express";
import Game from '../models/games.models.js'
const router = express.Router();

//Middleware
/*const getGame = async(req,res,next)=>{
    let game;
    const {id} = req.params;

    try{
        game = await Game.findById(id);
        	if(!game){
                return res.status(400).json({
                message: 'No se encontro el juego'})
        }
    }catch(error){
        return res.status(400).json({
            message: 'No se encontro el juego'})
    }
    res.game = game;
    next();
}*/

//Obtener todos los juegos
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        if (games.length === 0) {
            return res.status(204).json([]); // Código de no contenido
        }
        res.status(200).json(games); // Asegúrate de devolver los juegos aquí
    } catch (error) {
        res.status(500).json({ message: error.message }); // Problema con base de datos.
    }
});

router.post('/', async (req, res) => {
    const { name, genre, releaseDate, platforms, rating, developer, publisher, description } = req?.body;

    if (!name || !genre || !releaseDate || !platforms || !rating || !developer || !publisher || !description) {
        return res.status(400).json({
            message: "Deben completarse todos los campos."
        });
    }

    const game = new Game({
        name,
        genre,
        releaseDate,
        platforms,
        rating,
        developer,
        publisher,
        description
    });

    try {
        const newGame = await game.save();
        console.log(newGame);
        res.status(201).json(newGame);
    } catch (error) {
        console.error(error); // Imprimir el error completo en la consola
        return res.status(400).json({
            message: "Problema al guardar.",
            error: error.message || error
        });
    }
});

export default router;