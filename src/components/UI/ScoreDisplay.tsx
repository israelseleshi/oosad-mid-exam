import React from 'react';
import { Award, CheckCircle, XCircle, BarChart2, FileText } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';

interface Props {
  chapterId?: number;
}

const ScoreDisplay: React.FC<Props> = ({ chapterId }) => {
  const { state, resetQuiz, loadChapter } = useQuiz();
  
  // Use the provided chapterId or the current one
  const targetChapterId = chapterId || state.currentChapterId;
  const currentChapter = state.chapters.find(c => c.id === targetChapterId);
  const chapterScore = state.score[targetChapterId];
  
  const chapterNotes = {
    1: [
      'Review systems thinking and complexity concepts',
      'Practice distinguishing SAD vs OOA approaches',
      'Understand object-oriented principles deeply',
      'Focus on UML basics and terminology',
      'Master decomposition techniques'
    ],
    2: [
      'Study object model elements thoroughly',
      'Practice inheritance and polymorphism examples',
      'Compare different SDLC models',
      'Understand UP phases and deliverables',
      'Learn to identify UML diagram types'
    ],
    3: [
      'Memorize Agile Manifesto principles',
      'Understand Scrum roles and ceremonies',
      'Know XP practices and their benefits',
      'Study scaling approaches like LeSS',
      'Learn Kanban principles and practices'
    ]
  };
  
  if (!currentChapter || !chapterScore) {
    return null;
  }
  
  const scorePercentage = Math.round((chapterScore.correct / chapterScore.total) * 100);
  
  // Determine rating based on score
  let rating = '';
  let ratingColor = '';
  
  if (scorePercentage >= 90) {
    rating = 'Excellent';
    ratingColor = 'text-green-600';
  } else if (scorePercentage >= 75) {
    rating = 'Good';
    ratingColor = 'text-blue-600';
  } else if (scorePercentage >= 60) {
    rating = 'Satisfactory';
    ratingColor = 'text-yellow-600';
  } else {
    rating = 'Needs Improvement';
    ratingColor = 'text-red-600';
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Award size={36} className="text-blue-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-center mb-1">Chapter Complete!</h2>
      <p className="text-gray-600 text-center mb-6">
        {currentChapter.title}
      </p>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-blue-600 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * scorePercentage) / 100}
              transform="rotate(-90 50 50)"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold text-gray-800">{scorePercentage}%</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-3 rounded-lg flex items-center">
          <CheckCircle size={20} className="text-green-600 mr-2" />
          <div>
            <div className="text-sm text-gray-600">Correct</div>
            <div className="font-bold text-gray-800">{chapterScore.correct}</div>
          </div>
        </div>
        <div className="bg-red-50 p-3 rounded-lg flex items-center">
          <XCircle size={20} className="text-red-600 mr-2" />
          <div>
            <div className="text-sm text-gray-600">Incorrect</div>
            <div className="font-bold text-gray-800">
              {chapterScore.answered - chapterScore.correct}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6 text-center">
        <div className="text-sm text-gray-600 mb-1">Your Performance</div>
        <div className={`font-bold text-xl ${ratingColor}`}>
          {rating}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FileText size={18} className="text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Review Notes</h3>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          {chapterNotes[targetChapterId as keyof typeof chapterNotes].map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={() => loadChapter(targetChapterId)}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Retry Chapter
        </button>
        <button
          onClick={resetQuiz}
          className="flex-1 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition"
        >
          Back to Chapters
        </button>
      </div>
    </div>
  );
};

export default ScoreDisplay;