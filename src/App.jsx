import './App.css'
import BasicForm from './components/BasicForm/BasicForm'
import GreetingMessage from './components/GreetingMessage/GreetingMessage'
import ListDisplay from './components/ListDisplay/ListDisplay'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import RandomQuoteGenerator from './components/RandomQuoteGenerator/RandomQuoteGenerator'
import SimpleCounter from './components/SimpleCounter/SimpleCounter'
import SimpleTimer from './components/SimpleTimer/SimpleTimer'
import StaticWeatherDisplay from './components/StaticWeatherDisplay/StaticWeatherDisplay'
import MyComponent from './components/Test/Test'
import ToDoList from './components/ToDoList/ToDoList'
import ToggleButton from './components/ToggleButton/ToggleButton'

function App() {
  // const [count, setCount] = useState(0)
  const T_D_I_M = 10*1000;
  const N_I_M = new Date().getTime();

  const dTATD = N_I_M + T_D_I_M;

  return (
    <>
        {/* <SimpleCounter/> */}
        {/* <ToggleButton /> */}
        {/* <GreetingMessage /> */}
        {/* <ListDisplay /> */}
        {/* <MyComponent /> */}
        {/* <BasicForm /> */}
        {/* <RandomQuoteGenerator /> */}
        {/* <ToDoList /> */}
        {/* <StaticWeatherDisplay /> */}
        {/* <PhotoGallery /> */}
        <SimpleTimer targetDate={dTATD} />
    </>
  )
}

export default App
