import { UserStore } from "@Context/GlobalStore";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

export default function User() {
    //State
    const [user, setUser] = useState<boolean>(false);

    //UserStore
    const userData = useStore(UserStore);

    const handleLogout = () => {
        localStorage.removeItem('F-User');
        window.location.reload()
    }

    useEffect(() => {
        if (userData?.user) {
            setUser(true);
        }
    }, [])

    return (
        <div className="f-row g-2 f-center">
            {
                user ? (
                    <>
                        <h3 className="fw-500">
                            {userData.user}
                        </h3>
                        <span className="btn btn-red br-6 fs-1" onClick={handleLogout}>Log out</span>
                    </>
                ) : (
                    <>
                        <span className="btn btn-blue br-6 fs-1" onClick={() => { window.location.href = '/Games/Login' }}>Login</span>
                        <span className="btn btn-br br-6 fs-1" onClick={() => { window.location.href = '/Games/Register' }}>Register</span>
                    </>
                )
            }
        </div>
    )
}