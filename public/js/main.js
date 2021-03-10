import { _ } from "./utils.js";
import { Slide } from "./slide.js";
import { MoreProducts } from "./moreProducts.js";
import { renderSearchRecom } from "./searchUI.js";

window.addEventListener("DOMContentLoaded", () => {
  const getNode = (className) => document.querySelector(className);
  const slideList = getNode(".slide_list");
  const nextBtn = getNode(".next_button");
  const prevBtn = getNode(".prev_button");

  const carouselSlide = new Slide(slideList, nextBtn, prevBtn);
  carouselSlide.renderHtml();

  const mBtn = new MoreProducts();
  mBtn.renderHTML();

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
