import React, { useEffect, useState } from 'react'
import './GreetingMessage.scss'

const GreetingMessage = () => {

    const [greeting, setGreeting] = useState('')
    const [refresh, setRefresh] = useState(true)
    const [buttonText, setButtonText] = useState('Greet me!')

    const refreshGreeting = () => {
        setRefresh ((refresh) => (!refresh ? true : false))
        setButtonText ((buttonText) => (buttonText === 'Greet me!' ? 'Thank you!!' : 'Greet me!'))
    }

    useEffect (() => {
        const getGreeting = () => {
            const currentHour = new Date().getHours();

            console.log(currentHour)

            if (currentHour >= 5 && currentHour < 12){
                setGreeting('Good Morning, Your Awesomeness!');
            } else if (currentHour >= 12 && currentHour < 18){
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