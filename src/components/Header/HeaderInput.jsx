import { CurrentPlatformStore, PlatformStore } from "@Apps/context/Dashboard";
import useTimer from "@Hooks/useTimer";
import { useStore } from "@nanostores/react";
import { saveAccounts } from "@services/manageData";
import { useEffect, useState } from "react";
import { UserStore } from "src/context/GlobalStore";


export default function HeaderInput() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)
    const Accounts = useStore(PlatformStore)
    const User = useStore(UserStore)

    //States
    const [isMounted, setIsMounted] = useState(false);

    //Hooks
    const { CountDown } = useTimer(1);

    //Functions
    const HandleEditPlatform = async (e) => {
        let value = e.target.value;
        await CountDown();
        CurrentPlatformStore.set({ ...CurrentPlatform, Platform: value });

        const updatedAccounts = Accounts.map(account =>
            account.id === CurrentPlatform.id ? { ...account, Platform: value } : account
        );

        PlatformStore.set(saveAccounts(updatedAccounts, User.username));
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }else{
        return <input className="main-input br-none fs-4" type="text" value={CurrentPlatform.Platform} onChange={HandleEditPlatform} />
    }

}