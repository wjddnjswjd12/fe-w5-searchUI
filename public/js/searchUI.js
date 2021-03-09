import { _ } from "./utils.js";

const recomKeywordURL =
  "https://shoppinghow.kakao.com/v1.0/shophow/top/recomKeyword.json";

const searchUl = _.$(".area_top__recomList");
const liHeight = 37;
let counter = 0;

const loadDatas = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((res) => res.list)
    .then((result) => makeHTML(result));
};

const makeHTML = (datas) => {
  //Ul, Li 만드는 부분...s
  let str = "";
  const recomUl = _.$(".area_top__recomList");
  datas.forEach((data, i) => (str += `<li> ${i + 1}  ${data.keyword}</li>`));
  recomUl.innerHTML = str + getFirstLi(datas);
};

const getFirstLi = (datas) => {
  //
  return `<li id="firstClone"> 1  ${datas[0].keyword}</li>`;
};
const getLastLi = (datas) => {
  return `<li id="lastClone"> ${datas.length}  ${
    datas[datas.length - 1].keyword
  }</li>`;
};

searchUl.style.transform = `translateY(-${counter * liHeight}px)`;

setInterval(() => {
  searchUl.style.transition = "transform 0.3s ease-in-out";
  counter++;
  searchUl.style.transform = `translateY(-${counter * liHeight}px)`;
  if (counter === 13) {
    searchUl.style.transition = "none";
    counter = 0;
    searchUl.style.transform = `translateY(-${counter * liHeight}px)`;
  }
}, 2000);

export { loadDatas, recomKeywordURL };
