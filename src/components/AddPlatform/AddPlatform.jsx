import './AddPlatform.css'
import { useEffect, useState } from 'react'
import { getAccounts, saveAccounts } from '@services/manageData'
import { getUserData } from '@services/manageUserData'
import { AccountListStore, CurrentPlatformStore } from '@Apps/context/Dashboard'
import { UserStore } from 'src/context/GlobalStore'
import { SortByUsage } from '@utilities/SortArray'
import { MaxIndex } from '@utilities/json'


export default function AddPlatform() {
    //States
    const [isMounted, setIsMounted] = useState(false)
    

    //Functions
    const HandleAddPlatform = () => {
        const Accounts = AccountListStore.get()
        const id = MaxIndex(Accounts) + 1;

        AccountListStore.set(saveAccounts([{ Platform: `New Platform ${id}`, Usage: 0, id: id, Accounts: [] }, ...Accounts]))

        const updatedAccounts = getAccounts();
        CurrentPlatformStore.set({ ...updatedAccounts[0], shouldClearInput: true });

    }

    useEffect(() => {
        setIsMounted(true)
        if (isMounted) {
            let User = JSON.parse(localStorage.getItem('accsToken'));
            
            getAccounts(User.username)

        

        }
    }, [])


    return (
        <span className="plus d-flex f-center br-max pointer" onClick={HandleAddPlatform}>
            <svg height="18px" viewBox="0 0 24 24" fill="none">
                <g>
                    <path d="M4 12H20M12 4V20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        </span>
    )
}