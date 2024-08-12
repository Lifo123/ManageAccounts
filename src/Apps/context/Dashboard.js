import { getLocal, parse } from "@utilities/json";
import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

export const AccountListStore = atom([]);


export const CurrentPlatformStore = atom([]);