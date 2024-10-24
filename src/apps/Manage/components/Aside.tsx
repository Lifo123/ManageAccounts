import { useStore } from "@nanostores/react";
import { useEffect } from "react"
import { AccountsStore, PlatformsStore } from "../context/ManageStore";
import Loading from "@Components/Loading/Loading";

export default function Aside() {
    //States


    //Stores
    const Platforms = useStore(PlatformsStore);

    const handleInput = (e: any) => {

    }

    useEffect(() => {
        let input = document.querySelector('#aside-search') as HTMLInputElement;
        input?.addEventListener('input', handleInput);
        return () => {
            input?.removeEventListener('input', handleInput);
        }

    }, [])

    return Platforms?.length > 0 ? (
        <div className="f-col g-2 mt-3">
            {Platforms.map((platform: any, index: number) => (
                <span className="aside-options p-3 br-8 d-flex pointer" key={index}>
                    {platform}
                </span>
            ))}
        </div>
    ) : (
        <Loading styleParent={{ scale: '0.42' }} styleLine={{ strokeWidth: '7' }} />
    );
}