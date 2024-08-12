export const parse = (data) => {
    return JSON.parse(data);
}

export const stringify = (data) => {
    return JSON.stringify(data);
}

export const getLocal = (key) => {
    return localStorage.getItem(key);
}

export const setLocal = (key, value) => {
    return localStorage.setItem(key, value);
}