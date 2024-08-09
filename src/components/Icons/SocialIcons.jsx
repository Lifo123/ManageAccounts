
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
    none: 'none',

}

export default function SocialIcons({ id }) {
    return (
        <span className="main-head-icon d-flex f-center">
            {
                Icons[id || 'none']
            }
        </span>
    )
}