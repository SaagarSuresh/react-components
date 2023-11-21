import './App.css'
import SimpleCounter from './components/SimpleCounter/SimpleCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SimpleCounter/>
    </>
  )
}

export default App
