import './EditCard.css'
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

    console.log(data)

    return (
        <section className="card-container f-col g-4 oy-auto h-80 relative px-4 mt-5">
            <div className='f-row f-justify-between f-align-center'>
                <Back funct={() => setIsEditing(null)} />
                <h4 className='fs-3 mr-3'>{data.user} {data.id}</h4>
            </div>
            <ul className='f-col g-4 f-justify-center'>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Username:</p>
                    <Input text={data.user} placeholder={data.user} value={data.user} />
                </li>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Email:</p>
                    <Input text={data.email} placeholder={data.email} value={data.email} />
                </li>
                <li className='f-col g-2'>
                    <p className='fw-800 m-0 px-1'>Password:</p>
                    <Input text={data.password} placeholder={data.password} value={data.password} />
                </li>
                <li className='f-row f-justify-between f-align-center'>
                    <p className='m-0 ml-3'>mensage del log</p>
                    <span className='btn-blue btn d-flex f-center br-6'>Save</span>
                </li>
            </ul>
        </section>
    )
}