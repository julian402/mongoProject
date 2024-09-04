import connectDB from "../config/db.js";
import User from "../models/User.js";

async function userSeeder() {
  connectDB();
  await User.create({
    firstName: "Juan",
    lastName: "Mateo",
    email: "juanmateo@gmail.com",
    age: 25,
  });
  await User.create({
    firstName: "Maria",
    email: "mariamateo@gmail.com",
    lastName: "Mateo",
    age: 25,
  });
  await User.create({
    firstName: "Pedro",
    lastName: "Mateo",
    email: "pedro@gmail.com",
    age: 25,
  });
  console.log("Test Users [Seeder] successfully created!");
  process.exit(1);
}

userSeeder();
