// constructor for object
class Book {
  KEY='data';

  constructor() {
    this.collection = this.collectionMethod();
    this.ul = document.querySelector('.lst');
    this.title = document.querySelector('.title-input');
    this.author = document.querySelector('.author-input');
    this.addBtn = document.querySelector('.add-btn');
  }

  collectionMethod() {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : [];
  }

  saveLocal(arr) {
    localStorage.setItem(this.KEY, JSON.stringify(arr));
  }

  getfromLocal() {
    const arr = JSON.parse(localStorage.getItem(this.KEY));
    return arr;
  }

  clearPlaceHolder() {
    this.title.value = '';
    this.author.value = '';
  }

  removeBtn(e) {
    const li = e.target.parentElement;
    this.collection = this.collection.filter((book) => book.title !== li.id);
    this.saveLocal(this.collection);
    li.remove();
  }

  createList(element) {
    // const newBook = this.getfromLocal();
    const newBook = element;
    const li = document.createElement('li');
    li.innerHTML = `
        <h2 class="title-show">${newBook.title}</h2>
        <p class="author-show">${newBook.author}</p>
        `;
    li.id = `${newBook.title}`;
    const rmvBtn = document.createElement('button');
    rmvBtn.className = 'rmv-btn';
    rmvBtn.innerText = 'Remove';
    li.append(rmvBtn);
    rmvBtn.addEventListener('click', (e) => {
      this.removeBtn(e);
    });
    this.ul.appendChild(li);
    this.clearPlaceHolder();
  }

  create() {
    // DOM  for inputs
    const newBook = { title: this.title.value, author: this.author.value };
    this.collection.push(newBook);
    this.createList(newBook);
    // return collection;
  }
}

window.onload = () => {
  const start = new Book();
  start.addBtn.addEventListener('click', () => {
    start.create();
    start.saveLocal(start.collection, this.key);
  });
  start.collection.forEach((element) => {
    start.createList(element);
  });
};
