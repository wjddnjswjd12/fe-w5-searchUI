import { _ } from "./utils.js";
import { Slide } from "./slide.js";
import { MoreProducts } from "./moreProducts.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { renderSearchRecom } from "./searchUI.js";
=======
import { renderSearchRecom, requestJsonp } from "./searchUI.js";
>>>>>>> 2faff58... [fix] jsonp callback url part

window.addEventListener("DOMContentLoaded", () => {
=======
import { loadDatas, recomKeywordURL } from "./searchUI.js";

window.addEventListener("load", () => {
>>>>>>> 589b5be... [add] ul in html and make li by javascript
=======
import { renderSearchRecom } from "./searchUI.js";

window.addEventListener("DOMContentLoaded", () => {
>>>>>>> 21f3c32... [refactor] PR review:  use async await
=======
import { renderSearchRecom, requestJsonp } from "./searchUI.js";

window.addEventListener("DOMContentLoaded", () => {
>>>>>>> 2faff58fd1432e15392fe1320875a24cc66e2675
  const getNode = (className) => document.querySelector(className);
  const slideList = getNode(".slide_list");
  const nextBtn = getNode(".next_button");
  const prevBtn = getNode(".prev_button");

  const carouselSlide = new Slide(slideList, nextBtn, prevBtn);
  carouselSlide.renderHtml();

  const mBtn = new MoreProducts();
  mBtn.renderHTML();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  requestJsonp("자동차", responseJsonpData);
});

function requestJsonp(word, callback) {
  const script = document.createElement("script");
  script.src = `https://suggest-bar.daum.net/suggest?callback=${callback.name}&limit=10&mode=json&code=utf_in_out&q=${word}&id=shoppinghow_suggest`;
  document.body.appendChild(script);
}

window["responseJsonpData"] = function (data) {
  console.log(data);
};

renderSearchRecom();
=======
});

loadDatas(recomKeywordURL);
>>>>>>> 589b5be... [add] ul in html and make li by javascript
=======

  requestJsonp("자동차", responseJsonpData);
});

function requestJsonp(word, callback) {
  const script = document.createElement("script");
  script.src = `https://suggest-bar.daum.net/suggest?callback=${callback.name}&limit=10&mode=json&code=utf_in_out&q=${word}&id=shoppinghow_suggest`;
  document.body.appendChild(script);
}

window["responseJsonpData"] = function (data) {
  console.log(data);
};

renderSearchRecom();
>>>>>>> 21f3c32... [refactor] PR review:  use async await
=======
  renderSearchRecom();
  requestJsonp("자동차", "responseJsonpData");
});
>>>>>>> 2faff58... [fix] jsonp callback url part
=======
  renderSearchRecom();
  requestJsonp("자동차", "responseJsonpData");
});
>>>>>>> 2faff58fd1432e15392fe1320875a24cc66e2675
