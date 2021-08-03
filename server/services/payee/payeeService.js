const config = require('../../config').Config;
const HTTPUtil = require('../httputil');
const httpClient = new HTTPUtil(config.consentAppHost);
        
class PayeeService {

    authorizePayee = async (req, res, token, product) => {

        const items = [
            {
                "purposeId": "registerSO",
                "attributeId": "accountNumbers",
                "attributeValue": product.id,
                "accessTypeId": "default"
            },
            {
                "purposeId": "registerSO",
                "attributeId": "accountBalance",
                "attributeValue": product.id,
                "accessTypeId": "default"
            },
            {
                "purposeId": "registerSO",
                "attributeId": "accountTerms",
                "attributeValue": product.id,
                "accessTypeId": "default"
            },
            {
                "purposeId": "registerSO",
                "attributeId": "email",
                "attributeValue": product.id,
                "accessTypeId": "default"
            },
            {
                "purposeId": "validateActivity",
                "attributeId": "accountTransactions",
                "attributeValue": product.id,
                "accessTypeId": "default"
            }
        ];

        const response = await httpClient.post("/payee/authorize", {
            "items": items,
        }, {
            "content-type": "application/json",
            "accept": "application/json",
            "authorization": `Bearer ${token}`,
        });

        if (response.data.status == "consent") {
            const proxyHost = req.headers["x-forwarded-host"];
            const host = proxyHost ? proxyHost : req.headers.host;
            let callbackUri = `${req.protocol}://${host}/products/check_payee?appid=${product.id}`;
            let custom = JSON.stringify([
                {
                    "name": "amount",
                    "value": product.amount,
                },
                {
                    "name": "pkgName",
                    "value": product.pkgName,
                },
            ]);
            let url = new URL(`${config.consentAppHost}${response.data.redirectUri}`);
            url.searchParams.append("callbackUri", callbackUri);
            url.searchParams.append("custom", custom);
            res.redirect(url.toString());
        }

        return response.data.status;
    }
}

module.exports = PayeeService;