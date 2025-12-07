'use client'
import React from "react";
import { $authStore, checkSession } from "@Modules/auth/stores/auth.store";
import { AuthData } from "@Modules/auth/types/general.types";
import { useStore } from "@nanostores/react";
import { auth } from "@Modules/auth/services";
import { useRouter } from "next/navigation";
import LoadingCircle from "@Shared/components/loadingCircle";
import { Button } from "@lifo123/library";
import "@Modules/auth/styles/auth.css";

export default function PageAuth(props: any) {
    const router = useRouter();
    const [isLogin, setIsLogin] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    const { isAuthenticated, user, status } = useStore($authStore);

    React.useEffect(() => {
        checkSession();
    }, []);

    React.useEffect(() => {
        if (isAuthenticated && user?.username) {
            router.replace(`/${user.username}`);
        }
    }, [isAuthenticated, user, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data: AuthData = {
            uid: formData.get('username') as string,
            password: formData.get('password') as string,
            repeatPassword: formData.get('repeatPassword') as string
        };

        try {
            if (isLogin) {
                await auth.login(data);
            } else {
                if (data.password !== data.repeatPassword) {
                    alert('Passwords do not match');
                    setIsLoading(false);
                    return;
                }

                await auth.register(data);
            }
        } catch (error: any) {
            console.error("Auth error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (status === 'loading' || (isAuthenticated && !user)) {
        return <LoadingCircle />;
    }

    return (
        <main className="f-row w-full h-screen f-center">
            <form
                className="f-col py-6 px-7 border border-gray-4 rounded-xl mb-8 max-w-sm w-full"
                onSubmit={handleSubmit}
            >
                <h1 className="fw-500 text-xl">{isLogin ? 'Sign in' : 'Sign up'}</h1>
                <p className="text-p2 text-gray-11">Lorem ipsum dolor sit, a elit.</p>

                <div className="f-col gap-4 mt-4 text-p2">
                    <label className="flex">
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder="Username"
                            className="px-4 py-2.5 border border-gray-5 rounded-lg w-full"
                        />
                    </label>
                    <div className="f-col">
                        <label className="flex">
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Password"
                                className="px-4 py-2.5 border border-gray-5 rounded-lg w-full"
                            />
                        </label>

                        {isLogin ? (
                            <a href="/forgot-password" className="fs-13 text-gray-10 pointer w-max mt-2 hover:underline">
                                Forgot your password?
                            </a>
                        ) : (
                            <label className="flex mt-4">
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    required
                                    placeholder="Repeat password"
                                    className="px-4 py-2.5 border border-gray-5 rounded-lg w-full"
                                />
                            </label>
                        )}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="mt-4 pointer btn-primary rounded-lg fw-475 fs-15 py-2"

                >
                    {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
                </Button>

                <p className="fs-13 text-gray-10 mt-2 f-row gap-1">
                    {isLogin ? 'Already have an account?' : 'Don\'t have an account?'}
                    <span
                        className="text-blue-500 underline pointer"
                        onClick={() => {
                            setIsLogin(!isLogin);
                        }}
                    >
                        Sign {isLogin ? 'up' : 'in'}
                    </span>
                </p>
            </form>
        </main>
    );

}