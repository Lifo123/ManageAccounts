import './EditCard.css'
import { useStore } from '@nanostores/react';
import { UserStore } from 'src/context/GlobalStore';
import { CurrentPlatformStore, PlatformStore } from '@Apps/context/Dashboard';
import Back from '@Components/Back/Back';

export default function EditCard({ data, setIsEditing }) {
    //GlobalStates
    const User = useStore(UserStore);
    const CurrentPlatform = useStore(CurrentPlatformStore);
    const Platforms = useStore(PlatformStore);

    return (
        <section className="card-container f-col g-6 oy-auto h-80 relative px-4">
            <div className='f-row f-justify-between f-align-center'>
                <Back funct={() => setIsEditing(null)} />
                <h4 className='fs-2'>{data.user} {data.id}</h4>
            </div>
            EditCard
        </section>
    )
}