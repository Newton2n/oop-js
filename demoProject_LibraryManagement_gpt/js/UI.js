export default class UI {
  constructor(library) {
    this.library = library;
    this.form = document.getElementById('bookForm');
    this.tableBody = document.querySelector('#bookTable tbody');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
    this.tableBody.addEventListener('click', this.handleRemove.bind(this));
  }

  handleAdd(event) {
    event.preventDefault();
    const title = this.form.title.value.trim();
    const author = this.form.author.value.trim();
    const year = parseInt(this.form.year.value);
    const type = this.form.type.value;

    if (!title || !author || !year || !type) return;
  
    this.createItem(type, title, author, year);
    this.renderTable();
    this.form.reset();
  }

  createItem(type, title, author, year) {
    // This method will be replaced in app.js after imports
  }

  // handleRemove(event) {
  //   if (event.target.classList.contains('remove-btn')) {
  //     const id = Number(event.target.dataset.id);
  //     this.library.removeItemById(id);
  //     this.renderTable();
  //   }
  // }

  renderTable() {
    this.tableBody.innerHTML = '';
    this.library.getAllItems().forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.year}</td>
        <td>${item.type}</td>
        <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
      `;
      this.tableBody.appendChild(row);
    });
  }
}
