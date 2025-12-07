import { dialog } from "@lifo123/library"
import { Account } from "../types/general.types"
import { servicePlatform } from "../services";
import { $platformsStore } from "../stores/platforms.store";

type AccountItemProps = Account & {
    commons: {
        passwords: string[];
        emails: string[];
        phones: string[];
        usernames: string[];
    }
}

const isNumber = (value: any) => typeof value === 'number';

export default function AccountItem(props: AccountItemProps) {
    const {
        commons,

        email,
        password,
        username,
        phone
    } = props;


    const finalEmail = !isNumber(email) ? email : commons.emails[email];
    const finalPassword = !isNumber(password) ? password : commons.passwords[password];
    const finalPhone = !isNumber(phone) ? phone : commons.phones[phone];

    return (
        <div
            className="f-col gap-2 p-6 border border-gray-5 rounded-xl"
            onClick={() => {
               //Wasa
            }}
        >
            <h2>{props.username}</h2>
            <p>{finalEmail || '-'}</p>
            <p>{finalPassword}</p>
            <p>{finalPhone}</p>
        </div>
    )
}