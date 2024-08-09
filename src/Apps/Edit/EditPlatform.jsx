import './EditPlatform.css'
import { useStore } from '@nanostores/react'
import { CurrentPlatformStore, AccountListStore } from '../context/Dashboard'
import { useEffect, useState } from 'react';
import useTimer from '@Hooks/useTimer';
import { deleteAccount, saveAccounts } from '@services/manageData'

export default function EditPlatform() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)
    const Accounts = useStore(AccountListStore)

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
            account.id ===  CurrentPlatform.id ? { ...account, Platform: value } : account
        );

        AccountListStore.set(saveAccounts(updatedAccounts));



    }

    const HandleDeletePlatform = () => {
        const newAccounts = deleteAccount(CurrentPlatform.id);

        AccountListStore.set(newAccounts);
        CurrentPlatformStore.set({ ...newAccounts[0], shouldClearInput: true });
    }

    return (
        <section className='edit-platform f-col g-2'>
            <div className='f-row f-justify-between'>
                <input
                    className='edit-in br-6 py-3 px-5'
                    type="text"
                    placeholder={CurrentPlatform.Platform || 'Empty'}
                    value={inputValue}
                    onChange={HandleEditPlatform}
                />
            </div>
            <span className='btn-red btn d-flex f-center br-4 mt-4' onClick={HandleDeletePlatform}>Delete Platform</span>
        </section>
    )
}