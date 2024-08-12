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

export const MaxIndex = (Array) => {
    let max = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].id > max) {
            max = Array[i].id;
        }
    }
    return max;
}