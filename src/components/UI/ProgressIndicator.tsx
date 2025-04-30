import React from 'react';
import { useQuiz } from '../../contexts/QuizContext';

const ProgressIndicator: React.FC = () => {
  const { progress, currentChapter, state } = useQuiz();
  
  const correctAnswers = currentChapter?.questions
    .slice(0, state.currentQuestionIndex)
    .filter(q => q.isCorrect)
    .length || 0;
  
  const answeredQuestions = currentChapter?.questions
    .slice(0, state.currentQuestionIndex)
    .filter(q => q.isCorrect !== undefined)
    .length || 0;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Progress: {Math.round(progress)}%
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {correctAnswers} / {answeredQuestions} correct
        </div>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;