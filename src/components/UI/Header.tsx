import React from 'react';
import { Clock, Home } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';
import Timer from './Timer';

const Header: React.FC = () => {
  const { currentChapter, resetQuiz, state } = useQuiz();
  
  return (
    <header className="bg-[#242424] shadow-lg h-16 flex items-center px-6 border-b border-gray-800">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {currentChapter && (
            <div className="hidden sm:flex items-center space-x-2">
              <div className="px-3 py-1.5 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">
                {currentChapter.title}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {state.timerEnabled && <Timer />}
          
          <button
            onClick={resetQuiz}
            className="flex items-center text-gray-300 hover:text-blue-400 transition"
          >
            <Home size={20} />
            <span className="ml-2 hidden sm:inline">Home</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;