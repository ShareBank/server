import express from "express";

import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";
import ConsentController from "./controllers/ConsentController";
import authMiddleware from "./middlewares/authMiddleware";

const routes = express.Router();
const homeController = new HomeController();
const userController = new UserController();
const consentController = new ConsentController();

// index, show, create, update, delete
routes.get("/", homeController.index);

routes.post("/users/signin", userController.signinAction);
routes.post("/users/signup", userController.signupAction);
routes.get("/users/logout", userController.logout);

routes.get("/consent", authMiddleware, consentController.token);
routes.get(
  "/accountAccessConsents",
  authMiddleware,
  consentController.accountAccessConsents
);

export default routes;
