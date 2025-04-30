import React, { useState } from 'react';
import { BookOpen, GraduationCap, Settings, HelpCircle, Book, Code, Menu, X, FileText } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';

const Sidebar: React.FC = () => {
  const { state, loadChapter } = useQuiz();
  const [isOpen, setIsOpen] = useState(false);
  
  const chapters = [
    { id: 1, title: 'Fundamentals of OOSAD' },
    { id: 2, title: 'Object Model & SDLC' },
    { id: 3, title: 'Agile Development' }
  ];
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-[#242424] border-r border-gray-800 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-4 border-b border-gray-800">
          <GraduationCap size={24} className="text-blue-400 mr-2" />
          <h1 className="text-xl font-bold text-white">OOSAD Prep</h1>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          {/* Exam Section */}
          <div className="mb-6">
            <h2 className="text-gray-400 text-xs uppercase font-semibold mb-2">Practice Exams</h2>
            <div className="space-y-1">
              {chapters.map(chapter => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    loadChapter(chapter.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition
                            ${state.currentChapterId === chapter.id
                              ? chapter.id === 1 
                                ? 'bg-blue-600 text-white'
                                : chapter.id === 2
                                ? 'bg-purple-600 text-white'
                                : 'bg-green-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {chapter.id === 1 ? (
                    <Book size={18} className="mr-2" />
                  ) : chapter.id === 2 ? (
                    <BookOpen size={18} className="mr-2" />
                  ) : (
                    <Code size={18} className="mr-2" />
                  )}
                  <span className="text-sm">{chapter.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Study Notes Section */}
          <div className="mb-6">
            <h2 className="text-gray-400 text-xs uppercase font-semibold mb-2">Study Notes</h2>
            <div className="space-y-1">
              {chapters.map(chapter => (
                <button
                  key={`notes-${chapter.id}`}
                  className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition"
                >
                  <FileText size={18} className="mr-2" />
                  <span className="text-sm">{chapter.title} Notes</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Help Section */}
          <div>
            <h2 className="text-gray-400 text-xs uppercase font-semibold mb-2">Help</h2>
            <div className="space-y-1">
              <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition">
                <Settings size={18} className="mr-2" />
                <span className="text-sm">Settings</span>
              </button>
              <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition">
                <HelpCircle size={18} className="mr-2" />
                <span className="text-sm">Guide</span>
              </button>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="bg-gray-700/30 rounded-lg p-3">
            <h3 className="text-sm font-medium text-blue-400 mb-1">Study Tips</h3>
            <p className="text-xs text-gray-400">
              Take breaks between chapters and review incorrect answers to improve understanding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;