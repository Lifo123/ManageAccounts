import { deepMap } from "@nanostores/deepmap";
import { Account } from "../types/general.types";

export type HomeUIStore = {
    isSearching: boolean
    hasText: boolean
    value: string
    platforms?: Record<string, Account[]>
}

const initialState: HomeUIStore = {
    isSearching: false,
    hasText: false,
    value: '',
    platforms: {}
}

export const $HomeUIStore = deepMap(initialState)