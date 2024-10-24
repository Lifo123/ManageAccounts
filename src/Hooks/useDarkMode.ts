import { ConfigStore } from "@Context/GlobalStore";

export default function useDarkMode() {
    //Store
    const Config = ConfigStore.get();


    const Toggle = () => {
        let config = JSON.parse(localStorage.getItem("F-Config") || '{}');

        config.DarkMode = !Config.DarkMode;
        ConfigStore.set(config);
        localStorage.setItem('F-Config', JSON.stringify(config));
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
        setSystem
    }
}