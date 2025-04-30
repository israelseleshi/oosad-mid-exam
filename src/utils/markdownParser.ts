import { getChapter } from '../data/chapters';
import { Chapter } from '../types';

export const loadChapterData = async (chapterId: number): Promise<Chapter | null> => {
  try {
    const chapter = getChapter(chapterId);
    return chapter || null;
  } catch (error) {
    console.error("Error loading chapter data:", error);
    return null;
  }
};