import CryptoJS from 'crypto-js';
import SHA256 from 'crypto-js/sha256';

export const generateSalt = (length = 16) => {
    return CryptoJS.lib.WordArray.random(length).toString();
}

export const hashPass = (pass, salt) => {
    return SHA256(pass + salt).toString();
}