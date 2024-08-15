
import { useStore } from "@nanostores/react"
import { CurrentPlatformStore, PlatformStore } from "../../Apps/context/Dashboard"
import { saveAccounts } from '@services/manageData';
import { UserStore } from 'src/context/GlobalStore';
import SocialIcons from '@Components/Icons/SocialIcons';
import { useEffect, useState } from 'react';
import { MaxIndex } from '@utilities/json';
import AsideToggle from '@Components/Aside/AsideToggle';


export default function HeaderMain() {
    //GlobalStates
    const Platforms = useStore(PlatformStore)
    const CurrentPlatform = useStore(CurrentPlatformStore);
    const User = useStore(UserStore);



    //States
    const [isMounted, setIsMounted] = useState(false);

    //Functions
    const HandleAddCardAccount = () => {
        let platformUpdated = {
            ...CurrentPlatform, Accounts: [...CurrentPlatform.Accounts,
            { user: User.username, email: '', password: '', id: MaxIndex(CurrentPlatform.Accounts) + 1 }
            ]
        }
        let currentIndex = Platforms.findIndex(account => account.id === CurrentPlatform.id);
        let updatedPlatform = [...Platforms]
        updatedPlatform[currentIndex] = platformUpdated;

        PlatformStore.set(saveAccounts(updatedPlatform, User.username));
        CurrentPlatformStore.set(updatedPlatform[currentIndex]);

    }

    //Effects
    useEffect(() => {
        setIsMounted(true);
        
    }, [])

    if (isMounted) {
        return (
            <section className="main-head f-row f-justify-between f-align-center">
                <div className="mh-lef f-row f-center g-6">
                <span className='social-icon'>
                                <SocialIcons id={CurrentPlatform.Platform} />
                            </span>
                    <h1 className='fs-4'>{CurrentPlatform.Platform}</h1>
                </div>
                <div className="f-row f-center g-5 mr-2">
                    <p className='fs-3 fw-800 m-0'>{User?.username}</p>
                    <span className="add-btn btn fw-800 br-max pointer" onClick={HandleAddCardAccount}> Add </span>
                </div>
            </section>

        )
    } else {
        return <p>Loading...</p>;
    }
}