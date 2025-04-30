import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { QuizState, QuizContextType, Question, Chapter } from '../types';
import { loadChapterData } from '../utils/markdownParser';

// Initial state
const initialState: QuizState = {
  chapters: [],
  currentChapterId: 1,
  currentQuestionIndex: 0,
  score: {},
  timerEnabled: false,
  timerSeconds: 60, // Default 60 seconds per question
  quizCompleted: false,
};

// Action types
type QuizAction = 
  | { type: 'LOAD_CHAPTER'; payload: { chapter: Chapter } }
  | { type: 'SET_CURRENT_CHAPTER'; payload: { chapterId: number } }
  | { type: 'SET_CURRENT_QUESTION'; payload: { index: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'ANSWER_QUESTION'; payload: { answer: string | string[] } }
  | { type: 'CHECK_ANSWER' }
  | { type: 'RESET_QUIZ' }
  | { type: 'TOGGLE_TIMER' }
  | { type: 'SET_QUIZ_COMPLETED'; payload: { completed: boolean } };

// Reducer function
const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'LOAD_CHAPTER':
      const { chapter } = action.payload;
      const chapterExists = state.chapters.some(c => c.id === chapter.id);
      
      const updatedChapters = chapterExists
        ? state.chapters.map(c => c.id === chapter.id ? chapter : c)
        : [...state.chapters, chapter];
      
      // Initialize score for this chapter if it doesn't exist
      const updatedScore = { ...state.score };
      if (!updatedScore[chapter.id]) {
        updatedScore[chapter.id] = { correct: 0, total: chapter.questions.length, answered: 0 };
      }
      
      return {
        ...state,
        chapters: updatedChapters,
        score: updatedScore,
        currentQuestionIndex: 0, // Reset to first question when loading a chapter
      };
    
    case 'SET_CURRENT_CHAPTER':
      return {
        ...state,
        currentChapterId: action.payload.chapterId,
        currentQuestionIndex: 0, // Reset to first question when changing chapters
      };
    
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: action.payload.index,
      };
    
    case 'NEXT_QUESTION': {
      const currentChapter = state.chapters.find(c => c.id === state.currentChapterId);
      if (!currentChapter) return state;
      
      const nextIndex = state.currentQuestionIndex + 1;
      
      // If we've reached the end of questions, mark quiz as completed
      if (nextIndex >= currentChapter.questions.length) {
        return {
          ...state,
          quizCompleted: true,
        };
      }
      
      return {
        ...state,
        currentQuestionIndex: nextIndex,
      };
    }
    
    case 'PREVIOUS_QUESTION': {
      const previousIndex = Math.max(0, state.currentQuestionIndex - 1);
      return {
        ...state,
        currentQuestionIndex: previousIndex,
      };
    }
    
    case 'ANSWER_QUESTION': {
      const { answer } = action.payload;
      const currentChapter = state.chapters.find(c => c.id === state.currentChapterId);
      if (!currentChapter) return state;
      
      const updatedChapters = state.chapters.map(chapter => {
        if (chapter.id === state.currentChapterId) {
          const updatedQuestions = chapter.questions.map((question, index) => {
            if (index === state.currentQuestionIndex) {
              return { ...question, userAnswer: answer };
            }
            return question;
          });
          return { ...chapter, questions: updatedQuestions };
        }
        return chapter;
      });
      
      return {
        ...state,
        chapters: updatedChapters,
      };
    }
    
    case 'CHECK_ANSWER': {
      const currentChapter = state.chapters.find(c => c.id === state.currentChapterId);
      if (!currentChapter) return state;
      
      const currentQuestion = currentChapter.questions[state.currentQuestionIndex];
      if (!currentQuestion || !currentQuestion.userAnswer) return state;
      
      let isCorrect = false;
      
      // Check if the answer is correct based on question type
      if (Array.isArray(currentQuestion.answer)) {
        // For short answers, check if any of the acceptable answers match
        if (Array.isArray(currentQuestion.userAnswer)) {
          isCorrect = currentQuestion.answer.some(ans => 
            currentQuestion.userAnswer?.includes(ans)
          );
        } else {
          isCorrect = currentQuestion.answer.some(ans => 
            ans.toLowerCase().includes((currentQuestion.userAnswer as string).toLowerCase())
          );
        }
      } else {
        // For multiple choice, true/false, and fill-in-blank questions
        if (Array.isArray(currentQuestion.userAnswer)) {
          isCorrect = currentQuestion.userAnswer.includes(currentQuestion.answer);
        } else {
          isCorrect = currentQuestion.userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        }
      }
      
      // Update the question with the result
      const updatedChapters = state.chapters.map(chapter => {
        if (chapter.id === state.currentChapterId) {
          const updatedQuestions = chapter.questions.map((question, index) => {
            if (index === state.currentQuestionIndex) {
              return { ...question, isCorrect };
            }
            return question;
          });
          return { ...chapter, questions: updatedQuestions };
        }
        return chapter;
      });
      
      // Update the score
      const updatedScore = { ...state.score };
      const chapterScore = updatedScore[state.currentChapterId];
      
      // Only update score if this is the first time checking this question
      if (!currentQuestion.isCorrect) {
        updatedScore[state.currentChapterId] = {
          ...chapterScore,
          correct: isCorrect ? chapterScore.correct + 1 : chapterScore.correct,
          answered: chapterScore.answered + 1,
        };
      }
      
      return {
        ...state,
        chapters: updatedChapters,
        score: updatedScore,
      };
    }
    
    case 'RESET_QUIZ':
      return {
        ...initialState,
        timerEnabled: state.timerEnabled, // Preserve timer setting
        timerSeconds: state.timerSeconds,
      };
    
    case 'TOGGLE_TIMER':
      return {
        ...state,
        timerEnabled: !state.timerEnabled,
      };
    
    case 'SET_QUIZ_COMPLETED':
      return {
        ...state,
        quizCompleted: action.payload.completed,
      };
    
    default:
      return state;
  }
};

// Create the context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Timer hook
const useQuizTimer = (enabled: boolean, duration: number) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  // Start/stop timer based on enabled flag
  useEffect(() => {
    if (enabled && !isRunning) {
      setIsRunning(true);
      setTimeRemaining(duration);
    } else if (!enabled && isRunning) {
      setIsRunning(false);
    }
  }, [enabled, isRunning, duration]);

  // Timer tick
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isRunning) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          // If time's up, stop the timer
          if (prevTime <= 1) {
            setIsRunning(false);
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  // Reset timer when moving to a new question
  const resetTimer = () => {
    if (enabled) {
      setTimeRemaining(duration);
      setIsRunning(true);
    }
  };

  return { timeRemaining, isRunning, resetTimer };
};

// Provider component
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { timeRemaining, isRunning, resetTimer } = useQuizTimer(
    state.timerEnabled, 
    state.timerSeconds
  );
  
  // Find current question and chapter
  const currentChapter = state.chapters.find(c => c.id === state.currentChapterId) || null;
  const currentQuestion = currentChapter?.questions[state.currentQuestionIndex] || null;
  
  // Calculate progress percentage
  const progress = currentChapter 
    ? (state.currentQuestionIndex / currentChapter.questions.length) * 100 
    : 0;
  
  // Reset timer when moving to a new question
  useEffect(() => {
    resetTimer();
  }, [state.currentQuestionIndex, state.currentChapterId]);
  
  // Load a chapter
  const loadChapter = async (chapterId: number) => {
    const chapter = await loadChapterData(chapterId);
    if (chapter) {
      dispatch({ type: 'LOAD_CHAPTER', payload: { chapter } });
      dispatch({ type: 'SET_CURRENT_CHAPTER', payload: { chapterId } });
    }
  };
  
  // Move to next question
  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };
  
  // Move to previous question
  const previousQuestion = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };
  
  // Answer the current question
  const answerQuestion = (answer: string | string[]) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { answer } });
  };
  
  // Check if the answer is correct
  const checkAnswer = () => {
    dispatch({ type: 'CHECK_ANSWER' });
  };
  
  // Reset the quiz
  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };
  
  // Toggle timer
  const toggleTimer = () => {
    dispatch({ type: 'TOGGLE_TIMER' });
  };
  
  const contextValue: QuizContextType = {
    state,
    loadChapter,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    checkAnswer,
    resetQuiz,
    toggleTimer,
    timeRemaining,
    isTimerRunning: isRunning,
    currentQuestion,
    currentChapter,
    progress,
  };
  
  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

// Hook for using the quiz context
export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};