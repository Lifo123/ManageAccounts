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
        if (newAccounts.length === 0) {
            setIsMounted(false);
            PlatformStore.set([]);
        }

        saveAccounts(newAccounts, User.username);
        PlatformStore.set(newAccounts);

        CurrentPlatformStore.set({ ...newAccounts[0], shouldClearInput: true });
    }

    return (
        <section className='edit-platform f-col g-4 oy-auto h-80 relative mt-5 px-4'>
            <div className='f-col g-2 f-justify-center'>
                <p className='m-0 fw-800'>Edit Platform:</p>
                <div className='f-row f-justify-between f-align-center'>
                    <input
                        className='input-def br-6 py-3 px-4 fs-2'
                        type="text"
                        placeholder={CurrentPlatform.Platform || 'Empty'}
                        value={inputValue}
                        onChange={HandleEditPlatform}
                    />
                    <span className='btn-red px-3 py-2 d-flex f-center br-4 pointer' onClick={HandleDeletePlatform}>Delete</span>
                </div>
            </div>
            <span className='btn-red btn d-flex f-center br-4 mt-4' onClick={LogoutUser}>Log Out</span>
        </section>
    )
}