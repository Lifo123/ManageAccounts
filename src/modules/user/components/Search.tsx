'use client'
import React from "react";
import { Icon } from "public-icons";
import { PressableIcon } from '@lifo123/library'

import { useStore } from "@nanostores/react";
import { $userUIStore } from "../stores/ui.store";

export default function Search() {
    const {
        hasText,
        visualValue
    } = useStore($userUIStore, { deps: ['hasText', 'visualValue'] })

    const inputRef = React.useRef<HTMLInputElement>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value
        $userUIStore.updateKey('', {
            value: currentValue,
            visualValue: currentValue,
            hasText: currentValue.length > 0,
            isOpen: true,
            selectedPlatform: null as any
        })
    }

    return (
        <div className="f-row relative w-max">
            <input
                ref={inputRef}
                type="text"
                className="pl-10 py-3 text-p2 rounded-lg border border-gray-6 min-w-sm"
                placeholder="Search..."
                value={visualValue}
                onChange={handleChange}
            />
            <span
                className={`flex f-center absolute top-1/2 left-3 -translate-y-1/2 ${hasText ? 'text-gray-12' : 'text-gray-11'}`}
            >
                <Icon icon="search" size={18} svgProps={{ y: 1 }} color="var(--color-gray-11)" strokeWidth={2.25} />
            </span>

            {hasText && <PressableIcon
                className='h-7 aspect-square rounded-md btn-ghost flex f-center pointer absolute'
                icon="close"
                size={18}
                onPress={async () => {
                    $userUIStore.updateKey('', {
                        isOpen: false,
                        visualValue: '',
                    });

                    inputRef.current?.focus();

                    setTimeout(() => {
                        $userUIStore.updateKey('', {
                            value: '',
                            hasText: false,
                            selectedPlatform: null as any
                        });
                    }, 150);
                }}
                style={{
                    top: '50%', right: '9px', transform: 'translateY(-50%)'
                }}
            />
            }
        </div >
    )
}