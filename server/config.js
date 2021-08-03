// load contents of .env into process.env
require('dotenv').config();

exports.Config = {
    tenantUrl       : process.env.TENANT_URL,
    clientId        : process.env.CLIENT_ID,
    clientSecret    : process.env.CLIENT_SECRET,
    redirectUri     : process.env.REDIRECT_URI,
    consentAppHost  : process.env.CONSENT_APP_HOST,
};