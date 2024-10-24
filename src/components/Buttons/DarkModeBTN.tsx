import './Buttons.css'

import ToggleBTN from './ToggleBTN.js'
import { useStore } from '@nanostores/react';
import { ConfigStore } from '@Context/GlobalStore.ts';
import { useEffect } from 'react';
import useDarkMode from 'src/Hooks/useDarkMode.js';

const DarkModeBTN = () => {
    //DarkMode Store
    const Config = useStore(ConfigStore);

    //Hooks
    const DM = useDarkMode();

    useEffect(() => {
        if (Config.DarkMode) {
            document.body.classList.add("DarkMode");
        } else {
            document.body.classList.remove("DarkMode");
        }
    }, [Config.DarkMode])

    return (
        <ToggleBTN funct={DM.Toggle} initial={Config.DarkMode} />
    )
}

export default DarkModeBTN;