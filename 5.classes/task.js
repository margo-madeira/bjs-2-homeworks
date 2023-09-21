class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name,
    this.releaseDate = releaseDate,
    this.pagesCount = pagesCount,
    this._state = 100,
    this.type = null
  }

  fix() {
    this.state *= 1.5;
  }

  set state(valueOfState) {
    if(valueOfState < 0) {
        this._state = 0;
        return;
    }
    if(valueOfState > 100) {
        this._state = 100;
        return;
    }
    this._state = valueOfState;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name,
        this.books = []
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
       const findBook = this.books.find((item) => {
            return item[type] === value;
            });

        if(findBook === undefined) {
            return null;
        }
        return findBook;
    }

    giveBookByName(bookName) {
        const bookInd = this.books.findIndex((item) => {
            return item.name === bookName;
        });
        if(bookInd < 0) {
            return null;
        } 
        const bookToGive = this.books[bookInd];
        this.books.splice(bookInd,1);
        return bookToGive;   
    }
}

const library = new Library("Библиотека имени Гагарина");

const novel = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);
const detective = new DetectiveBook("Артур Конан Дойл","Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",2019,1008);

library.addBook(novel);
library.addBook(detective);

library.findBookBy("releaseDate", "1919");
const fantastic = new FantasticBook("Аркадий и Борис Стругацкие","Пикник на обочине",1919,168);

const givenBook = library.giveBookByName("Машина времени");
novel.state = 70;
novel.fix();
library.addBook(novel);



