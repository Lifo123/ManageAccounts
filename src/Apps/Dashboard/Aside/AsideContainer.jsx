import './AsideContainer.css'

import AsideList from './AsideList';
import { getAccounts, saveAccounts } from '../../../services/manageData';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { AccountListStore } from '../context/Dashboard';

export default function AsideContainer() {
    //AppStates
    const Accounts = useStore(AccountListStore);

    useEffect(() => {
        const data = getAccounts();
        AccountListStore.set(data); 
        saveAccounts(data);
        
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