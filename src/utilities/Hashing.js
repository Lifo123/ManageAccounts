import CryptoJS from 'crypto-js';
import SHA256 from 'crypto-js/sha256';

export const generateSalt = (length = 16) => {
    return CryptoJS.lib.WordArray.random(length).toString();
}

export const hashPass = (pass, salt) => {
    return SHA256(pass + salt).toString();
}


const xorWithSalt = (text, salt) => {
    return text.split('').map((char, i) => 
        String.fromCharCode(char.charCodeAt(0) ^ salt.charCodeAt(i % salt.length))
    ).join('');
}

export const encrypt = (text, username, salt, token) => {
    const xorText = xorWithSalt(text, salt);
    return {
        username: username,
        salt: salt,
        data: btoa(xorText),
        token: token,
    };
}

export const decrypt = (encodedText, username, salt, token) => {
    const decodedText = atob(encodedText);
    return {
        username: username,
        salt: salt,
        data: xorWithSalt(decodedText, salt),
        token: token,
    };
}