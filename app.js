class Book {
  KEY='data';

  constructor() {
    this.collection = this.collectionMethod();
    this.ul = document.querySelector('.lst');
    this.title = document.querySelector('.title-input');
    this.author = document.querySelector('.author-input');
    this.addBtn = document.querySelector('.add-btn');
<<<<<<< HEAD
    this.lstTitle = document.querySelector('.lst-title');
    this.underLine = document.querySelector('.underline');
=======
>>>>>>> 85f6790504f7e2e9cabfd2a17d637b46b20be5d8
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
<<<<<<< HEAD
    this.lstTitle.innerText = 'All awesome books';
    this.underLine.id = 'underline';
    this.ul.classList.add('lst-border');
    const newBook = element;
    const li = document.createElement('li');
    li.innerHTML = `
        <h1 class="title-show">
        " ${newBook.title}" by ${newBook.author}
        </h1>
=======
    const newBook = element;
    const li = document.createElement('li');
    li.innerHTML = `
        <h2 class="title-show">${newBook.title}</h2>
        <p class="author-show">${newBook.author}</p>
>>>>>>> 85f6790504f7e2e9cabfd2a17d637b46b20be5d8
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
    const newBook = { title: this.title.value, author: this.author.value };
    this.collection.push(newBook);
    this.createList(newBook);
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
