import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    deleteAt: {
      type: Date,
      default: null,
    },
    recipes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Recipe",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
