var request = require("request");
var req = request.defaults();
var fs = require("fs");

const key = fs.readFileSync(__dirname + "/bank1/certs/client_private_key.key");
const cert = fs.readFileSync(__dirname + "/bank1/certs/client_certificate.crt");
const apiPAS = async (uri: String, callback: Function) => {
  await req.post(
    {
      uri,
      key,
      cert,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Basic YWMyY2M2ZDctY2RiOC00NjZhLTg0ZmEtNzRmMTRkNDFiYzEyOjYwZmM3MjE5LTQ3MGYtNGVhZS04YzAxLTJkNTU4NWUxNzM2MQ=="
      },
      form: {
        grant_type: "client_credentials",
        scope: "accounts openid"
      },
      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, JSON.parse(body));
    }
  );
};
const apiPASAC = async (uri: String, code: String, callback: Function) => {
  await req.post(
    {
      uri,
      key,
      cert,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Basic YWMyY2M2ZDctY2RiOC00NjZhLTg0ZmEtNzRmMTRkNDFiYzEyOjYwZmM3MjE5LTQ3MGYtNGVhZS04YzAxLTJkNTU4NWUxNzM2MQ=="
      },
      form: {
        grant_type: "authorization_code",
        scope: "accounts ",
        code,
        redirect_uri: "http://www.google.co.uk"
      },
      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, JSON.parse(body));
    }
  );
};
const apiPRS = async (uri: String, token: String, callback: Function) => {
  await req.post(
    {
      uri,
      key,
      cert,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-interaction-id": "4e8fc130-0187-49d5-b034-c73a5d0626ff",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        Data: {
          Permissions: [
            "ReadAccountsBasic",
            "ReadAccountsDetail",
            "ReadBalances",
            "ReadBeneficiariesBasic",
            "ReadBeneficiariesDetail",
            "ReadDirectDebits",
            "ReadTransactionsBasic",
            "ReadTransactionsCredits",
            "ReadTransactionsDebits",
            "ReadTransactionsDetail",
            "ReadProducts",
            "ReadStandingOrdersDetail",
            "ReadProducts",
            "ReadStandingOrdersDetail",
            "ReadStatementsDetail",
            "ReadParty",
            "ReadOffers",
            "ReadScheduledPaymentsBasic",
            "ReadScheduledPaymentsDetail",
            "ReadPartyPSU"
          ]
        },
        Risk: {}
      }),
      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, JSON.parse(body));
    }
  );
};

const apiGRS = async (uri: String, callback: Function) => {
  await req.get(
    {
      uri,
      key,
      cert,
      headers: {
        Authorization:
          "Basic YWMyY2M2ZDctY2RiOC00NjZhLTg0ZmEtNzRmMTRkNDFiYzEyOjYwZmM3MjE5LTQ3MGYtNGVhZS04YzAxLTJkNTU4NWUxNzM2MQ=="
      },

      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, body);
    }
  );
};

const openBank = async (
  uri: String,
  accessToken: String,
  callback: Function
) => {
  await req.get(
    {
      uri,
      key,
      cert,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-interaction-id": "771b5411-88c6-4b0a-b4ac-f1941d8f6291",
        Authorization: "Bearer " + accessToken
      },
      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, JSON.parse(body));
    }
  );
};

const openBankPublic = async (
  uri: String,
  accessToken: String,
  callback: Function
) => {
  await req.get(
    {
      uri,
      key,
      cert,
      headers: {},
      rejectUnauthorized: false
    },
    function (error: Error, response: Response, body: any) {
      // console.log(error);
      // console.log(response);
      callback(error, JSON.parse(body));
    }
  );
};

export { apiPAS, apiPRS, apiGRS, apiPASAC, openBank, openBankPublic };
