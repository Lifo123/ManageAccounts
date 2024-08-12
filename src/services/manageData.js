import { decrypt, encrypt } from "@utilities/Hashing";
import { getLocal, MaxIndex, parse, setLocal, stringify } from "@utilities/json";

//Posible error
export const getAccounts = (username) => {
   return parse(getLocal('accsUser-' + username));
}

export const saveAccounts = (UpdatedAccounts, username) => {
   let userData = getAccounts(username);
   let DecryptedData = parse(decrypt(userData.data, userData.salt));
   DecryptedData = {...DecryptedData, Accounts: UpdatedAccounts};
   
   let EncryptedData = encrypt(stringify(DecryptedData), userData.salt);
   userData = {...userData, data: EncryptedData};

   setLocal('accsUser-' + username, stringify(userData));

   return UpdatedAccounts;
}


export const updateUsage = (id) => {
   const Accounts = getAccounts();
   const Acc = Accounts.map(account =>
      account.id === id ? { ...account, Usage: account.Usage + 1 } : account
   );
   return saveAccounts(Acc);
}

export const deleteAccount = (data, id) => {
   let filteredData = data.filter(account => account.id !== id);
   return filteredData
   
}
