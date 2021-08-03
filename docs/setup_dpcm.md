This app requires certain attributes and data privacy purposes to be created on the bank's IBM Security Verify tenant.

## Create attributes

1. Login to IBM Security Verify admin console (https://yourtenant.verify.ibm.com/ui/admin) using admin credentials

2. Go to `Configuration > Attributes`

3. Add custom attributes with the ID `accountNumbers`, `accountBalance`, `accountTerms` and `accountTransactions`.

## Add data privacy items

1. Login to IBM Security Verify admin console (https://yourtenant.verify.ibm.com/ui/admin) using admin or privacy officer credentials

2. Go to `Data privacy & consent > Purposes`

3. Add purpose with ID `registerSO` and 4 user attributes - email, accountNumbers, accountBalance and accountTerms. Set access type as `default`.

4. Add purpose with ID `validateActivity` and 1 user attribute - accountTransactions. Set access type as `default`.
