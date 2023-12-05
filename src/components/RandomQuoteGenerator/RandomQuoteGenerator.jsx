import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomQuoteGenerator = () => {

    const [quote, setQuote] = useState('')
    const [render, setRender] = useState(true)

    const handleJokeGenerator = () => {
        setRender((prevRender) => !prevRender)
    }

    useEffect(()=>{


        async function getDadJoke() {
            const {data} = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
            setQuote(data.joke);
        }
        
        if(render){
            getDadJoke()
            setRender((prevRender) => !prevRender)
        }

        
    }, [render])

  
  return (
    <div>
        <h1>Just Jokes</h1>
        <p>{quote}</p>
        <button onClick={handleJokeGenerator}>Another One!</button>
    </div>
  )
}

export default RandomQuoteGenerator