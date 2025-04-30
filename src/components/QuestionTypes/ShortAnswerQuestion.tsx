import React, { useState, useEffect } from 'react';
import { ShortAnswerQuestion as SAQ } from '../../types';
import { useQuiz } from '../../contexts/QuizContext';

interface Props {
  question: SAQ;
}

const ShortAnswerQuestion: React.FC<Props> = ({ question }) => {
  const { answerQuestion } = useQuiz();
  const [inputValue, setInputValue] = useState(question.userAnswer as string || '');
  
  useEffect(() => {
    setInputValue(question.userAnswer as string || '');
  }, [question.id, question.userAnswer]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    answerQuestion(value);
  };
  
  return (
    <div className="space-y-4">
      <div className="text-lg font-medium text-gray-800 dark:text-white mb-4">{question.text}</div>
      
      <div>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          rows={5}
          className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none
                    text-gray-800 dark:text-white bg-white dark:bg-gray-800
                    ${question.isCorrect === undefined 
                       ? 'border-gray-300 dark:border-gray-600 focus:border-blue-500' 
                       : question.isCorrect 
                         ? 'border-green-500 bg-green-50 dark:bg-green-900/30' 
                         : 'border-red-500 bg-red-50 dark:bg-red-900/30'}`}
          placeholder="Type your answer here..."
          disabled={question.isCorrect !== undefined}
        />
      </div>
      
      {question.isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-md ${question.isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
          {question.isCorrect ? (
            <p className="font-medium">✓ Your answer contains key elements of the correct response.</p>
          ) : (
            <div>
              <p className="font-medium">✗ Your answer may be missing key elements.</p>
              <p className="mt-2">Sample answer:</p>
              <p className="mt-1 p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white">{question.answer[0]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShortAnswerQuestion;