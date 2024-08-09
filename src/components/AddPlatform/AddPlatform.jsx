import { useEffect, useState } from 'react'
import { getAccounts, saveAccounts } from '../../services/manageData'
import { AccountListStore, CurrentPlatformStore } from '../../Apps/context/Dashboard'
import './AddPlatform.css'

export default function AddPlatform() {
    //States
    const [isMounted, setIsMounted] = useState(false)

    //Functions
    const HandleAddPlatform = () => {
        const Accounts = AccountListStore.get()

        AccountListStore.set(saveAccounts([...Accounts,
        { Platform: `New Platform ${Accounts.length + 1}`, Usage: 0, Accounts: [] }
        ]))

    }

    useEffect(() => {
        setIsMounted(true)
        if (isMounted) {
            const storedAccounts = getAccounts()

            AccountListStore.set(storedAccounts)
            CurrentPlatformStore.set(storedAccounts[0])
        }
    }, [isMounted])


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