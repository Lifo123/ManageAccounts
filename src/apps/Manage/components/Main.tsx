import { useStore } from "@nanostores/react"
import { AccountsStore, NavigationStore } from "../context/ManageStore"
import Loading from "@Components/Loading/Loading"

interface MainProps {

}

export default function Main() {
    //Stores
    const Accounts = useStore(AccountsStore)
    const Navigation = useStore(NavigationStore)

    if (!Accounts || Accounts?.length === 0) {
        return <Loading styleParent={{ scale: "0.4", marginBottom: "4rem" }} styleLine={{ strokeWidth: "7" }} />;
    }

    return (
        <div className="acc-container f-col g-4 py-2 px-5 mt-2">
            {
                Accounts.map((account: any, index: number) => (
                    <div className="card-account px-3 py-3 br-10 f-col g-2" key={index}>
                        <p><strong className="fw-800">Username: </strong> {account.username}</p>
                        <p><strong className="fw-800">Name: </strong> {account.name}</p>
                        <p><strong className="fw-800">Password: </strong>{account.pass}</p>
                    </div>
                ))
            }

        </div>
    );
}    