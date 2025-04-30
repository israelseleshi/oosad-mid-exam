import React from 'react';
import { Book, BookOpen, Code, Trophy, Star, Timer } from 'lucide-react';
import { useQuiz } from '../../contexts/QuizContext';

const ChapterSelection: React.FC = () => {
  const { loadChapter, state } = useQuiz();
  
  const chapters = [
    { 
      id: 1, 
      title: 'Chapter 1: Fundamentals of OOSAD',
      icon: Book,
      description: 'Core concepts and principles of object-oriented analysis'
    },
    { 
      id: 2, 
      title: 'Chapter 2: Object Model & SDLC',
      icon: BookOpen,
      description: 'Understanding object models and development lifecycle'
    },
    { 
      id: 3, 
      title: 'Chapter 3: Agile Development',
      icon: Code,
      description: 'Modern agile methodologies and practices'
    }
  ];
  
  const getAchievements = (chapterId: number) => {
    const score = state.score[chapterId];
    if (!score || score.answered === 0) return [];
    
    const achievements = [];
    const percentage = (score.correct / score.total) * 100;
    
    if (percentage === 100) {
      achievements.push({ icon: Trophy, label: 'Perfect Score!', color: 'text-yellow-500' });
    } else if (percentage >= 80) {
      achievements.push({ icon: Star, label: 'Excellence', color: 'text-blue-500' });
    }
    
    if (score.answered === score.total) {
      achievements.push({ icon: Timer, label: 'Chapter Complete', color: 'text-green-500' });
    }
    
    return achievements;
  };
  
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Chapters
      </h3>
      <div className="space-y-4">
        {chapters.map(chapter => {
          const Icon = chapter.icon;
          const chapterScore = state.score[chapter.id] || { correct: 0, answered: 0, total: 35 };
          const scorePercentage = Math.round((chapterScore.correct / chapterScore.total) * 100);
          const isActive = state.currentChapterId === chapter.id;
          const achievements = getAchievements(chapter.id);
          
          return (
            <div
              key={chapter.id}
              onClick={() => loadChapter(chapter.id)}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer
                        transform transition hover:scale-105 hover:shadow-xl border-2
                        ${isActive 
                          ? 'border-blue-500 dark:border-blue-400' 
                          : 'border-gray-200 dark:border-gray-700'}`}
            >
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-full mr-3 ${
                    chapter.id === 1 ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 
                    chapter.id === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' :
                    'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-white font-medium">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {chapter.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      {chapterScore.answered === 0 ? 'Not Started' : 'Progress'}
                    </span>
                    <span className={`font-medium ${
                      scorePercentage >= 80 ? 'text-green-600 dark:text-green-400' :
                      scorePercentage >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      {chapterScore.answered === 0 ? '0%' : `${scorePercentage}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        chapterScore.answered === 0 ? 'bg-gray-400 dark:bg-gray-600' :
                        scorePercentage >= 80 ? 'bg-green-600' :
                        scorePercentage >= 60 ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: chapterScore.answered === 0 ? '0%' : `${scorePercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                {achievements.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {achievements.map((achievement, index) => {
                      const AchievementIcon = achievement.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1"
                        >
                          <AchievementIcon size={14} className={`${achievement.color} mr-1`} />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {achievement.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {chapterScore.answered} of {chapterScore.total} questions attempted
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterSelection;