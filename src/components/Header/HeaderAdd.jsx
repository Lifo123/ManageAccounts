import { CurrentPlatformStore, PlatformStore } from "@Apps/context/Dashboard";
import { useStore } from "@nanostores/react";
import { saveAccounts } from "@services/manageData";
import { MaxIndex } from "@utilities/json";
import { UserStore } from "src/context/GlobalStore";

 
 
export default function HeaderAdd(){
    const Platforms = useStore(PlatformStore)
    const CurrentPlatform = useStore(CurrentPlatformStore);
    const User = useStore(UserStore);

    const HandleAddCardAccount = () => {
        let platformUpdated = {
            ...CurrentPlatform, Accounts: [
            { user: User.username, email: '', password: '', id: MaxIndex(CurrentPlatform.Accounts) + 1 },
            ...CurrentPlatform.Accounts
            ]
        }
        let currentIndex = Platforms.findIndex(account => account.id === CurrentPlatform.id);
        let updatedPlatform = [...Platforms]
        updatedPlatform[currentIndex] = platformUpdated;

        PlatformStore.set(saveAccounts(updatedPlatform, User.username));
        CurrentPlatformStore.set(updatedPlatform[currentIndex]);

    }

   return (
    <span className="add-btn btn fw-800 br-max pointer" onClick={HandleAddCardAccount}> Add </span>
   )
}