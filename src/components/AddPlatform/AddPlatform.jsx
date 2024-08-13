import './AddPlatform.css'
import { useEffect, useState } from 'react'
import { saveAccounts } from '@services/manageData'
import { getUserData } from '@services/manageUserData'
import { PlatformStore, CurrentPlatformStore } from '@Apps/context/Dashboard'
import { UserStore } from 'src/context/GlobalStore'
import { MaxIndex, parse } from '@utilities/json'
import { useStore } from '@nanostores/react'
import { decrypt } from '@utilities/Hashing'


export default function AddPlatform() {
    //GlobalStates
    const User = useStore(UserStore);

    //States
    const [isMounted, setIsMounted] = useState(false)
    

    //Functions
    const HandleAddPlatform = (e) => {
        const Accounts = PlatformStore.get()
        const id = MaxIndex(Accounts) + 1;
        
        //Guardar nuevo platform
        let newAccounts = [{
                Platform: `New Platform ${id}`,
                Usage: 0,
                id: id,
                Accounts: []
            }, ...Accounts
        ]
        
        saveAccounts(newAccounts, User.username);
        PlatformStore.set(newAccounts);
        CurrentPlatformStore.set(newAccounts[0]);
    }

    useEffect(() => {
        setIsMounted(true)
        if (isMounted) {
            let UserData = getUserData(User.username);
            let DecryptData = parse(decrypt(UserData.data, UserData.salt))
            PlatformStore.set(DecryptData.Accounts);
            CurrentPlatformStore.set(DecryptData.Accounts[0]);
            
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