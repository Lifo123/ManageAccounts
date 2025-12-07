import { $authStore, _LSuser } from "../stores/auth.store";
import { AuthData } from "../types/general.types";

export const login = async (data: AuthData) => {
    const { uid = '', password = '' } = data;
    const body = JSON.stringify({ uid, password });

    const res = await fetch('https://api-5lweajprsq-uc.a.run.app/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
    });

    const resVal = await res.json();

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
}

export const logOut = () => {
    _LSuser.remove();
    $authStore.set({
        isAuthenticated: false,
        user: {
            username: '',
            token: null as any
        },
        status: 'logout'
    });
}
