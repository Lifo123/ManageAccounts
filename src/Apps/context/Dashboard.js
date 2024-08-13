import { getLocal, parse } from "@utilities/json";
import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

export const PlatformStore = atom([]);
export const CurrentPlatformStore = atom([]);