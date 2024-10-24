import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

export const userInitial = {
    token: null,
    user: null,
}

export const ConfigStore = atom(isBrowser ? JSON.parse(localStorage.getItem('F-Config') || '{}') : {});
export const UserStore = atom(isBrowser ? JSON.parse(localStorage.getItem('F-User') || '{}') : null);
