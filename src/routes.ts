import express from "express";

import UsersController from "./controllers/UsersController";
import HomeController from "./controllers/HomeController";

const routes = express.Router();
const usersController = new UsersController();
const homeController = new HomeController();

// index, show, create, update, delete
routes.get("/", homeController.index);
routes.get("/users", usersController.index);
routes.post("/users", usersController.create);
routes.get("/users/:id", usersController.show);

export default routes;
