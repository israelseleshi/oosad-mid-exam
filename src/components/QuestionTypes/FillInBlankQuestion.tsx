import React, { useState, useEffect } from 'react';
import { FillInBlankQuestion as FIB } from '../../types';
import { useQuiz } from '../../contexts/QuizContext';

interface Props {
  question: FIB;
}

const FillInBlankQuestion: React.FC<Props> = ({ question }) => {
  const { answerQuestion } = useQuiz();
  const [inputValue, setInputValue] = useState(question.userAnswer as string || '');
  
  useEffect(() => {
    setInputValue(question.userAnswer as string || '');
  }, [question.id, question.userAnswer]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    answerQuestion(value);
  };
  
  const renderQuestionWithInput = () => {
    const parts = question.text.split('_________');
    
    if (parts.length === 1) {
      return (
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-white mb-2">{question.text}</p>
          <div className="mt-3">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none
                        text-gray-800 dark:text-white bg-white dark:bg-gray-800
                        ${question.isCorrect === undefined 
                           ? 'border-gray-300 dark:border-gray-600 focus:border-blue-500' 
                           : question.isCorrect 
                             ? 'border-green-500 bg-green-50 dark:bg-green-900/30' 
                             : 'border-red-500 bg-red-50 dark:bg-red-900/30'}`}
              placeholder="Your answer..."
              disabled={question.isCorrect !== undefined}
            />
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-2">
        <p className="text-lg font-medium text-gray-800 dark:text-white">{parts[0]}</p>
        <div className="inline-block">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`w-64 p-2 border-b-2 focus:ring-0 outline-none
                      text-gray-800 dark:text-white bg-transparent
                      ${question.isCorrect === undefined 
                         ? 'border-gray-500 dark:border-gray-400 focus:border-blue-500' 
                         : question.isCorrect 
                           ? 'border-green-500 bg-green-50 dark:bg-green-900/30' 
                           : 'border-red-500 bg-red-50 dark:bg-red-900/30'}`}
            placeholder="Your answer..."
            disabled={question.isCorrect !== undefined}
          />
        </div>
        <p className="text-lg font-medium text-gray-800 dark:text-white inline">{parts[1]}</p>
      </div>
    );
  };
  
  return (
    <div className="space-y-4">
      {renderQuestionWithInput()}
      
      {question.isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-md ${question.isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
          {question.isCorrect ? (
            <p className="font-medium">✓ Correct answer!</p>
          ) : (
            <div>
              <p className="font-medium">✗ Incorrect answer.</p>
              <p>The correct answer is: <span className="font-bold">{question.answer}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FillInBlankQuestion;