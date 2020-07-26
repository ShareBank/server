import { Request, Response } from "express";
import { apiPAS, apiPRS, apiGRS, apiPASAC } from "../api/request";

class ConsentController {
  // Gera o Token de acesso.
  async token(request: Request, response: Response) {
    const uri = "https://as1.tecban-sandbox.o3bank.co.uk/token";
    await apiPAS(uri, (err: any, res: any) => {
      return response.json({ res });
    });
  }
  // Gera o ConsentId usando o token.
  async accountAccessConsents(request: Request, response: Response) {
    const { access_token } = request.body;
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/account-access-consents";
    await apiPRS(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  // Gera o a URL de autenticação usando o ConsentId.
  async authCodeUrl(request: Request, response: Response) {
    const { ConsentId } = request.query;
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/ozone/v1.0/auth-code-url/" +
      ConsentId +
      "?scope=accounts&alg=none";
    await apiGRS(uri, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  // Gera o access_token usando o código da URL
  async authorizationCode(request: Request, response: Response) {
    const { code } = request.body;
    const uri = "https://as1.tecban-sandbox.o3bank.co.uk/token";
    await apiPASAC(uri, code, (err: any, res: any) => {
      return response.json({ res });
    });
  }
}
export default ConsentController;
