var request = require("request");
var req = request.defaults();
var fs = require("fs");

const key = fs.readFileSync(__dirname + "/bank1/certs/client_private_key.key");
const cert = fs.readFileSync(__dirname + "/bank1/certs/client_certificate.crt");
const apiAS = async (uri: String, callback: Function) => {
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
const apiRS = async (uri: String, token: String, callback: Function) => {
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
export { apiAS, apiRS };
