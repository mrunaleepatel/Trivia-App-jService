import TriviaQuestion from './Components/TriviaQuestion';
import Scoreboard from './Components/Scoreboard'

const App = () => {
  return (
    <div className="app-box">
      <div className="container">
        <TriviaQuestion />
        <Scoreboard />
      </div>
    </div>
  );
};



export default App;
