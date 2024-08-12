import { decrypt, encrypt, generateSalt, hashPass } from '@utilities/Hashing';
import { parse, stringify } from '@utilities/json';

export const getUserData = (username) => {
    return JSON.parse(localStorage.getItem('accsUser-' + username));
}

export const validateLogin = (username, pass) => {
    let UserToLogin = JSON.parse(localStorage.getItem('accsUser-' + username));

    let data = decrypt(getUserData(username).data, username, UserToLogin.salt, UserToLogin.token);
    let userInfo = JSON.parse(data.data);
    let inHash = hashPass(pass + UserToLogin.salt);
    

    if (inHash === userInfo.password) {
        //Manage Token
        let token = generateToken();
        
        localStorage.setItem('accsToken', JSON.stringify({
            username: UserToLogin.username, token: token, salt: UserToLogin.salt
        }));

        //Encrypt data
        let encryptedData = encrypt(JSON.stringify(userInfo), UserToLogin.username, UserToLogin.salt, token); 
        localStorage.setItem('accsUser-' + username, stringify(encryptedData));
        window.location.replace('/ManageAccounts/Dashboard');
        return;
    }

    return 'Login failed';

}

export const registerUser = (username, pass) => {
    let token = generateToken();

    let salt = generateSalt(pass.length);
    let hash = hashPass(pass + salt);

    let data = {
        password: hash,
        customPass: [],
        Accounts: []
    }
    //Encrypt data
    let encryptedData = encrypt(JSON.stringify(data), username, salt, token);

    //Manage Storage
    localStorage.setItem('accsUser-' + username, JSON.stringify(encryptedData));
    localStorage.setItem('accsToken', JSON.stringify({
        username: username, token: token, salt: salt
    }));

    window.location.replace('/ManageAccounts/Dashboard');

}

export const validateUser = (username) => {
    let data = getUserData(username);
    if (data) {
        return true;
    } else {
        return false;
    }

}

export const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const LogoutUser = () => {
    localStorage.removeItem('accsToken');
    window.location.replace('/ManageAccounts/Login');
}
