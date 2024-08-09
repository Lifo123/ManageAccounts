export const MaxIndex = (Array) => {
    let max = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].id > max) {
            max = Array[i].id;
        }
    }
    return max;
}