import './EditCard.css'
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { UserStore } from 'src/context/GlobalStore';
import { CurrentPlatformStore, PlatformStore } from '@Apps/context/Dashboard';
import Back from '@Components/Back/Back';
import Input from '@Components/Input/Input';
import { saveAccounts } from '@services/manageData';

export default function EditCard({ data, setIsEditing }) {
    //GlobalStates
    const User = useStore(UserStore);
    const CurrentPlatform = useStore(CurrentPlatformStore);
    const Platforms = useStore(PlatformStore);

    //States
    const [Msg, setMsg] = useState('');


    //Functions
    const HandleSaveAccount = () => {
        let newData = GetDataInputs();
        let AccountUpdated = {
            ...data, 
            user: newData.user || data.user, 
            email: newData.email.trim() || data.email, 
            password: newData.password.trim() || data.password
        };
        let AccountsUpdated = CurrentPlatform.Accounts.map(account =>
            account.id === data.id ? AccountUpdated : account
        );

        let PlatformUpdated = { ...CurrentPlatform, Accounts: AccountsUpdated };
        let PlatformsUpdated = Platforms.map(platform =>
            platform.id === CurrentPlatform.id ? PlatformUpdated : platform
        );

        saveAccounts(PlatformsUpdated, User.username);
        PlatformStore.set(PlatformsUpdated);
        CurrentPlatformStore.set(PlatformsUpdated[0]);


    }

    const GetDataInputs = () => {
        let user = document.querySelector('[name="e-user"]').value;
        let email = document.querySelector('[name="email"]').value
        let password = document.querySelector('[name="password"]').value;

        return { user, email, password }


    }


    return (
        <section className="card-container f-col g-4 oy-auto h-80 relative px-4 mt-5">
            <div className='f-row f-justify-between f-align-center'>
                <Back funct={() => setIsEditing(null)} />
                <h4 className='fs-3 mr-3'>{data.user} {data.id}</h4>
            </div>
            <ul className='f-col g-4 f-justify-center'>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Username:</p>
                    <Input text={data.user || ''} value={data.user} name={'e-user'} />
                </li>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Email:</p>
                    <Input text={data.email || 'email@gmail.com'} value={data.email} name={'email'} type='email' />
                </li>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Password:</p>
                    <div className='pass-grid d-grid g-2'>
                        <Input text={data.password || 'Password'} value={data.password} name={'password'} />
                        <span className='d-flex f-center pointer'>V</span>
                    </div>
                </li>
                <li className='f-row f-justify-between f-align-center'>
                    <p className='m-0 ml-3 text-orange'>{Msg}</p>
                    <span className='btn-blue btn d-flex f-center br-6' onClick={HandleSaveAccount}>Save</span>
                </li>
            </ul>
        </section>
    )
}