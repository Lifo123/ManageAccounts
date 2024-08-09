import { useStore } from "@nanostores/react"
import { CurrentPlatformStore } from "../../Apps/context/Dashboard"



export default function AsideList({ data }) {
    //Functions
    const HandleSelectPlatform = () => {
        CurrentPlatformStore.set(data)
    }



    return (
        <li>
            <a href="/ManageAccounts/Dashboard" className="as-list d-flex p-4 br-6 pointer" onClick={HandleSelectPlatform}>
                {data.Platform}
            </a>
        </li>
    )
}