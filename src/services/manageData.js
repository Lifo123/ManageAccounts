export const getAccounts = () => {
   const Accounts = JSON.parse(localStorage.getItem('Accounts') || '[{"Platform":"Platform","Usage":0,"Accounts":[]}]');
   return Accounts;
}

export const saveAccounts = (UpdatedAccounts) => {
   localStorage.setItem('Accounts', JSON.stringify(UpdatedAccounts));
   return UpdatedAccounts;
}


export const updateUsage = (id) => {

}

