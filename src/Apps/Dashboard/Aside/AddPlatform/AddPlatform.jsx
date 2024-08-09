import { saveAccounts } from '../../../../services/manageData'
import { AccountListStore } from '../../context/Dashboard'
import './AddPlatform.css'

export default function AddPlatform() {

    //Functions
    const HandleAddPlatform = () => {
        const Accounts = AccountListStore.get()

        AccountListStore.set(saveAccounts([...Accounts,
        { Platform: `New Platform ${Accounts.length + 1}`, Usage: 0, Accounts: [] }
        ]))

    }



    return (
        <span className="plus d-flex f-center br-max pointer" onClick={HandleAddPlatform}>
            <svg height="18px" viewBox="0 0 24 24" fill="none">
                <g>
                    <path d="M4 12H20M12 4V20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        </span>
    )
}