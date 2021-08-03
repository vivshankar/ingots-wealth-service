The third-party provider can sign up for their application through the IBM Security Verify Developer Portal. There are steps that would need to be performed by the administrator to complete the onboarding process, however.

## Prerequisites

Follow the steps to [set up the developer portal](setup_devportal.md) and developer user account(s).
Follow the steps to [configure for data privacy](setup_dpcm.md).

## Access the developer portal

1. Login as the developer. If this is the same as the admin, you may need to re-login for group membership updates to take effect.
2. You should see the Developer Portal application on the launchpad.
3. Launch the developer portal

## Add a new application

Continuing from the previous step.

1. Click on Add on the developer portal
2. Choose "Authorization Code" as the grant type. Fill in the other fields as desired.
3. You should now see a code snippet. Note the `client_id` and `client_secret`.
4. Open the cloned Github repository on your machine
5. Copy the `dotenv` file and name it `.env`
6. Enter `TENANT_URL` as your tenant hostname (your-tenant.verify.ibm.com)
7. Enter `CLIENT_ID` and `CLIENT_SECRET` based on step 3
8. Save the file

## Create an Application API Client to be shared with the Bank App

This activity is performed by the Bank IT Admin who has administrative access to the Verify Admin Console. This API client is configured in the [Bank Consent App](https://github.com/vivshankar/dunebank-consent) to perform a privacy assessment to authorize an add payee request, present a consent page and store consents.

1. Login to the Verify Admin Console using admin credentials.
2. Go to Applications
3. Search for the newly added TPP application
4. Select the Edit icon
5. Go to the "API Access" tab
6. Click "Add API Client"
7. Name the API Client "Bank Consent Client"
8. Choose the entitlements `Check for data usage approval`, `Create privacy consent records` and `Retrieve privacy purposes and associated user's consent`.
9. Save

## Entitle the application

Continuing from the previous step.

1. Go to the Entitlements tab
2. Choose "Automatic access for all users and groups"
3. Save

## Configure privacy

Continuing from the previous step.

1. Go to the Privacy tab.
2. Add the purposes - registerSO and validateActivity.