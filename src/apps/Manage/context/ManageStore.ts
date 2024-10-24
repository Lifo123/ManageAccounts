import { atom } from "nanostores";

const isBrowser = typeof window !== "undefined";

export const AllDataStore = atom({})
export const AccountsStore: any = atom([])
export const PlatformsStore: any = atom([])
export const NavigationStore = atom(isBrowser ? JSON.parse(localStorage.getItem('F-ManageAccounts') || '{}') : { currentSocial: '' });