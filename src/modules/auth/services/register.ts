import { $authStore, _LSuser } from "../stores/auth.store";
import { AuthData } from "../types/general.types";

export const register = async (data: AuthData) => {
    const { uid = '', password = '' } = data;
    const body = JSON.stringify({ uid, password });

    const res = await fetch('https://api-5lweajprsq-uc.a.run.app/auth/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
    });

    const resVal = await res.json();

    if (resVal.state && resVal.status === 'success') {
        $authStore.updateKey('', {
            isAuthenticated: true,
            user: {
                username: uid,
                token: resVal.data
            },
            status: resVal.status
        });

        _LSuser.updateKey('', {
            uid: resVal.data.uid,
            token: resVal.data.token
        });
    } else {
        if (!res.ok) {
            alert(`Error: ${resVal.message}`);
        }
    }
}