import { getLocal, parse } from "@utilities/json";
import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";


export const DarkModeStore = atom(true);
export const UserStore = atom(isBrowser ? parse(getLocal('accsToken')) : null);
