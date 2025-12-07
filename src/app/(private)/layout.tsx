import type { Metadata } from "next";
import AuthGuard from "@Modules/auth/components/AuthGuard";
import { Dialoger } from "@lifo123/library";

export const metadata: Metadata = {
    description: 'description for template',
};

export default function PrivateLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard >
            <>
                <Dialoger />
                {/* laoyout */}
                <main>
                    {children}
                </main>
            </>
        </AuthGuard>
    );
}