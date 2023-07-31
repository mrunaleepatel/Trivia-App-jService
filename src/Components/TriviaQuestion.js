import React, {useState} from 'react';
import Answer from './Answer';

const TriviaQuestion = () => {
  const [questionData, setQuestionData] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGetQuestion = async () => {
    try {
        const response = await fetch('http://jservice.io/api/random');
        setQuestionData(response.data[0]);
            setShowAnswer(false);
    } catch (error) {
        console.error('Error fetching question:', error);
      }
  };

  return (
    <div>
        <h2>Random Trivia Question</h2>
        <button onClick={handleGetQuestion}>Get Question</button>
        {questionData && (
            <div>
                <h3>Category: {questionData.category.title}</h3>
                <p>Question: {questionData.question}</p>
                <p>Points: {questionData.value}</p>
                <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                {showAnswer && <Answer answer={questionData.answer} />}
            </div>
        )}
    </div>
  )
}

export default TriviaQuestion