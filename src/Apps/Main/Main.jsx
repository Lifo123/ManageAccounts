import './Main.css'
import { useStore } from "@nanostores/react"

import { CurrentPlatformStore } from "../context/Dashboard"
import { useEffect, useState } from 'react';
import AccountCard from "./AccountCard/AccountCard";
import EditPlatform from '@Apps/Edit/EditPlatform';

export default function Main() {
    
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)


    //States
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (isMounted){
        return (
            <section className="card-container f-col g-6 oy-auto h-80 relative">
                {
                    CurrentPlatform?.Accounts?.length > 0 ? (
                        CurrentPlatform.Accounts.map((account, index) => (
                            <AccountCard key={index} data={account} />
                        ))
                    ) : <p className='w-95 mx-auto'>No hay cuentas disponibles</p>
                }
            </section>
        )
    }else{
        return <p>Loading...</p>;
    }
}