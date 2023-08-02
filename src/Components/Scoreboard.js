import React, {useState} from 'react';

const Scoreboard =() => {
  const [score, setScore] = useState(0);
  
  const handleAddPoints = () => {
    setScore(score + 1);
  };

  const handleMinusPoints = () => {
    setScore(score - 1);
  };

  return (
    <div className='scoreboard'>
        <h3>Score: {score}</h3>
        <button onClick={handleAddPoints}>Add</button>
        <button onClick={handleMinusPoints}>Minus</button>
    </div>
  );
};

export default Scoreboard;