

export function getRandomElementsFromArray<T>(arr: T[], numElements: number): T[] {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numElements);
}

export function calculateReadingTime(content: string | undefined): string {
  if (content === undefined) {
    return '0  min read';
  }

  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / wordsPerMinute)} min read`;

  return readingTime;
}