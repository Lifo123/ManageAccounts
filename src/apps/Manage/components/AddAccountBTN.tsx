import DarkModeBTN from "@Components/Buttons/DarkModeBTN";

interface AddAccountBTNProps {

}

export default function AddAccountBTN() {
    return (
        <>
            <span className="add-btn px-3 py-2 br-max fs-2 fw-600 pointer">Add</span>
            <DarkModeBTN />
        </>
    )
}