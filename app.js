class Book {
  KEY='data';

  constructor() {
    this.collection = this.collectionMethod();
    this.ul = document.querySelector('.lst');
    this.title = document.querySelector('.title-input');
    this.author = document.querySelector('.author-input');
    this.addBtn = document.querySelector('.add-btn');
    this.lstTitle = document.querySelector('.lst-title');
    this.date= new Date().toDateString();
    this.time= new Date().toLocaleTimeString();
    this.dateP = document.querySelector('.date');
    this.links = document.querySelectorAll('.nav li');
    this.input = document.querySelector('.inputs');
    this.list = document.querySelector('.lst');
    this.contact = document.querySelector('.contact2');
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

  browse(e) {
    const element = e.target.className;
    switch(element) {
      case 'add': this.input.classList.remove('hide');
      this.list.classList.add('hide');
      this.contact.classList.add('hide');
      break;
      
      case 'list': this.list.classList.remove('hide');
      this.input.classList.add('hide');
      this.contact.classList.add('hide');
      break;
      case 'contact':
      this.input.classList.add('hide');
      this.list.classList.add('hide');
      this.contact.classList.remove('hide');break;
    }
  }

  removeBtn(e) {
    const li = e.target.parentElement;
    this.collection = this.collection.filter((book) => book.title !== li.id);
    this.saveLocal(this.collection);
    li.remove();
  }

  createList(element) {
    this.lstTitle.innerText = 'All awesome books';
    const newBook = element;
    const li = document.createElement('li');
    li.innerHTML = `
        <h1 class="title-show">
        " ${newBook.title}" by ${newBook.author}
        </h1>
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
  start.dateP.innerText = start.date +" "+ start.time;
  start.addBtn.addEventListener('click', () => {
    start.create();
    start.saveLocal(start.collection, this.key);
  });
  start.collection.forEach((element) => {
    start.createList(element);
  });
  start.links.forEach(link =>{
    link.addEventListener('click',(e)=>{
      start.browse(e);
    });
  });
};
