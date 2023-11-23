import { useEffect, useState, useRef } from "react";
import { poem_array } from "../../constants/constants";
import "./ListDisplay.scss";

const ListDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [rendering, setRendering] = useState(false);
  const [reset, setReset] = useState(false)

  const startRendering = () => {
    setRendering(true);
  };

  const toggleReset = () => {
    setRendering(false);
    setCurrentIndex(0);
    setReset(false)
  }

  useEffect(() => {
    if (rendering) {
      const container = containerRef.current;

      const intervalId = setInterval(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < poem_array.length) {
          setCurrentIndex(nextIndex);
          container.scrollTop = container.scrollHeight;
        } else {
          clearInterval(intervalId); // Stop the interval when we reach the last line
          setReset(true);
        }
      }, 1500); // Adjust the interval duration (in milliseconds) as needed

      console.log("done!")

      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
      
    }
  }, [currentIndex, rendering]);

  const renderLines = () => {
    return poem_array
      .slice(0, currentIndex + 1)
      .map((line, index) => <h1 key={index}>{line}</h1>);
  };

  return (
    <div>
      {!rendering && (
        <button
          className="button-render"
          onClick={startRendering}
          disabled={rendering}
        >
          Click me!
        </button>
      )}
      {rendering && (
        <div className="list-display-container" ref={containerRef}>
          {renderLines()}
        </div>
      )}

      {reset && (
        <button
            className="button-render"
            onClick={toggleReset}
        >
            Reset!!
        </button>
      ) 
      }
    </div>
  );
};

export default ListDisplay;
