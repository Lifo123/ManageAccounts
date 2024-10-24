import './Loading.css'

interface LoadingProps {
    className?: string;
    styleParent?: React.CSSProperties;
    styleLine?: React.CSSProperties

}

export default function Loading({
    className = '',
    styleLine = {},
    styleParent = {}
}: LoadingProps) {
    return (
        <span className='load-bg d-flex f-center relative w-100 br-10'>
            <span className={`load-circle d-flex f-center relative ${className}`} style={styleParent}>
                <svg className='d-flex relative'>
                    <circle className='absolute' cx="70" cy="70" r="70" style={styleLine}></circle>
                </svg>
            </span>
        </span>
    )
}