import './AccountCard.css'
import pkg from 'react-copy-to-clipboard';
const { CopyToClipboard } = pkg;

export default function AccountCard({ data, setIsEditing }) {


    return (
        <div className='card-div w-90 f-col g-2 mx-auto br-10 ' data-id={data.id}>
            <span className='f-row f-justify-between f-align-end pl-1 pr-2'>
                <h3 className='m-0'>{data.user || 'Username'}</h3>
                <p className={`m-0 fs-1 pointer text-blue`} onClick={() => setIsEditing(data)}>
                    Edit
                </p>
            </span>
            <div className={`card-account f-col br-10`}>
                <p className='m-0'>
                    <strong>Email: </strong>
                    <CopyToClipboard text={data.email}>
                        <span className='copy-text'>{data.email || 'email@gmail.com'}</span>
                    </CopyToClipboard>
                </p>
                <p className='m-0'>
                    <strong>Password: </strong>
                    <CopyToClipboard text={data.password}>
                        <span className='copy-text'>{data.password || 'Please use a custom password'}</span>
                    </CopyToClipboard>
                </p>
            </div>
        </div>
    )
}