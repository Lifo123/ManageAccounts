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

export const MaxIndex = (data) => {
    let max = 0;
    if(Array.isArray(data)){
        for (let i = 0; i < data.length; i++) {
            if (data[i].id > max) {
                max = data[i].id;
            }
        }
    }else{
        Object.keys(data).map(Platform => {
            const dataList = {Platform: Platform, ...data[Platform]}
            if (dataList.id > max) {
                max = dataList.id;
            }
        })

    }
    return max;
}