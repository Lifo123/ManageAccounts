'use client'
import React from "react";
import { useEnterAnimation, useExitAnimation } from "@lifo123/library/utils"
import { ListBox, ListBoxItem, Skeleton } from "@lifo123/library";
import { useStore } from "@nanostores/react";
import { $userUIStore, UserUIStore } from "../stores/ui.store";
import { useFilter } from "react-aria";
import { $platformsStore } from "../stores/platforms.store";
import SocialIcons from "@Shared/components/SocialIcons";

export default function PlatformList(props: any) {
    const HOMEUI = useStore($userUIStore, { deps: ['isOpen'] })

    const ref = React.useRef<HTMLDivElement>(null);
    const isExiting = useExitAnimation(ref, HOMEUI.isOpen)

    if (!HOMEUI.isOpen && !isExiting) {
        return null;
    }

    return (
        <PlatformListInner
            ref={ref}
            isExiting={isExiting}
            {...HOMEUI}
        />
    )
}

const PlatformListInner = React.forwardRef<HTMLDivElement, UserUIStore & { isExiting: boolean }>(
    (props, ref: any) => {
        const {
            isExiting,
            platforms = [],
            value,
        } = props

        const DATA = useStore($platformsStore)
        const isEntering = useEnterAnimation(ref as React.RefObject<HTMLDivElement>) || false;

        let { contains } = useFilter({
            sensitivity: 'base'
        });

        let matchedComposers = (platforms || []).filter((plat) =>
            contains(plat, value)
        );

        const isLoading = platforms.length === 0;

        return (
            <div
                className="list-anim f-col gap-3"
                ref={ref}
                data-entering={isEntering || undefined}
                data-exiting={isExiting || undefined}
            >
                {!isLoading ? (
                    <ListBox
                        aria-label="list of accounts"
                        className='list-container f-col gap-3'
                        selectionMode="single"
                    >
                        {
                            matchedComposers.slice(0, 7).map((item, i) => (
                                <ListBoxItem
                                    key={item + i}
                                    textValue={item}
                                    className="list-item gap-4 f-center border border-gray-5 rounded-lg px-6 py-4 pointer"
                                    onPress={() => {
                                        $userUIStore.updateKey('selectedPlatform', item);
                                    }}
                                >
                                    <SocialIcons icon={item.toLowerCase() as any} size={24} />

                                    <div className="f-row gap-4 justify-between items-center w-full">
                                        <h2 className="text-p fw-400 capitalize">{item}</h2>
                                        <span className="text-p2 text-gray-11">{DATA.platforms[item]?.length} accounts</span>
                                    </div>
                                </ListBoxItem>
                            ))
                        }
                    </ListBox>
                ) : (
                    Array.from({ length: 3 }).map((_, i) => (
                        <Skeleton key={i} style={{ height: 64, borderRadius: 12 }} />
                    ))
                )
                }

                {
                    !isLoading && matchedComposers.length === 0 && (
                        <div className="p-2 text-center text-gray-11 text-p2">No results found</div>
                    )
                }

            </div >
        )
    }
)