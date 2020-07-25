import { Request, Response } from "express";

class HomeController {
  index(request: Request, response: Response) {
    console.log(request.user);
    return response.json({ message: "home" });
  }
}
export default HomeController;
