export const getAccounts = () => {
   const Accounts = JSON.parse(localStorage.getItem('Accounts') || '[{"Platform":"Platform","Usage":0, "id": 1, "Accounts":[]}]');
   return Accounts;
}

export const saveAccounts = (UpdatedAccounts) => {
   localStorage.setItem('Accounts', JSON.stringify(UpdatedAccounts));
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
