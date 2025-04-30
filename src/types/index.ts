export type QuestionType = 'multiple-choice' | 'fill-in-blank' | 'true-false' | 'short-answer';

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  text: string;
  answer: string | string[];
  explanation?: string;
  userAnswer?: string | string[];
  isCorrect?: boolean;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  answer: string;
}

export interface FillInBlankQuestion extends BaseQuestion {
  type: 'fill-in-blank';
  answer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  answer: 'True' | 'False';
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  answer: string[];
}

export type Question = 
  | MultipleChoiceQuestion
  | FillInBlankQuestion
  | TrueFalseQuestion
  | ShortAnswerQuestion;

export interface Chapter {
  id: number;
  title: string;
  questions: Question[];
}

export interface QuizState {
  chapters: Chapter[];
  currentChapterId: number;
  currentQuestionIndex: number;
  score: {
    [chapterId: number]: {
      correct: number;
      total: number;
      answered: number;
    }
  };
  timerEnabled: boolean;
  timerSeconds: number;
  quizCompleted: boolean;
}

export interface QuizContextType {
  state: QuizState;
  loadChapter: (chapterId: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  answerQuestion: (answer: string | string[]) => void;
  checkAnswer: () => void;
  resetQuiz: () => void;
  toggleTimer: () => void;
  timeRemaining: number;
  isTimerRunning: boolean;
  currentQuestion: Question | null;
  currentChapter: Chapter | null;
  progress: number;
}