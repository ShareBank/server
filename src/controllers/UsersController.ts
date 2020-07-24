import { Request, Response } from "express";
import knex from "../database/connection";

class UsersController {
  async index(request: Request, response: Response) {
    const users = await knex("users").select("*");

    return response.json({ users });
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    await knex("users").insert({
      name,
      email
    });

    return response.json({ success: true });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const user = await knex("users").where("id", id).first();
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.json({ user });
  }
}

export default UsersController;
