import { CurrentPlatformStore } from "@Apps/context/Dashboard";
import { useStore } from "@nanostores/react";

const Icons = {
    Twitter: 'Twitter',
    Twitch: 'Twitch',
    Discord: 'discord',
    Instagram: 'instagram',
    Outlook: 'outlook',
    Gmail: 'gmail',
    Facebook: 'facebook',
    Whatsapp: 'whatsapp',
    Artstation: 'artstation',
    Youtube: 'youtube',
    none: 'none',

}

export default function SocialIcons() {
    //GlobalStates
    const CurrentPlatform = useStore(CurrentPlatformStore);

    return (
        <span className="main-head-icon d-flex f-center">
            {Icons[CurrentPlatform.Platform] ? Icons[CurrentPlatform.Platform] : 'none'}
        </span>
    )
}