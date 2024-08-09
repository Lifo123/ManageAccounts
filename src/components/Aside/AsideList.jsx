import { useStore } from "@nanostores/react"
import { CurrentPlatformStore } from "../../Apps/context/Dashboard"
import { useEffect, useRef } from "react";



export default function AsideList({ data }) {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)

    //Refs
    const ListRef = useRef(null);

    //Functions
    const HandleSelectPlatform = (e) => {
        CurrentPlatformStore.set({ ...data, shouldClearInput: true, active: true });
    }


    return (
        <li className={`as-list d-flex p-4 br-6 pointer ${CurrentPlatform.id === data.id ? 'active' : ''}`} onClick={HandleSelectPlatform} ref={ListRef} data-id={data.id}>
            {data.Platform}
        </li>
    )
}