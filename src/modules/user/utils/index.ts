import { auth } from "@Modules/auth/services";
import { $platformsStore, UserDataApp } from "../stores/platforms.store";
import { _LSuser } from "@Modules/auth/stores/auth.store";

export const userDataValidation = (): {
    state: boolean,
    data: UserDataApp,
    user: {
        uid: string,
        token: string
    }
} => {
    let returnVal = {
        state: false,
        data: {} as any,
        user: {} as any
    };
    if (typeof window === 'undefined') return returnVal;

    const user = _LSuser.get();
    if (!user.token) {
        alert('No token found');
        auth.logOut();
        return returnVal;
    };

    const data = $platformsStore.get();

    return returnVal = {
        state: true,
        data,
        user
    }
}