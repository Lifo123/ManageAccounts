import './Main.css'
import { useStore } from "@nanostores/react"

import { CurrentPlatformStore } from "../context/Dashboard"
import { useEffect, useState } from 'react';
import AccountCard from "./AccountCard/AccountCard";
import EditCard from "./EditCard/EditCard";


export default function Main() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)

    //States
    const [isMounted, setIsMounted] = useState(false)
    const [isEditing, setIsEditing] = useState(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        setIsEditing(null);
    }, [CurrentPlatform])

    if (isMounted) {
        return (
            <>
                {
                    isEditing ? (
                        <EditCard data={isEditing} setIsEditing={setIsEditing} />
                    ) : (
                        <section className="card-container f-col oy-auto h-80 g-2 relative mt-5">
                            {
                                CurrentPlatform?.Accounts?.length > 0 ? (
                                    CurrentPlatform.Accounts.map((account, index) => (
                                        <AccountCard key={index} data={account} setIsEditing={setIsEditing} />
                                    ))
                                ) : <p className='w-95 mx-auto'>No hay cuentas disponibles</p>
                            }
                        </section>
                    )
                }
            </>
        )
    } else {
        return <p>Loading...</p>;
    }
}