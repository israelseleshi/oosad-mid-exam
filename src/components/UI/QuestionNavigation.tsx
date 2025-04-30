import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';
import { Question } from '../../types';

interface Props {
  filteredQuestions: Question[];
  currentFilteredIndex: number;
}

const QuestionNavigation: React.FC<Props> = ({ filteredQuestions, currentFilteredIndex }) => {
  const { 
    nextQuestion, 
    previousQuestion, 
    currentQuestion,
    currentChapter,
    state
  } = useQuiz();
  
  const isFirstQuestion = currentFilteredIndex === 0;
  const isLastQuestion = currentFilteredIndex === filteredQuestions.length - 1;
  
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={previousQuestion}
        disabled={isFirstQuestion}
        className={`flex items-center px-4 py-2 rounded-lg transition
                  ${isFirstQuestion 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                    : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
      >
        <ChevronLeft size={18} className="mr-1" />
        Previous
      </button>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Question {currentFilteredIndex + 1} of {filteredQuestions.length}
      </div>
      
      <button
        onClick={nextQuestion}
        className={`flex items-center px-4 py-2 rounded-lg transition text-white
                  ${isLastQuestion 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isLastQuestion ? 'Finish' : 'Next'}
        <ChevronRight size={18} className="ml-1" />
      </button>
    </div>
  );
};

export default QuestionNavigation;