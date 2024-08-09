import './Main.css'
import { useEffect } from "react";
import { useStore } from "@nanostores/react"

import { getAccounts } from '../../../services/manageData';
import { CurrentPlatformStore } from "../context/Dashboard"
import AccountCard from "./AccountCard/AccountCard";



export default function Main() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)


    useEffect(() => {
        const data = getAccounts();
        CurrentPlatformStore.set(data[0]);
    }, [])

    return (
        <section className="card-container f-col g-2">
            {
                CurrentPlatform?.Accounts?.length > 0 ? (
                    CurrentPlatform.Accounts.map((account, index) => (
                        <AccountCard key={index} data={account} />
                    ))
                ) : (
                    <p className='w-95 mx-auto'>No hay cuentas disponibles</p>
                )
            }
        </section>
    )
}