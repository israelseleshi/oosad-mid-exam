import React, { useState } from 'react';
import { Moon, Sun, Home, Menu, ChevronDown } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { resetQuiz, loadChapter, currentChapter } = useQuiz();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chapters = [
    { id: 1, title: 'Fundamentals of OOSAD' },
    { id: 2, title: 'Object Model & SDLC' },
    { id: 3, title: 'Agile Development' }
  ];

  const handleChapterSelect = (chapterId: number) => {
    loadChapter(chapterId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={resetQuiz}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Home"
            >
              <Home size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              OOSAD Prep
            </h1>
          </div>

          {/* Mobile Chapter Selection */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu size={20} />
              <span className="text-sm font-medium">
                {currentChapter ? 'Chapter ' + currentChapter.id : 'Chapters'}
              </span>
              <ChevronDown size={16} className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-50 border dark:border-gray-700 py-2">
                  {chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => handleChapterSelect(chapter.id)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                                ${currentChapter?.id === chapter.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                    >
                      {chapter.title}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="text-yellow-500" size={24} />
            ) : (
              <Moon className="text-gray-700" size={24} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;