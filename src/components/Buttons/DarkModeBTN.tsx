import './Buttons.css'
import useDarkMode from '@Hooks/useDarkMode.ts';
import ToggleBTN from './ToggleBTN.js'
import { useStore } from '@nanostores/react';
import { DarkModeStore } from '@Context/GlobalStore.ts';
import { useEffect } from 'react';

const DarkModeBTN = () => {
    //DarkMode Store
    const isDark = useStore(DarkModeStore);

    //Hooks
    const DM = useDarkMode();

    const Toggle = () => {
        const isDarkResult = DM.Toggle();
        DarkModeStore.set(isDarkResult);
    }

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("DarkMode");
        } else {
            document.body.classList.remove("DarkMode");
        }
    }, [isDark])

    return (
        <ToggleBTN funct={Toggle} initial={isDark} />
    )
}

export default DarkModeBTN;