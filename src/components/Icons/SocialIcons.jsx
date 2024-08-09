
const Icons = {
    Twitter: 'wasa',
    Twitch: 'ekside'
}

export default function SocialIcons({ id }) {
    return (
        <span className="main-head-icon d-flex f-center">
            {
                Icons[id]
            }
        </span>
    )
}