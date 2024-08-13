import './EditCard.css'
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { UserStore } from 'src/context/GlobalStore';
import { CurrentPlatformStore, PlatformStore } from '@Apps/context/Dashboard';
import Back from '@Components/Back/Back';
import Input from '@Components/Input/Input';

export default function EditCard({ data, setIsEditing }) {
    //GlobalStates
    const User = useStore(UserStore);
    const CurrentPlatform = useStore(CurrentPlatformStore);
    const Platforms = useStore(PlatformStore);

    //States
    const [Msg, setMsg] = useState('');


    //Functions
    const HandleSaveAccount = () => {
        GetDataInputs();



        let AccountUpdated = {
            ...data, user: data.user, email: data.email.trim(), password: data.password.trim()
        }
        console.log(AccountUpdated);

    }

    const GetDataInputs = () => {
        let user = document.querySelector('[name="e-user"]').value;
        if (!user) {
            setMsg('Username is required');
        }
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
                    <Input text={data.email || 'email@gmail.com'} value={data.email} name={'e-email'} />
                </li>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Password:</p>
                    <div className='pass-grid d-grid g-2'>
                        <Input text={data.password || 'Custom Password is more secure'} value={data.password} name={'e-password'} />
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