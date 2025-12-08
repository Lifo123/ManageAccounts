"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@nanostores/react";
import { $authStore, _LSuser, checkSession } from "../stores/auth.store";
import { useParams } from 'next/navigation';
import LoadingCircle from "@Shared/components/loadingCircle";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const params = useParams();

    const {
        status,
        isAuthenticated,
        user
    } = useStore($authStore);

    React.useEffect(() => {
        checkSession();
    }, []);

    React.useEffect(() => {
        if (status === 'loading' || status === 'idle') return;

        if (status === 'error' || (status === 'success' && !isAuthenticated)) {
            router.replace('/auth');
            _LSuser.remove();
            return
        }

        if (params?.user) {
            const paramUser = String(params.user);

            if (user?.username && paramUser !== user.username) {
                router.replace(`/${user.username}`);
            }
        }
    }, [status, isAuthenticated, user, params, router]);

    if (status === 'loading' || status === 'idle') {
        return <LoadingCircle />;
    }

    if (!isAuthenticated) return null;

    return <>{children}</>;
}