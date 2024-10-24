import { createUser, validateUser } from "@Services/logregService";
import { generateSalt, hashPass, } from "@Utilities/Hashing";
import { Local } from "@Utilities/Local";
import { useEffect } from "react";
import { toast } from "sonner";

interface LogRegBTNProps {
    mode: 'login' | 'register';
}

export default function LogRegBTN({ mode }: LogRegBTNProps) {

    //Functions
    const handleLogin = async () => {
        const Data = getInputs();

        if (Data[0].value === '' || Data[1].value === '') {
            toast.error('Please fill all the fields');
            return;
        }

        const isLogin: any = await validateUser(Data[0].value, Data[1].value);

        if (isLogin.isLoged === true) {
            Local.set('F-User', { user: Data[0].value, salt: isLogin.data.salt })
            document.referrer ? window.location.href = document.referrer : window.location.href = '/ManageAccounts/';
        } else if (isLogin.isLoged === 'Contraseña incorrecta') {
            toast.error('Contraseña incorrecta');
        } else {
            toast.error('User not registered');
        }

    }

    const handleRegister = async () => {
        const Data = getInputs();

        if (Data[0].value === '' || Data[1].value === '' || Data[2].value === '') {
            toast.error('Please fill all the fields');
            return;
        }

        if (Data[1].value !== Data[2].value) {
            toast.error('Passwords do not match');
            return;
        }

        toast.dismiss()

        const salt = generateSalt()
        const hashed = hashPass(Data[1].value, salt)
        const isCreated: any = await createUser(Data[0].value, hashed, salt)

        if (isCreated === 'created') {
            Local.set('F-User', { user: Data[0].value, salt: salt })
            document.referrer ? window.location.href = document.referrer : window.location.href = '/ManageAccounts/';
        } else if (isCreated === 'exists') {
            toast.error('User exists')
        } else {
            toast.error('Error creating user')
        }

    }

    const getInputs = () => {
        const username = document.querySelector('[name="username"]') as HTMLInputElement;
        const password = document.querySelector('[name="password"]') as HTMLInputElement;
        const password1 = document.querySelector('[name="password1"]') as HTMLInputElement;
        const remember = document.querySelector('[name="remember"]') as HTMLInputElement;

        return [username, password, password1, remember];
    }

    //Effects
    useEffect(() => {
        let Data = getInputs();
        Data.forEach(input => {
            input?.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    mode === 'login' ? handleLogin() : handleRegister();
                }
            })
        })

    }, [])

    return (
        <span className="logreg-btn d-flex br-6 pointer mt-3 mb-1 fw-600 f-justify-center" onClick={mode === 'login' ? handleLogin : handleRegister}>
            {mode === 'login' ? 'Sign In' : 'Sing Up'}
        </span>
    )
}