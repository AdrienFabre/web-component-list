import "@vaadin/vaadin-button";
import "@vaadin/vaadin-grid";
import "@vaadin/vaadin-text-field";
import { topHeadlinesUrl } from "./newsAPI.js";
import "./news-article.js";

window.addEventListener("load", () => {
  initUI();
  fetchNews();
});

function initUI() {
  const firstNameField = document.querySelector("#firstName");
  const lastNameField = document.querySelector("#lastName");
  const addButton = document.querySelector("#addButton");
  const grid = document.querySelector("#grid");

  let people = [];

  addButton.addEventListener("click", e => {
    people = [
      ...people,
      {
        firstName: firstNameField.value,
        lastName: lastNameField.value
      }
    ];
    grid.items = people;
    firstNameField.value = "";
    lastNameField.value = "";
  });
}

async function fetchNews() {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  const main = document.querySelector("main");

  json.articles.forEach(article => {
    const el = document.createElement("news-article");
    el.article = article;
    console.log(el);
    console.log(main);
    main.appendChild(el);
  });
}
