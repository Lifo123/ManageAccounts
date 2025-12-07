'use client'
import React from "react";
import { Button, Menu, MenuContent, MenuItem, Pressable } from "@lifo123/library";
import { $userUIStore } from "@Modules/user/stores/ui.store";
import { useStore } from "@nanostores/react";
import { auth } from "@Modules/auth/services";
import { useRouter } from "next/navigation";
import { PlatformList, Search } from "@Modules/user/components";
import { $platformsStore } from "@Modules/user/stores/platforms.store";
import { Icon } from "public-icons";
import AccountItem from "@Modules/user/components/AccountItem";

import '@Modules/user/styles/home.css';
import { servicePlatform } from "@Modules/user/services";

export default function PageUser() {
    const router = useRouter();
    const { selectedPlatform } = useStore($userUIStore, { deps: ['selectedPlatform'] })
    const { commons } = useStore($platformsStore, { deps: ['platforms'] })

    React.useEffect(() => {
        const initialCommons = $platformsStore.get().commons;
        if (initialCommons === null) {
            servicePlatform.get();
        };
    }, [])

    return (
        <main className="w-4xl rounded-md p-4 mx-auto mt-12">
            <section className="f-col gap-1">
                <div className="f-row justify-between">
                    <h1 className="fw-500 text-2xl">My accounts</h1>
                    <Menu >
                        <Button >
                            Setting
                        </Button>
                        <MenuContent >
                            <MenuItem onPress={() => {
                                auth.logOut();
                                router.replace('/auth');
                            }}>Log out</MenuItem>
                        </MenuContent>
                    </Menu>
                </div>
                <p className="fs-15 fw-400 text-gray-11">
                    Here you can see all your accounts by platform.
                </p>
            </section>

            <section className="f-col gap-7 mt-6">
                {
                    selectedPlatform ? (
                        <>
                            <div className="platform-breadcumb f-row items-center gap-1.5 text-p2 text-gray-11">
                                <Pressable onPress={() => {
                                    $userUIStore.setKey('selectedPlatform', undefined);
                                }}>
                                    <span className="pointer" role="button">Platforms</span>
                                </Pressable>
                                <Icon icon="arrow" size={18} rotate={90} svgProps={{ x: -.5, y: .5 }} />
                                <span
                                    className="active pointer"
                                >
                                    {selectedPlatform}
                                </span>
                            </div>
                            <div className="f-row f-wrap gap-8">
                                {
                                    $platformsStore.get().platforms[selectedPlatform]?.map((item, i) => (
                                        <AccountItem key={i} {...item} commons={commons} />
                                    ))
                                }
                            </div>
                        </>
                    ) : <>
                        <Search />
                        <PlatformList />
                    </>
                }
            </section>
        </main>
    );
}
