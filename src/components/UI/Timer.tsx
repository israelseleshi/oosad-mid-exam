import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';

const Timer: React.FC = () => {
  const { timeRemaining, isTimerRunning, toggleTimer, state, checkAnswer, nextQuestion } = useQuiz();
  
  // Format seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Handle timer expiration
  useEffect(() => {
    if (timeRemaining === 0 && state.timerEnabled) {
      // Auto-check the answer and move to next question
      const currentQuestion = state.chapters
        .find(c => c.id === state.currentChapterId)
        ?.questions[state.currentQuestionIndex];
        
      if (currentQuestion && currentQuestion.userAnswer && currentQuestion.isCorrect === undefined) {
        checkAnswer();
        // After a delay, move to the next question
        const timer = setTimeout(() => {
          nextQuestion();
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [timeRemaining, state.timerEnabled]);
  
  return (
    <div className="flex items-center space-x-4">
      <div 
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full 
                  ${state.timerEnabled 
                    ? timeRemaining < 10 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'}`}
      >
        <Clock size={16} />
        <span className="font-medium">{formatTime(timeRemaining)}</span>
      </div>
      
      <button
        onClick={toggleTimer}
        className={`text-sm px-3 py-1.5 rounded-full transition
                  ${state.timerEnabled 
                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
      >
        {state.timerEnabled ? 'Disable Timer' : 'Enable Timer'}
      </button>
    </div>
  );
};

export default Timer;