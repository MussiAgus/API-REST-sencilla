import mongoose from "mongoose";

// Esquema del modelo de juego
const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },         // Nombre del juego
    genre: { type: String, required: true },        // Género del juego
    releaseDate: { type: Date },                    // Fecha de lanzamiento
    platforms: [{ type: String }],                  // Plataformas del juego (arreglo de strings)
    rating: { type: Number, min: 0, max: 10 },      // Rating del juego (0 a 10)
    developer: { type: String },                    // Desarrollador del juego
    publisher: { type: String },                    // Editor del juego
    description: { type: String },                  // Descripción del juego
  }
);

// Crear y exportar el modelo
export default mongoose.model("Game", gameSchema);
