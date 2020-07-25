import { Request, Response } from "express";
import { apiAS, apiRS } from "../api/request";

class ConsentController {
  async token(request: Request, response: Response) {
    const uri = "https://as1.tecban-sandbox.o3bank.co.uk/token";
    await apiAS(uri, (err: any, res: JSON) => {
      return response.json({ res });
    });
  }
  async accountAccessConsents(request: Request, response: Response) {
    const token = "e7f69822-a34d-4a5c-8ece-253bc20029a0";
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/account-access-consents";
    await apiRS(uri, token, (err: any, res: any) => {
      console.log(res["Data"]["ConsentId"]);
      console.log(res["Links"]["Self"]);
      return response.json({ res });
    });
  }
}
export default ConsentController;
