import { deepMap } from "@nanostores/deepmap";
import { Account } from "../types/general.types";

export type UserDataApp = {
    commons: {
        passwords: string[];
        emails: string[];
        phones: string[];
        usernames: string[];
    }
    platforms: Record<string, Account[]>
}

export const $platformsStore = deepMap<UserDataApp>({
    commons: null as any,
    platforms: {}
})