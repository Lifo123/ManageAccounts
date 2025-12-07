import { _LSuser } from "@Modules/auth/stores/auth.store";
import { $userUIStore } from "../stores/ui.store";
import { userDataValidation } from "../utils";


export const savePlatforms = async () => {
    const { state, data, user } = userDataValidation();
    if (!state) return;

    $userUIStore.setKey('isSaving', true);

    let formatedData = {
        commons: {
            passwords: data.commons.passwords.join('|'),
            emails: data.commons.emails.join('|'),
            phones: data.commons.phones.join('|'),
            usernames: data.commons.usernames.join('|'),
        },
        platforms: data.platforms
    }

    const res = await fetch('https://api-5lweajprsq-uc.a.run.app/acc/set', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
            uid: user.uid,
            data: formatedData
        })
    })

    const resVal = await res.json();

    $userUIStore.setKey('isSaving', false);

    if (!resVal.state) {
        console.log('Error saving platforms');

    }

}