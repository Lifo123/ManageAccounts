import './Buttons.css'

export default function PrimaryBTN({ text = "Button", funct = null }) {
    //Functions
    

    return (
        <span className='primary-btn d-flex br-4' onClick={funct}>
            {text}
        </span>
    )
}