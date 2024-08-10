import { generateSalt, hashPass } from '@utilities/Hashing';

const getData = (username) => {
    return JSON.parse(localStorage.getItem('accsUser-' + username));
}

export const validateLogin = (username, pass) => {
    let userInfo = getData(username);

    let inHash = hashPass(pass + userInfo.salt);

    if (inHash === userInfo.password) {
        let token = generateToken();
        localStorage.setItem('accsToken', JSON.stringify({
            token: token, username: username
        }));
        localStorage.setItem('accsUser-' + username, JSON.stringify({
            ...userInfo, token: token
        }));
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
        username: username,
        salt: salt,
        password: hash,
        token: token,
        customPass: []
    }

    localStorage.setItem('accsUser-' + username, JSON.stringify(data));
    //Manage Token
    localStorage.setItem('accsToken', JSON.stringify({
        token: token, username: username
    }));

    window.location.replace('/ManageAccounts/Dashboard');

}

export const validateUser = (username) => {
    let data = getData(username);
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
