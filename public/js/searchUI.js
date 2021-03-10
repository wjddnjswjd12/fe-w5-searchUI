import { _ } from "./utils.js";

const recomKeywordURL =
  "https://shoppinghow.kakao.com/v1.0/shophow/top/recomKeyword.json";

const searchUl = _.$(".area_top__recomList");
const ulDiv = _.$(".area_top__search_recRoll");
const leftOL = _.$(".recBox_leftOL");
const rightOL = _.$(".recBox_rightOL");
const searchDiv = _.$(".area_top__search");
const searchInput = _.$(".area_top__search_input");
const searchRecBox = _.$(".area_top__search_recBox");

const liHeight = 37;
let counter = 0;

const loadDatas = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((res) => res.list)
    .then((result) => {
      makeHTML(result);
      renderRecomBox(result);
    });
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

const getRecomBoxData = (datas, start, end) => {
  //클릭하면 추천검색어 뜨게하는 function
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(datas[i].keyword);
  }

  return arr.reduce((acc, curr, i) => {
    acc += `<li class="recomList_li"><span class="recomList_num">${
      i + 1 + start
    }</span> ${curr}</li>`;
    return acc;
  }, "");
};

const renderRecomBox = (datas) => {
  leftOL.innerHTML = getRecomBoxData(datas, 0, 5);
  rightOL.innerHTML = getRecomBoxData(datas, 5, 10);
};

ulDiv.addEventListener("click", (e) => {
  searchUl.classList.toggle("flex");
  searchDiv.classList.toggle("border_red");
  searchInput.focus();
  searchRecBox.classList.toggle("none");
  e.stopPropagation();
});

_.$("body").addEventListener("click", (e) => {
  searchUl.classList.add("flex");
  searchDiv.classList.remove("border_red");
  searchRecBox.classList.add("none");
  searchInput.blur();
});

searchInput.addEventListener("input", () => {
  _.$(".area_top__search_recBox").innerHTML = "";
});

export { loadDatas, recomKeywordURL };
