import './AsideContainer.css'
import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react'
import { AccountListStore } from '../context/Dashboard';

import AsideList from './AsideList';

export default function AsideContainer() {
    //AppStates
    const Accounts = useStore(AccountListStore)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Accounts'))

        AccountListStore.set(data)

    }, [])

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