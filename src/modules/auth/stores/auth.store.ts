import { Local } from "@lifo123/library/utils";
import { deepMap } from "@nanostores/deepmap";

type AuthStore = {
    //States
    isAuthenticated: boolean
    user: {
        username: string;
        token: string;
    } | null
    status: 'idle' | 'loading' | 'success' | 'error' | 'logout'
}

export const _LSuser = Local('user');

const initialState: AuthStore = {
    isAuthenticated: false,
    user: null,
    status: 'idle'
}

export const $authStore = deepMap<AuthStore>(initialState)

export const checkSession = async () => {
    const currentStatus = $authStore.get().status;
    if (currentStatus === 'loading' || currentStatus === 'success') return;

    $authStore.setKey('status', 'loading');

    try {
        const token = _LSuser.getKey('token');
        if (!token) {
            throw new Error("No token found");
        }

        const res = await fetch('https://api-5lweajprsq-uc.a.run.app/auth/validate', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const resVal = await res.json();
        if (!resVal.state || resVal.status !== 'success') {
            throw new Error("Token invalid");
        }

        const resToken = resVal.data.token;

        _LSuser.setKey('token', resToken);
        $authStore.set({
            isAuthenticated: true,
            user: {
                username: resVal.data.uid,
                token: resToken
            },
            status: 'success'
        });

    } catch (error) {
        _LSuser.remove();
        $authStore.set({ ...initialState, status: 'error' });
    }
}
