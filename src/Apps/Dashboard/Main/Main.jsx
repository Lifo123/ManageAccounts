import './Main.css'
import { useEffect } from "react";
import { useStore } from "@nanostores/react"

import { getData } from '../../../services/getData';
import { CurrentPlatformStore } from "../context/Dashboard"
import AccountCard from "./AccountCard/AccountCard";



export default function Main() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)


    useEffect(() => {
        const data = getData();
        CurrentPlatformStore.set(data[0]);
    }, [])

    return (
        <>
            <section className='f-row'>
                <h1>{CurrentPlatform.Platform}</h1>
            </section>
            <section className="card-container f-col g-2">
                {
                    CurrentPlatform?.Accounts?.length > 0 ? (
                        CurrentPlatform.Accounts.map((account, index) => (
                            <AccountCard key={index} data={account} />
                        ))
                    ) : (
                        <p>No hay cuentas disponibles</p>
                    )
                }
            </section>
        </>
    )
}