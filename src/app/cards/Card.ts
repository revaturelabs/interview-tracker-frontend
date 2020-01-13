export default class Card {
  truncate(words: string): string {
    const MAX_LENGTH = 200;
    if (words.length > MAX_LENGTH) {
      return words.slice(0, MAX_LENGTH - 2) + '...';
    }
    return words;
  }
}
