import React from 'react';
import { TrueFalseQuestion as TFQ } from '../../types';
import { useQuiz } from '../../contexts/QuizContext';

interface Props {
  question: TFQ;
}

const TrueFalseQuestion: React.FC<Props> = ({ question }) => {
  const { answerQuestion } = useQuiz();

  const handleOptionSelect = (option: 'True' | 'False') => {
    answerQuestion(option);
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-800 dark:text-white mb-4">
        {question.text.replace(/^True or False: /i, '')}
      </div>
      
      <div className="flex space-x-4">
        {['True', 'False'].map((option) => {
          const isSelected = option === question.userAnswer;
          const isCorrect = question.isCorrect !== undefined && isSelected && question.isCorrect;
          const isIncorrect = question.isCorrect !== undefined && isSelected && !question.isCorrect;
          
          let bgColor = 'bg-white dark:bg-gray-800';
          let borderColor = 'border-gray-300 dark:border-gray-600';
          let textColor = 'text-gray-800 dark:text-white';
          
          if (isSelected) {
            bgColor = 'bg-blue-50 dark:bg-blue-900/30';
            borderColor = 'border-blue-500';
          }
          
          if (isCorrect) {
            bgColor = 'bg-green-50 dark:bg-green-900/30';
            borderColor = 'border-green-500';
          }
          
          if (isIncorrect) {
            bgColor = 'bg-red-50 dark:bg-red-900/30';
            borderColor = 'border-red-500';
          }
          
          const isCorrectAnswer = question.isCorrect !== undefined && 
                                !question.isCorrect && 
                                option === question.answer;
          
          if (isCorrectAnswer) {
            bgColor = 'bg-green-50 dark:bg-green-900/30';
            borderColor = 'border-green-500';
          }
          
          return (
            <div
              key={option}
              className={`flex-1 p-4 rounded-lg border-2 ${borderColor} ${bgColor} 
                          flex items-center justify-center cursor-pointer transition-colors
                          hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 
                          text-center font-medium ${textColor}`}
              onClick={() => handleOptionSelect(option as 'True' | 'False')}
            >
              {option}
              
              {isCorrect && (
                <div className="ml-2 text-green-500">✓</div>
              )}
              
              {isIncorrect && (
                <div className="ml-2 text-red-500">✗</div>
              )}
              
              {isCorrectAnswer && (
                <div className="ml-2 text-green-500">(Correct)</div>
              )}
            </div>
          );
        })}
      </div>
      
      {question.isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-md ${question.isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
          {question.isCorrect ? (
            <p className="font-medium">✓ Correct!</p>
          ) : (
            <div>
              <p className="font-medium">✗ Incorrect.</p>
              <p>The correct answer is: <span className="font-bold">{question.answer}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrueFalseQuestion;