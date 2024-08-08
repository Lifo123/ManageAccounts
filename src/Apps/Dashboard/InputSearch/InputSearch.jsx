import './InputSearch.css'

export default function InputSearch() {
    return (
        <div className="f-row f-center w-100 relative">
            <input className="input-fill br-6 w-100" type="text" placeholder="Search..." />
            <span className="search-icon d-flex f-center absolute no-select">
                <svg viewBox="0 0 24 24" fill="none">
                    <g>
                        <path d="M15 15L21 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeWidth="1.5"></path>
                    </g>
                </svg>
            </span>
        </div>
    )
}