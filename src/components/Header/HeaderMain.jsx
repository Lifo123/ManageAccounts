import './HeaderMain.css'
import { useStore } from "@nanostores/react"
import { CurrentPlatformStore, PlatformStore } from "../../Apps/context/Dashboard"
import { saveAccounts } from '@services/manageData';
import { UserStore } from 'src/context/GlobalStore';
import SocialIcons from '@Components/Icons/SocialIcons';
import { useEffect, useState } from 'react';
import { MaxIndex } from '@utilities/json';


export default function HeaderMain({ redirect, isDashboard, }) {
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
    }, []);

    if (isMounted) {
        return (
            <section className="main-head f-row f-justify-between f-align-center">
                <div className="f-row f-center g-6">
                    <span>
                        <SocialIcons id={CurrentPlatform.Platform} />
                    </span>
                    <h1 className='fs-4'>{CurrentPlatform.Platform}</h1>
                </div>
                <div className="f-row f-center g-5 mr-2">
                    <p className='fs-3 fw-800 m-0'>{User?.username}</p>
                    {
                        isDashboard ? <span className="add-btn btn fw-800 br-max pointer" onClick={HandleAddCardAccount}> Add </span> : null
                    }
                    <a className="main-head-icon d-flex f-center pointer br-max" href={redirect} aria-label='Edit Platform'>
                        <svg height="24px" viewBox="0 0 52 52">
                            <path
                                stroke="none"
                                d="M32.26,52a2.92,2.92,0,0,1-2.37-1.21l-3.48-4.73h-.82L22.11,50.8a2.93,2.93,0,0,1-3.5,1L13,49.45a2.93,2.93,0,0,1-1.78-3.17l.89-5.8-.59-.59-5.8.89A2.93,2.93,0,0,1,2.55,39L.23,33.39a2.92,2.92,0,0,1,1-3.5l4.73-3.48v-.82L1.21,22.11a2.92,2.92,0,0,1-1-3.5L2.55,13a2.93,2.93,0,0,1,3.17-1.78l5.8.89.59-.59-.89-5.8A2.93,2.93,0,0,1,13,2.55L18.61.23a2.93,2.93,0,0,1,3.5,1l3.48,4.74h.82l3.48-4.73a2.93,2.93,0,0,1,3.5-1L39,2.55a2.93,2.93,0,0,1,1.78,3.17l-.89,5.8.59.59,5.8-.89A2.93,2.93,0,0,1,49.45,13l2.32,5.61a2.92,2.92,0,0,1-1,3.5l-4.73,3.48v.82l4.73,3.48a2.92,2.92,0,0,1,1,3.5L49.45,39a2.93,2.93,0,0,1-3.17,1.78l-5.8-.89-.59.59.89,5.8A2.93,2.93,0,0,1,39,49.45l-5.61,2.32A2.82,2.82,0,0,1,32.26,52Zm-17-5.93,4.09,1.69,3.3-4.49a2.94,2.94,0,0,1,2.37-1.21H27a3,3,0,0,1,2.37,1.2l3.3,4.5,4.09-1.69-.85-5.51A3,3,0,0,1,36.68,38L38,36.69a3,3,0,0,1,2.53-.83l5.51.85,1.69-4.09-4.49-3.3A2.94,2.94,0,0,1,42.06,27v-1.9a2.94,2.94,0,0,1,1.21-2.37l4.49-3.3L46.07,15.3l-5.51.84A3,3,0,0,1,38,15.31L36.69,14a3,3,0,0,1-.83-2.53l.85-5.51L32.62,4.24l-3.3,4.5A3,3,0,0,1,27,9.94h-1.9a2.94,2.94,0,0,1-2.37-1.21l-3.3-4.49L15.29,5.93l.85,5.51A3,3,0,0,1,15.31,14L14,15.31a3,3,0,0,1-2.53.83L5.93,15.3,4.24,19.38l4.49,3.3a2.94,2.94,0,0,1,1.21,2.37V27a2.94,2.94,0,0,1-1.21,2.37l-4.49,3.3,1.69,4.09,5.51-.85a2.94,2.94,0,0,1,2.53.83L15.31,38a2.94,2.94,0,0,1,.83,2.53Zm31.6-30.9Zm-.31-2h0ZM26,38A12,12,0,1,1,38,26,12,12,0,0,1,26,38Zm0-20a8,8,0,1,0,8,8A8,8,0,0,0,26,18Z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </section>

        )
    } else {
        return <p>Loading...</p>;
    }
}