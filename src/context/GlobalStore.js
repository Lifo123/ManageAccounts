import { atom } from "nanostores";

export const DarkModeStore = atom(true);
export const UserStore = atom([{ user: null, pass: null }]);