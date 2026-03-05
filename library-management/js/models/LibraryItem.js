export default class LibraryItem {
  static lastId = 0;
  #id;

  constructor(title, author, year) {
    this.#id = ++LibraryItem.lastId;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get id() {
    return this.#id;
  }

  display() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}
