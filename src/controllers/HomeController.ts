import { Request, Response } from "express";

class HomeController {
  index(request: Request, response: Response) {
    return response.json({ message: "home" });
  }
}
export default HomeController;
