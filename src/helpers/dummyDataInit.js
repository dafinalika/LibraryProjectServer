if (typeof localStorage === "undefined" || localStorage == null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

const dummyData = {
  init: () => {
    let allBooks = [
      {
        title: "Titull 1",
        autor: "Autor 1",
        id: 1,
      },
      {
        title: "Titull 12",
        autor: "Autor 1",
        id: 2,
      },
      {
        title: "Titull 39",
        autor: "Autor 1",
        id: 3,
      },
      {
        title: "Titull 421",
        autor: "Autor 1",
        id: 4,
      },
      {
        title: "Titull 59",
        autor: "Autor 1",
        id: 5,
      },
      {
        title: "Titull 10",
        autor: "Autor 2",
        id: 6,
      },
      {
        title: "Titull 112",
        autor: "Autor 2",
        id: 7,
      },
      {
        title: "Titull 349",
        autor: "Autor 2",
        id: 8,
      },
      {
        title: "Titull 41",
        autor: "Autor 2",
        id: 9,
      },
      {
        title: "Titull 599",
        autor: "Autor 2",
        id: 10,
      },
      {
        title: "Titull 321",
        autor: "Autor 3",
        id: 11,
      },
      {
        title: "Titull 113",
        autor: "Autor 3",
        id: 12,
      },
      {
        title: "Titull 339",
        autor: "Autor 3",
        id: 13,
      },
      {
        title: "Titull 422",
        autor: "Autor 3",
        id: 14,
      },
      {
        title: "Titull 32",
        autor: "Autor 3",
        id: 4,
      },
    ];

    let allAuthors = [
      {
        name: "Autor 1",
        birthdate: "13-07-1990",
        id: 1,
        books: [
          { title: "Titull 1" },
          { title: "Titull 12" },
          { title: "Titull 39" },
          { title: "Titull 421" },
          { title: "Titull 59" },
        ],
      },
      {
        name: "Autor 2",
        birthdate: "30-12-1997",
        id: 2,
        books: [
          { title: "Titull 10" },
          { title: "Titull 112" },
          { title: "Titull 349" },
          { title: "Titull 41" },
          { title: "Titull 599" },
        ],
      },
      {
        name: "Autor 3",
        birthdate: "12-10-1980",
        id: 3,
        books: [
          { title: "Titull 321" },
          { title: "Titull 113" },
          { title: "Titull 339" },
          { title: "Titull 422" },
          { title: "Titull 32" },
        ],
      },
    ];

    localStorage.setItem("books", JSON.stringify(allBooks));
    localStorage.setItem("authors", JSON.stringify(allAuthors));
  },
};

module.exports = dummyData;
