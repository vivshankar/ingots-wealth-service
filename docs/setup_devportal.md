The IBM Security Verify Developer Portal can be accessed by any user in the `Developer` group on the tenant. The activities here are performed by the Bank IT Admin who has administrative access to the IBM Security Verify tenant that is the Bank identity provider.

## Create user with developer role

1. Login to IBM Security Verify Admin Console (https://your-tenant.verify.ibm.com/ui/admin) using your admin credentials.
2. Go to `Users and Groups`
3. Add the developer account, if it does not exist. If it does, switch to the `Groups` tab.
4. Edit `Developer` group
5. Add your user to the members

## Create the developer portal application on IBM Security Verify

1. Login to IBM Security Verify Admin Console (https://your-tenant.verify.ibm.com/ui/admin) using your admin credentials.
2. Go to Applications and click Add
3. Search for and select "IBM Security Verify Developer Portal"
4. Configure the OIDC grants that should be allowed. Ensure that authorization code is selected for this application.
5. Save