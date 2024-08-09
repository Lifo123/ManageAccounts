

export default function Input({ data }) {
    console.log(data);
    

    return (
        <input className='edit-in br-6 py-3 px-5' type="text" placeholder={data.Platform}/>
    )
}