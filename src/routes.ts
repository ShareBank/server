import express from "express";

import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";
import ConsentController from "./controllers/ConsentController";
import AispController from "./controllers/AispController";
import authMiddleware from "./middlewares/authMiddleware";

const routes = express.Router();
const homeController = new HomeController();
const userController = new UserController();
const aispController = new AispController();
const consentController = new ConsentController();

// index, show, create, update, delete
routes.get("/", homeController.index);

routes.post("/users/signin", userController.signinAction);
routes.post("/users/signup", userController.signupAction);
routes.get("/users/logout", userController.logout);

// Consentimento
routes.get("/consent", authMiddleware, consentController.token);

routes.post(
  "/accountAccessConsents",
  authMiddleware,
  consentController.accountAccessConsents
);

routes.get("/authCodeUrl", authMiddleware, consentController.authCodeUrl);

routes.get(
  "/authorizationCode",
  authMiddleware,
  consentController.authorizationCode
);

// Openbank
//Contas
routes.get("/openbank/accounts", authMiddleware, aispController.accounts);
routes.get("/openbank/accounts/:id", authMiddleware, aispController.accountsId);
//Saldos
routes.get("/openbank/balances", authMiddleware, aispController.balances);
routes.get("/openbank/balances/:id", authMiddleware, aispController.balancesId);
//Ofertas
routes.get("/openbank/offers", authMiddleware, aispController.offers);
routes.get("/openbank/offers/:id", authMiddleware, aispController.offersId);
//Transações
routes.get(
  "/openbank/transactions",
  authMiddleware,
  aispController.transactions
);
routes.get(
  "/openbank/transactions/:id",
  authMiddleware,
  aispController.transactionsId
);
// Agendamentos de Pagamentos
routes.get(
  "/openbank/scheduled-payments",
  authMiddleware,
  aispController.scheduledPayments
);
routes.get(
  "/openbank/scheduled-payments/:id",
  authMiddleware,
  aispController.scheduledPaymentsId
);
// Transferencias Programadas
routes.get(
  "/openbank/standing-orders",
  authMiddleware,
  aispController.standingOrders
);
routes.get(
  "/openbank/standing-orders/:id",
  authMiddleware,
  aispController.standingOrdersId
);
// Extratos
// Todos Extratos
routes.get("/openbank/statements", authMiddleware, aispController.statements);
// Extratos de uma conta
routes.get(
  "/openbank/statements/:id",
  authMiddleware,
  aispController.statementsId
);
// Extrato de uma conta
routes.get(
  "/openbank/statements/:id/:sid",
  authMiddleware,
  aispController.statementsAcount
);
// Transações do Extrato
routes.get(
  "/openbank/statements/:id/:sid/transactions",
  authMiddleware,
  aispController.statementsAcountTransactions
);
// ATMs
routes.get("/openbank/atms", authMiddleware, aispController.atms);
// Agências
routes.get("/openbank/branches", authMiddleware, aispController.branches);
// Produtos
routes.get("/openbank/products", authMiddleware, aispController.products);

export default routes;
