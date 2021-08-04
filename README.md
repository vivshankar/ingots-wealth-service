## Introduction

It is typical in the financial industry to have a ecosystem of services - utilities, wealth management, insurance, etc. - that require a relationship established with a bank to authorize recurring transfers and transactions. There are generally three parties involved:

1. Bank or other financial institution where the payee needs to be added
2. Bank identity provider: User authenticates with bank credentials before authorizing a request
3. Third-party provider (TPP): Usually an entity that offers various services like insurance. The TPP usually offers the user the option of setting up a Direct Debit relationship with banks etc., to simplify the process of transferring premiums and funds.

In this architecture, the TPP cannot be allowed to modify the consent information on the user's behalf because the TPP is not a trusted entity. Moreover, the TPP would usually not authenticate the user using bank credentials. Given this restriction, the bank controls the privacy assessment and consent process that results in user authorization.

This guide will walk you through how to build a third-party provider (TPP) portal that integrates with the [bank consent app](https://github.com/vivshankar/dunebank-consent). This app represents a wealth management service and provides only two capabilities:

1. Sign up for a wealth product
2. Validate that the payment instruction is still active

The flow in this sample app is illustrated below.

![](https://www.planttext.com/api/plantuml/img/bLNBZXCn4BpFLxHou74Wl6uhyTY7X098HEm25oJasBqPQoVsO7isoiB-EzKUpsOc2mToY2AxkbrTNTrv6vCAgTiqLQLqye6wo85KfDbxZj5gDQjMldD6XHrrAb-S1By5Q5QrYBJQjiebIcsRBozg6ymJkTaHGDTMynIe-oHddUELSbUalOkCSzMsKw0rxHIvC4jwj3Z_-dXMLPdbazUWT4JdtMfZ4xN1cqudCfoKRM85jW20rpyHmdc0d7bQKAskcHGbVyMEBeFVKAgPvF4tFRYyk70sMPM0lN4em31TDdwBE5fpwiFByoZYY3vOVKN-yl8ENabjGxBJMZKDkpMItCdVfNfIuZ4E81BQWKUtDjNKQnVOoB6wApU_LyeTt-O7o_KxTXmaqQV5sMbXEn3gvM9dnfT59mqYJrkrOtug17smDqo_CxSR-fMXjvNUqrYu57ni6OgBZ0KngAGR2t8_h265rpmGWOnAQfnXoG6QRD0uUwtq3dQ8CEK6SMFKEybMNBH1QqTPXF99Pnj3xxzT20YDTzQjx-65n7TtiLmUyCfDM9oHTmJdvQo3IXYSrCLN9TC3Y6q3QlqIxAjVvN092xNfo-UFjnFxl7psWlu2SHuzyTTu4E2Ay3asXjBMap86XlDEDVIpOqnYJ46gmBWeLC0X7cLy_de-9zt5v3T7X66CqC3H2bPrkt9EAY5yrIMEqWovCuQD_9O-3TAW61zCJla2AM7IbT9NA4_oCe6oH6nhg-j970Rvkukrxw3w80hqqtj4ZR5UCSiimFawiQd4SL9_LNmiZVkBH4N_F3ObMQlMV6zMUcyAgy1GBAPHsc4w-lXuw2JnccrudGKHz-_RebLMu-HWRH54NWUiB8IeSVpnSf43Uak1Zag2XOkzblLX-b4McgErcKFAwfG5YFRDZjksaU671oGhdUQCisBB-Rxvqfbx_3OmlHWVkV2xRM6T35vnsaeR3WX8pCEu7uICbM58OgTHVQMk_PwPx_iuKlKSVoiyrNio27jdtVQ26DOsejJn2f_0_diZ3LcWOq0hpU7gpslUtipdywfwYnhmV_W7)

## Pre-requisites

1. Install Node and Git on your machine
2. [Create a tenant on IBM Security Verify](https://docs.verify.ibm.com/verify/docs/signing-up-for-a-free-trial). This is the Bank identity provider.
3. Clone this repo to your machine

## Setup

Follow the steps to [create the TPP application on the Bank IBM Security Verify tenant](docs/create_app.md).

## Run the application

1. Install node dependencies

    ```bash
    npm install
    ```

2. Run the application. You should see `Server started and listening on port 3000` after executing the command below.

    ```bash
    npm start
    ```

3. Setup and run [Dunebank Consent App](https://github.com/vivshankar/dunebank-consent).

4. Open the browser and go to http://localhost:3000/products and you should be able to use the application

## Browsing the code

The project structure is described [here](/docs/browsing_code.md)