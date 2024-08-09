import { useStore } from "@nanostores/react"
import { AccountListStore, CurrentPlatformStore } from "../../Apps/context/Dashboard"
import { useEffect, useRef } from "react";
import { updateUsage } from "@services/manageData";



export default function AsideList({ data }) {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)
    const AccountList = useStore(AccountListStore)

    //Refs
    const ListRef = useRef(null);

    //Functions
    const HandleSelectPlatform = (e) => {
        updateUsage(data.id)
        CurrentPlatformStore.set({ ...data, shouldClearInput: true, active: true });
    }


    return (
        <li className={`as-list d-flex p-4 br-6 pointer ${CurrentPlatform.id === data.id ? 'active' : ''}`} onClick={HandleSelectPlatform} ref={ListRef} data-id={data.id}>
            {data.Platform || 'Platform'}
        </li>
    )
}