import LibraryItem from './LibraryItem.js';

export default class eBook extends LibraryItem {
  constructor(title, author, year) {
    super(title, author, year);
    this.type = 'eBook';
  }

  display() {
    return `💻 ${super.display()}`;
  }
}
