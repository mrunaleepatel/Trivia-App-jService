import React, { useState } from 'react';
import Answer from './Answer';

const TriviaQuestion = () => {
  const [questionData, setQuestionData] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGetQuestion = async () => {
    try {
      const response = await fetch('http://jservice.io/api/random');
      const data = await response.json();
      const question = data[0];
      setQuestionData({
        category: question.category.title,
        question: question.question,
        points: question.value,
        answer: question.answer,
      });
      setShowAnswer(false);
    } catch (error) {
      console.error('Error fetching trivia question:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Random Trivia Question</h2>
      <button onClick={handleGetQuestion}>Get Question</button>
      {questionData && (
        <div style={styles.questionBox}>
          <h3>Category: {questionData.category}</h3>
          <p>Question: {questionData.question}</p>
          <p>Points: {questionData.points}</p>
          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
          {showAnswer && <Answer answer={questionData.answer} />}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  questionBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

export default TriviaQuestion;
