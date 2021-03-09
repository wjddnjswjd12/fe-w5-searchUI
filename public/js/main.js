import { _ } from "./utils.js";
import { Slide } from "./slide.js";
import { MoreProducts } from "./moreProducts.js";
import { loadDatas, recomKeywordURL } from "./searchUI.js";

window.addEventListener("load", () => {
  const getNode = (className) => document.querySelector(className);
  const slideList = getNode(".slide_list");
  const nextBtn = getNode(".next_button");
  const prevBtn = getNode(".prev_button");

  const carouselSlide = new Slide(slideList, nextBtn, prevBtn);
  carouselSlide.renderHtml();

  const mBtn = new MoreProducts();
  mBtn.renderHTML();
});

loadDatas(recomKeywordURL);
