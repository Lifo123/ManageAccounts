import './EditPlatform.css'
import { useStore } from '@nanostores/react'
import { CurrentPlatformStore, AccountListStore } from '../context/Dashboard'
import { useEffect, useState } from 'react';
import useTimer from '@Hooks/useTimer';

export default function EditPlatform() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)
    const Accounts = useStore(AccountListStore)

    //States
    const [isMounted, setIsMounted] = useState(false);

    //Hooks
    const { CountDown } = useTimer(4);


    //Effects
    useEffect(() => {
        setIsMounted(true);
    }, []);

    //Functions
    if (!isMounted) {
        return null;
    }

    const HandleEditPlatform = async (e) => {
        await CountDown();

        console.log(CurrentPlatform);
        console.log(Accounts);
        

    }

    return (
        <section className='edit-platform f-col g-2'>
            <input className='edit-in br-6 py-3 px-5' type="text" placeholder={CurrentPlatform.Platform} onChange={HandleEditPlatform} />
        </section>
    )
}