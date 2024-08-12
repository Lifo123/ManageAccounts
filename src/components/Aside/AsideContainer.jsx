import './AsideContainer.css'

import AsideList from './AsideList';
import { useStore } from '@nanostores/react';
import { AccountListStore } from '../../Apps/context/Dashboard';
import { useEffect, useState } from 'react';

export default function AsideContainer() {
    //AppStates
    const Accounts = useStore(AccountListStore);

    //States
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (isMounted){
        return (
            <ul className='aside-cont f-col g-2 o-hidden relative'>
                wasa
                {/* {
                    Accounts && Accounts.map((item, index) => (
                        <AsideList key={index} data={item} />
                    ))
                } */}
            </ul>
        )
    }else{
        return <p>Loading...</p>;
    }
}