import './Input.css'

export default function Input({ text = null, name = null, type = "text", autocomplete = null }) {
    return (
        <input className='input-def br-6 py-3 px-4 fs-1'
            type={type}
            name={name}
            placeholder={text || 'Empty Value'}
            autoComplete={autocomplete}
        />
    )
}