import Library from './Library.js';
import UI from './UI.js';
import Book from './models/Book.js';
import Magazine from './models/Magazine.js';
import eBook from './models/eBook.js';

const library = new Library();
const ui = new UI(library);

// Override createItem to add actual items with correct classes
ui.createItem = function(type, title, author, year) {
  let item;
  switch(type) {
    case 'Book':
      item = new Book(title, author, year);
      break;
    case 'Magazine':
      item = new Magazine(title, author, year);
      break;
    case 'eBook':
      item = new eBook(title, author, year);
      break;
    default:
      return;
  }
  this.library.addItem(item);
};
