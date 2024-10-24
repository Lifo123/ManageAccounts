import { useStore } from "@nanostores/react";
import { AccountsStore, AllDataStore, NavigationStore, PlatformsStore } from "../context/ManageStore";
import { queryAcc } from "../services/accountServices";
import { Local } from "@Utilities/Local";
import { UserStore } from "@Context/GlobalStore";
import { useEffect, useState } from "react";

interface AddPlatformBTNProps {
    className?: string;
    style?: React.CSSProperties;
}

export default function AddPlatformBTN({ className, style }: AddPlatformBTNProps) {
    //States
    const [isMounted, setIsMounted] = useState(false);

    //Stores
    const Accounts = useStore(AccountsStore);
    const User = useStore(UserStore)
    const Navigation = useStore(NavigationStore)

    const getData = async () => {
        const data = await queryAcc.getData(User.user);
        AllDataStore.set(data)
        AccountsStore.set(data.accounts[Navigation.currentSocial || 'default'])
        PlatformsStore.set(Object.keys(data.accounts))
    }

    useEffect(() => {
        setIsMounted(true);

        if (isMounted) {
            getData()
        }
    }, [isMounted])

    return (
        <span className={`icon-btn d-flex f-center pointer ${className || ''}`} style={style}>
            <svg width="32" height="32" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" >
                <path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-5.5 0H12m0 0H8.5m3.5 0V8.5m0 3.5v3.5' />
            </svg>
        </span>
    )
}