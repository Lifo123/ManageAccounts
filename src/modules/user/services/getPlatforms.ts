import { $platformsStore } from "../stores/platforms.store";
import { $userUIStore } from "../stores/ui.store";
import { userDataValidation } from "../utils";


export const getPlatforms = async () => {
    const { state, user } = userDataValidation();
    if (!state) return;

    const res = await fetch('https://api-5lweajprsq-uc.a.run.app/acc/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
            uid: user.uid,
        })
    })

    const resVal = await res.json()
    if (!resVal.state) return;

    const dbRes = resVal.data

    $userUIStore.setKey('platforms', Object.keys(dbRes.platforms));
    $platformsStore.set({
        commons: {
            passwords: dbRes.commons.passwords.split('|'),
            emails: dbRes.commons.emails.split('|'),
            phones: dbRes.commons.phones.split('|'),
            usernames: dbRes.commons.usernames.split('|'),
        },
        platforms: dbRes.platforms
    });

}