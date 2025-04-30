import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { Chapter } from '../../types';

export const chapters: Chapter[] = [chapter1, chapter2, chapter3];

export const getChapter = (id: number): Chapter | undefined => {
  return chapters.find(chapter => chapter.id === id);
};