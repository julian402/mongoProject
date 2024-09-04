import User from "../models/User.js";

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "No users found" });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error creating user" });
  }
};

export default {
  createUser: createUser,
  getAll: getAll,
};
