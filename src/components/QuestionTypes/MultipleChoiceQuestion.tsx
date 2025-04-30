import React from 'react';
import { MultipleChoiceQuestion as MCQ } from '../../types';
import { useQuiz } from '../../contexts/QuizContext';

interface Props {
  question: MCQ;
}

const MultipleChoiceQuestion: React.FC<Props> = ({ question }) => {
  const { answerQuestion } = useQuiz();

  const handleOptionSelect = (option: string) => {
    answerQuestion(option);
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-800 dark:text-white mb-4">{question.text}</div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = option === question.userAnswer;
          const isCorrect = question.isCorrect !== undefined && isSelected && question.isCorrect;
          const isIncorrect = question.isCorrect !== undefined && isSelected && !question.isCorrect;
          
          let bgColor = 'bg-white dark:bg-gray-800';
          let borderColor = 'border-gray-300 dark:border-gray-600';
          let textColor = 'text-gray-700 dark:text-gray-300';
          
          if (isSelected) {
            bgColor = 'bg-blue-50 dark:bg-blue-900/30';
            borderColor = 'border-blue-500';
            textColor = 'text-gray-800 dark:text-white';
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
              key={index}
              className={`p-4 rounded-lg border-2 ${borderColor} ${bgColor} 
                          flex items-center space-x-3 cursor-pointer transition-colors
                          hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400`}
              onClick={() => handleOptionSelect(option)}
            >
              <div 
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                            ${isSelected ? 'border-blue-500' : 'border-gray-400 dark:border-gray-500'}`}
              >
                {isSelected && (
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                )}
              </div>
              <div className={textColor}>
                {String.fromCharCode(97 + index)}) {option}
              </div>
              
              {isCorrect && (
                <div className="ml-auto text-green-500 font-medium">✓ Correct</div>
              )}
              
              {isIncorrect && (
                <div className="ml-auto text-red-500 font-medium">✗ Incorrect</div>
              )}
              
              {isCorrectAnswer && (
                <div className="ml-auto text-green-500 font-medium">Correct Answer</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;