export default class Library {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItemById(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  getAllItems() {
    return this.items;
  }
}
