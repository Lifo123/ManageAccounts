import { logEvent } from "firebase/analytics";
import { db1, analytics1 } from "./firebase"
import { ref, get, set } from "firebase/database";
import { hashPass } from "@Utilities/Hashing";


const createUser = async (userId: string, hashPass: string, salt: string) => {
    try {
        logEvent(analytics1, 'register', {
            method: 'username',
            userId: userId
        });
        const userRef = ref(db1, `users/${userId}`);
        const userSnapshot = await get(userRef);

        if (userSnapshot.exists()) {
            return 'exists';
        }

        const currentTime = new Date().getTime();
        const userAccsRef = ref(db1, `accounts/acc${userId}`)

        const userData = {
            name: userId,
            password: hashPass,
            salt: salt,
            createAt: currentTime,
        };

        const accsData = {
            user: userId,
            customPass: {
                default: hashPass
            },
            accounts: {
                acc1: {
                    username: userId
                }
            }
        }

        await Promise.all([
            set(userRef, userData),
            set(userAccsRef, accsData)
        ]);

        return 'created';

    } catch (e) {
        console.log(e);
        return 'error';
    }
}

const validateUser = async (userId: string, password: string) => {
    try {
        const userRef = ref(db1, `users/${userId}`)
        const userSnapshot = await get(userRef)

        if (!userSnapshot.exists()) {
            return {
                data: null,
                isLoged: false
            };
        }

        const userData = userSnapshot.val()

        if (userData.password !== hashPass(password, userData.salt)) {
            return {
                data: null,
                isLoged: 'Contraseña incorrecta'
            }
        }

        logEvent(analytics1, 'login', {
            method: 'username',
            userId: userId
        });

        return {
            data: { user: userId, salt: userData.salt },
            isLoged: true
        }

    } catch (e) {
        return e
    }
}


export {
    createUser,
    validateUser
}   