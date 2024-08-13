import './EditPlatform.css'
import '@Components/Input/Input.css'

import { useStore } from '@nanostores/react'
import { CurrentPlatformStore, PlatformStore } from '../context/Dashboard'
import { useEffect, useState } from 'react';
import useTimer from '@Hooks/useTimer';
import { deleteAccount, saveAccounts } from '@services/manageData'
import { LogoutUser } from '@services/manageUserData';
import { UserStore } from 'src/context/GlobalStore';

export default function EditPlatform() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)
    const Accounts = useStore(PlatformStore)
    const User = useStore(UserStore)

    //States
    const [isMounted, setIsMounted] = useState(false);
    const [inputValue, setInputValue] = useState('');

    //Hooks
    const { CountDown } = useTimer(1);


    //Effects
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (CurrentPlatform.shouldClearInput) {
            setInputValue(CurrentPlatform.Platform);
            CurrentPlatformStore.set({
                ...CurrentPlatform,
                shouldClearInput: false
            });
        }
    }, [CurrentPlatform]);

    //Functions
    if (!isMounted) {
        return null;
    }

    const HandleEditPlatform = async (e) => {
        let value = e.target.value;
        await CountDown();

        setInputValue(value);
        CurrentPlatformStore.set({ ...CurrentPlatform, Platform: value });

        const updatedAccounts = Accounts.map(account =>
            account.id === CurrentPlatform.id ? { ...account, Platform: value } : account
        );

        PlatformStore.set(saveAccounts(updatedAccounts, User.username));


    }

    const HandleDeletePlatform = () => {
        let newAccounts = deleteAccount(Accounts, CurrentPlatform.id, User.username);
        saveAccounts(newAccounts, User.username);
        PlatformStore.set(newAccounts);
        CurrentPlatformStore.set({ ...newAccounts[0], shouldClearInput: true });
    }

    return (
        <section className='edit-platform f-col g-2'>
            <div className='f-row f-justify-between'>
                <input
                    className='input-def br-6 py-3 px-5'
                    type="text"
                    placeholder={CurrentPlatform.Platform || 'Empty'}
                    value={inputValue}
                    onChange={HandleEditPlatform}
                />
            </div>
            <span className='btn-red btn d-flex f-center br-4 mt-4' onClick={HandleDeletePlatform}>Delete Platform</span>
            <span className='btn-red btn d-flex f-center w-max br-4 mt-5' onClick={LogoutUser}>Log Out</span>
        </section>
    )
}