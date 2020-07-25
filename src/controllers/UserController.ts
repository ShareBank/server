import { Request, Response } from "express";
import mongoose from "mongoose";
const User = mongoose.model("User");

class UserController {
  async signinAction(request: Request, response: Response) {
    const auth = User.authenticate();
    const { email, password } = request.body;
    auth(email, password, (error, result) => {
      if (!result) {
        return response.json({ res: error });
      }
      // Usado para logar assim que cria o cadastro.
      // Como o cadastro já foi feito, está passando uma função em branco onde fica o erro.
      request.login(result, () => {});
      console.log(request.user);
      response.json({ res: result });
    });
  }

  async signupAction(request: Request, response: Response) {
    const newUser = await User.register(
      new User(request.body),
      request.body.password
    );

    return response.json({ res: request.user });
  }

  logout(request: Request, response: Response) {
    request.logout();
    response.json({ res: request.user });
  }
}

export default UserController;
