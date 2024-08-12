import { decrypt, encrypt, generateSalt, hashPass } from '@utilities/Hashing';
import { getLocal, parse, stringify } from '@utilities/json';

export const getUserData = (username) => {
    return parse(getLocal('accsUser-' + username));
}

export const validateLogin = (username, pass) => {
    let UserToLogin = parse(getLocal('accsUser-' + username));
    let UserData = parse(decrypt(UserToLogin.data, UserToLogin.salt));

    let inHash = hashPass(pass + UserToLogin.salt);

    if (inHash === UserData.password) {
        console.log('wasa');
        
        //Manage Token
        let token = generateToken();

        localStorage.setItem('accsToken', stringify({
            username: UserToLogin.username, token: token, salt: UserToLogin.salt
        }));

        //Encrypt data
        localStorage.setItem('accsUser-' + username, stringify({
            ...UserToLogin, token: token
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
        password: hash,
        customPass: [],
        Accounts: {
            "Platform": {
                id: 1,
                Usage: 0,
                Accounts: []
            }
        }
    }
    //Encrypt data
    let encryptedData = encrypt(JSON.stringify(data), salt);

    //Manage Storage
    localStorage.setItem('accsUser-' + username, JSON.stringify({
        data: encryptedData, username: username, token: token, salt: salt
    }));
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
