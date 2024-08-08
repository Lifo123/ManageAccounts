import './AsideContainer.css'
import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react'
import { AccountListStore } from '../context/Dashboard';

import AsideList from './AsideList';
import { getData } from '../../../services/getData';

export default function AsideContainer() {
    //AppStates
    const Accounts = useStore(AccountListStore)

    useEffect(() => {
        const data = getData();

        AccountListStore.set(data)
        
    }, [])
    
    useEffect(() => {
        if(Accounts.length > 0){
            localStorage.setItem('Accounts', JSON.stringify(Accounts));
        }
    }, [Accounts])

    return (
        <ul className='aside-cont f-col g-2 oy-auto relative'>
            {
                Accounts && Accounts.map((item, index) => (
                    <AsideList key={index} data={item} />
                ))
            }
        </ul>
    )
}