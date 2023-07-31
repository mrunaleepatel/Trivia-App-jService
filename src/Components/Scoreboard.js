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
    <div>
        <h2>Score: {score}</h2>
        <button onClick={handleAddPoints}>Add</button>
        <button onClick={handleMinusPoints}>Minus</button>
    </div>
  );
};

export default Scoreboard;