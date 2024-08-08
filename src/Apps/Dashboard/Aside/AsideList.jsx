import { useStore } from "@nanostores/react"
import { CurrentPlatformStore } from "../context/Dashboard"

 
 
export default function AsideList({data}){
    //Functions
    const HandleSelectPlatform = () => {
        CurrentPlatformStore.set(data)
    }

   return (
       <li className="as-list d-flex p-4 br-6 pointer" onClick={HandleSelectPlatform}>
           {data.Platform}
       </li>
   )
}