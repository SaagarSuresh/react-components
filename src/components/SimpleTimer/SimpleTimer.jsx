import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
  return(
      <div className="expired-notice">
          <span>Time's Up!!</span>
          <p>Please select a future date and time.</p>
      </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (

    <div className="show-counter">
      
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
   
    </div>

  );
};


const SimpleTimer = ({targetDate}) => {

  // const [targetDate, setTargetDate] = useState(new Date("Jan 5, 2024 11:28:00").getTime())
  // console.log(targetDate)

  // useEffect(()=>{
  //   const [days, hours, minutes, seconds] = useCountdown(targetDate);
  // }, targetDate)

  // const targetDate = new Date().getTime()+(5 * 1000);
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0){
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
            days = {days}
            hours = {hours}
            minutes = {minutes}
            seconds = {seconds}
            />
        );
    }
};

export default SimpleTimer;