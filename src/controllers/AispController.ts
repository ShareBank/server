import { Request, Response } from "express";
import { openBank, openBankPublic } from "../api/request";

//trocar para o BD
const access_token = "6084bda8-1431-4095-a292-78a9538c226d";
class AispController {
  async accounts(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }
  async accountsId(request: Request, response: Response) {
    const id = request.params.id;
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/" +
      id;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async balances(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/balances";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async balancesId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/balances`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async offers(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/offers";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async offersId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/offers`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async transactions(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/transactions";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async transactionsId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/transactions`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async scheduledPayments(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/scheduled-payments";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async scheduledPaymentsId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/scheduled-payments`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async standingOrders(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/standing-orders";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async standingOrdersId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/standing-orders`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async statements(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/statements";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async statementsId(request: Request, response: Response) {
    const id = request.params.id;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/statements`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async statementsAcount(request: Request, response: Response) {
    const id = request.params.id;
    const sid = request.params.sid;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/statements/${sid}`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }
  async statementsAcountTransactions(request: Request, response: Response) {
    const id = request.params.id;
    const sid = request.params.sid;
    const uri = `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${id}/statements/${sid}/transactions`;
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async atms(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v2.3/atms";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async branches(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v2.3/branches";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }

  async products(request: Request, response: Response) {
    const uri =
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v2.4/personal-current-accounts";
    await openBank(uri, access_token, (err: any, res: any) => {
      return response.json({ res });
    });
  }
}
export default AispController;
