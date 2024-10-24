import DarkModeBTN from "@Components/Buttons/DarkModeBTN";
import { toast } from "sonner";

interface AddAccountBTNProps {

}

export default function AddAccountBTN() {

    const handleClick = () => {
        toast.success('hola')
    }

    return (
        <>
            <span className="add-btn px-3 py-2 br-max fs-2 fw-600 pointer" onClick={handleClick}>Add</span>
            <DarkModeBTN />
        </>
    )
}