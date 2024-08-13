import { useStore } from "@nanostores/react"
import { CurrentPlatformStore } from "../../Apps/context/Dashboard"

export default function AsideList({ data }) {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore)

    //Functions
    const HandleSelectPlatform = (e) => {
        CurrentPlatformStore.set({ ...data, shouldClearInput: true, active: true });
    }
    
    return (
        <li className={`as-list d-flex py-3 px-4 br-6 pointer ${CurrentPlatform.id === data.id ? 'active' : ''}`}
            onClick={HandleSelectPlatform}
            data-id={data.id}
            data-name={data.Platform}
        >   
            {data.Platform || 'Platform'}
        </li>
    )
}