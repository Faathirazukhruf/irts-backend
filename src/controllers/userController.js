import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel.js";

export const UserController = {
  getAll: async (req, res) => {
    const users = await UserModel.getAll();
    res.json(users);
  },

  create: async (req, res) => {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create(
      name,
      email,
      hashedPassword,
      role || "user"
    );

    res.json(newUser);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const updated = await UserModel.update(id, name, email, role);
    res.json(updated);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    await UserModel.delete(id);

    res.json({ message: "User deleted" });
  },
};
