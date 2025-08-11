import './App.css'
import {Greetings} from './components/Greetings'

function App() {
  return(
    <div className="App">
      <Greetings name = 'Awele'/>
      <Greetings notif = 'welp'/>
    </div>
  )
}


export default App
