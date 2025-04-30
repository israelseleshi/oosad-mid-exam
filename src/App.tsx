import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QuizProvider, useQuiz } from './contexts/QuizContext';
import Navbar from './components/UI/Navbar';
import ChapterSelection from './components/UI/ChapterSelection';
import QuestionDisplay from './components/QuestionDisplay';
import ScoreDisplay from './components/UI/ScoreDisplay';

const Quiz: React.FC = () => {
  const { currentChapter, state } = useQuiz();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {state.quizCompleted ? (
              <ScoreDisplay />
            ) : (
              <QuestionDisplay />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-96">
            <ChapterSelection />
          </div>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;