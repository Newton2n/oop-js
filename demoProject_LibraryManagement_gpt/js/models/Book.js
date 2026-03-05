import LibraryItem from './LibraryItem.js';

export default class Book extends LibraryItem {
  constructor(title, author, year) {
    super(title, author, year);
    this.type = 'Book';
  }

  display() {
    return `📖 ${super.display()}`;
  }
}
