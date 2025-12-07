import { deepMap } from "@nanostores/deepmap";

export type UserUIStore = {
    isOpen: boolean;
    isSearching: boolean;
    hasText: boolean;
    value: string;
    visualValue: string;
    platforms?: Array<string>;

    selectedPlatform?: string;
    isSaving?: boolean;
}

const initialState: UserUIStore = {
    isOpen: false,
    isSearching: false,
    hasText: false,
    value: '',
    visualValue: '',
    platforms: []
}

export const $userUIStore = deepMap<UserUIStore>(initialState)