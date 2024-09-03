import express from "express";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

//Routes
app.use(recipeRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("http://localhost:3000/");
});
