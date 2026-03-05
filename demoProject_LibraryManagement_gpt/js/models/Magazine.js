import LibraryItem from './LibraryItem.js';

export default class Magazine extends LibraryItem {
  constructor(title, author, year) {
    super(title, author, year);
    this.type = 'Magazine';
  }

  display() {
    return `📰 ${super.display()}`;
  }
}
