import './AsideContainer.css'

import AsideList from './AsideList';
import { useStore } from '@nanostores/react';
import { AccountListStore } from '../../Apps/context/Dashboard';

export default function AsideContainer() {
    //AppStates
    const Accounts = useStore(AccountListStore);

    return (
        <ul className='aside-cont f-col g-2 o-hidden relative'>
            {
                Accounts && Accounts.map((item, index) => (
                    <AsideList key={index} data={item} />
                ))
            }
        </ul>
    )
}