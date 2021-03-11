import { _ } from "./utils.js";
import { Slide } from "./slide.js";
import { MoreProducts } from "./moreProducts.js";
import { renderSearchRecom, requestJsonp } from "./searchUI.js";

window.addEventListener("DOMContentLoaded", () => {
  const getNode = (className) => document.querySelector(className);
  const slideList = getNode(".slide_list");
  const nextBtn = getNode(".next_button");
  const prevBtn = getNode(".prev_button");

  const carouselSlide = new Slide(slideList, nextBtn, prevBtn);
  carouselSlide.renderHtml();

  const mBtn = new MoreProducts();
  mBtn.renderHTML();

  requestJsonp("자동차", "responseJsonpData");
  renderSearchRecom();
});
