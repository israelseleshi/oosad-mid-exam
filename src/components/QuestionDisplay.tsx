import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import MultipleChoiceQuestion from './QuestionTypes/MultipleChoiceQuestion';
import FillInBlankQuestion from './QuestionTypes/FillInBlankQuestion';
import TrueFalseQuestion from './QuestionTypes/TrueFalseQuestion';
import ShortAnswerQuestion from './QuestionTypes/ShortAnswerQuestion';
import QuestionNavigation from './UI/QuestionNavigation';
import ProgressIndicator from './UI/ProgressIndicator';

const QuestionDisplay: React.FC = () => {
  const { currentQuestion, checkAnswer, currentChapter, state } = useQuiz();
  
  if (!currentQuestion || !currentChapter) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to OOSAD Exam Preparation
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Select a chapter from the sidebar to begin practicing questions and test your knowledge.
        </p>
      </div>
    );
  }
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return <MultipleChoiceQuestion question={currentQuestion} />;
      case 'fill-in-blank':
        return <FillInBlankQuestion question={currentQuestion} />;
      case 'true-false':
        return <TrueFalseQuestion question={currentQuestion} />;
      case 'short-answer':
        return <ShortAnswerQuestion question={currentQuestion} />;
      default:
        return <div>Unknown question type</div>;
    }
  };
  
  const isAnswered = currentQuestion.userAnswer !== undefined;
  const isChecked = currentQuestion.isCorrect !== undefined;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
      <ProgressIndicator />
      
      <div className="mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-2 sm:mb-0">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {currentChapter.title}
          </h2>
          <span className="text-gray-500 dark:text-gray-400">
            Question {state.currentQuestionIndex + 1} of {currentChapter.questions.length}
          </span>
          <div className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
            {currentQuestion.type === 'multiple-choice' ? 'Multiple Choice' : 
             currentQuestion.type === 'fill-in-blank' ? 'Fill in the Blank' : 
             currentQuestion.type === 'true-false' ? 'True/False' : 'Short Answer'}
          </div>
        </div>
      </div>
      
      {renderQuestion()}
      
      {!isChecked && isAnswered && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={checkAnswer}
            className="w-full sm:w-auto px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg
                      hover:bg-green-700 transition-colors"
          >
            Check Answer
          </button>
        </div>
      )}
      
      <QuestionNavigation 
        filteredQuestions={currentChapter.questions} 
        currentFilteredIndex={state.currentQuestionIndex} 
      />
    </div>
  );
};

export default QuestionDisplay;