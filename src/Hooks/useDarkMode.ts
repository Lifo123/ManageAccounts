import { DarkModeStore } from "@Context/GlobalStore";

export default function useDarkMode() {

    const getInitialState = () => {
        const storedState = localStorage.getItem("DMstate");
        return storedState ? storedState === "true" : DarkModeStore.get();
    };


    const Toggle = () => {
        let isDark = getInitialState();

        localStorage.setItem("DMstate", `${!isDark}`);
        return !isDark;
    }

    const setDark = () => {
        localStorage.setItem("DMstate", 'true');
        return true;
    }

    const setLight = () => {
        localStorage.setItem("DMstate", 'false');
        return false;
    }

    const setSystem = () => {
        console.log('Function for system');

    }

    return {
        Toggle,
        setDark,
        setLight,
        setSystem,
        getInitialState
    }
}