import './Button.css'

export default function Button({ type }) {



    return (
        <span className="br-4 btn-green btn text-center fw-800 mt-2" onClick={() => console.log(type)}>
            Sign {type === "login" ? "in" : "up"}
        </span>
    )
}