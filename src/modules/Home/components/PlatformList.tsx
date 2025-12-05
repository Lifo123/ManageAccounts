'use client'

import React from "react";
import { useEnterAnimation, useExitAnimation } from "@lifo123/library/utils"
import { useStore } from "@nanostores/react";
import { $HomeUIStore, HomeUIStore } from "../stores/home.ui.store";
import { Icon } from "public-icons";

export default function PlatformList(props: any) {
    const HOMEUI = useStore($HomeUIStore)

    const ref = React.useRef<HTMLDivElement>(null);
    const isExiting = useExitAnimation(ref, HOMEUI.hasText)

    if (!HOMEUI.hasText && !isExiting) {
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

const PlatformListInner = React.forwardRef<HTMLDivElement, HomeUIStore & { isExiting: boolean }>(
    (props, ref: any) => {
        const {
            isExiting,
            hasText,
            platforms,
            value,

        } = props

        const isEntering = useEnterAnimation(ref as React.RefObject<HTMLDivElement>) || false;

        return (
            <div
                className="list-container f-col gap-3"
                ref={ref}
                data-entering={isEntering || undefined}
                data-exiting={isExiting || undefined}
            >

                {
                    Array.from({ length: 7 }).map((_, i) => (
                        <div key={i}
                            className="list-item gap-3 f-center border border-gray-5 rounded-lg px-4 py-4 pointer"
                        >
                            <Icon icon="instagram" size={20} />
                            <div className="f-row gap-4 justify-between items-center w-full">
                                <h2 className="text-p fw-400">Instagram</h2>
                                <span className="text-p2 text-gray-11">{2 + i} accounts</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
)