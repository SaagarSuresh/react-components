import { useState, useEffect } from "react";

const useCountdown = (targetDate) => {
    // console.log(targetDate)
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(()=>{
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000);
        console.log("countDown-useEffect")
        return () => clearInterval(interval);

    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    console.log(countDown)
    const days = Math.floor(countDown/(1000*60*60*24));
    const hours = Math.floor((countDown % (1000*60*60*24))/ (1000*60*60))
    const minutes = Math.floor((countDown % (1000*60*60))/(1000*60))
    const seconds = Math.floor((countDown % (1000*60))/ (1000))

    return [days, hours, minutes, seconds];
};

export { useCountdown };

