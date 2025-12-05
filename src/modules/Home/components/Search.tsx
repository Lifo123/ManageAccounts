'use client'
import React from "react";
import { Icon } from "public-icons";
import { PressableIcon } from '@lifo123/library'

import { useStore } from "@nanostores/react";
import { $HomeUIStore } from "../stores/home.ui.store";

export default function Search(props: any) {
    const {
        isSearching,
        hasText,
        value
    } = useStore($HomeUIStore)

    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    return (
        <div className="mt-8 f-row relative w-max">
            <input
                type="text"
                className="pl-10 py-3 text-p2 rounded-lg border border-gray-6 min-w-sm"
                placeholder="Search..."
                value={value}
                onChange={(e) => {
                    const currentValue = e.target.value
                    $HomeUIStore.updateKey('', {
                        value: currentValue,
                        hasText: currentValue.length > 0
                    })

                    if (timerRef.current) clearTimeout(timerRef.current);
                    
                    timerRef.current = setTimeout(() => {
                        // --- AQUÍ SE EJECUTA LA LLAMADA FINAL ---
                        console.log("Usuario dejó de escribir. Buscando:", currentValue);

                        // Ejemplo: Activar loading o llamar API
                        $HomeUIStore.setKey('isSearching', true);
                        // fetchResults(currentValue)...

                    }, 300);
                }}
            />
            <span
                className={`flex f-center absolute top-1/2 left-3 -translate-y-1/2 ${hasText ? 'text-gray-12' : 'text-gray-11'}`}
            >
                <Icon icon="search" size={18} svgProps={{ y: 1 }} color="var(--color-gray-11)" strokeWidth={2.25}/>
            </span>
            {
                hasText && <PressableIcon
                    className='h-7 aspect-square rounded-md btn-ghost flex f-center pointer absolute'
                    icon="close"
                    size={18}
                    onPress={() => {
                        $HomeUIStore.updateKey('', {
                            value: '',
                            hasText: false,
                        })
                    }}
                    style={{
                        top: '50%', right: '9px', transform: 'translateY(-50%)'
                    }}
                />
            }
        </div >
    )
}