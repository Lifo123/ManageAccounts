import { getLocal, parse } from "@utilities/json";
import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

export const AccountListStore = atom(isBrowser ? parse(getLocal('accsToken')) : null);


export const CurrentPlatformStore = atom([]);