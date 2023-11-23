import React, { useEffect, useState } from 'react'
import './GreetingMessage.scss'

const GreetingMessage = () => {

    const [greeting, setGreeting] = useState('')
    const [refresh, setRefresh] = useState(false)
    const [buttonText, setButtonText] = useState('Thank you!')

    const refreshGreeting = () => {
        setRefresh ((refresh) => (!refresh ? true : false))
        setButtonText ((buttonText) => (buttonText === 'Thank you!' ? 'Greet me!!' : 'Thank you!'))
    }

    useEffect (() => {
        const getGreeting = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12){
                setGreeting('Good Morning, Your Awesomeness!');
            } else if (currentHour >= 12 && currentHour < 6){
                setGreeting('Good Afternoon, Your Awesomeness!');
            } else {
                setGreeting('Good Evening, Your Awesomeness!')
            }
        };

        getGreeting();
    }, [])
  return (
    <>
        { !refresh && 
        <div className='greeting-container'>{greeting}</div>}
        <button onClick={refreshGreeting}>{buttonText}</button>
    </>
    
  )
}

export default GreetingMessage