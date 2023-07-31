import './App.css';
import TriviaQuestion from './Components/TriviaQuestion';
import Scoreboard from './Components/Scoreboard'

const App = () => {
  return (
    <div className="app">
      <Scoreboard />
      <TriviaQuestion />  
    </div>
  )
}



export default App;
