import { useRef, useState } from "react";


export default function useTimer(initial = 16, speed = 30) {
    const [time, setTime] = useState(initial);
    const IntervalRef = useRef(null);

    const CountDown = (FunctionToExecute) => {
        return new Promise((resolve) => {
            setTime(initial);
            clearInterval(IntervalRef.current);

            IntervalRef.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(IntervalRef.current);
                        resolve(FunctionToExecute());
                        return 0;
                    } else {
                        return prevTime - 1;
                    }
                });
            }, speed);
        });
    };

    return { CountDown }


}

