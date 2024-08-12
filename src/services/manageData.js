import { MaxIndex } from "@utilities/FindMaxIndex";

export const getAccounts = (username) => {
   let userData = JSON.parse(localStorage.getItem('accsUser-' + username));


   if (userData.Accounts.length <= 0) {
      return false;
   }

   return userData.Accounts;
}

export const saveAccounts = (UpdatedAccounts, username) => {
   localStorage.setItem('accsUser-' + username, JSON.stringify(UpdatedAccounts));
   return UpdatedAccounts;
}


export const updateUsage = (id) => {
   const Accounts = getAccounts();
   const Acc = Accounts.map(account =>
      account.id === id ? { ...account, Usage: account.Usage + 1 } : account
   );
   return saveAccounts(Acc);
}

export const deleteAccount = (id) => {
   const Accounts = getAccounts();
   const FilteredAccounts = Accounts.filter(account => account.id !== id);

   return saveAccounts(FilteredAccounts);
}
