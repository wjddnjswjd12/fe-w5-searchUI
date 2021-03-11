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

const loadDatas = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};

const renderSearchRecom = async () => {
  const datas = await loadDatas(recomKeywordURL);
  makeHTML(datas.list);
  renderRecomBox(datas.list);
  startRolling(datas.list);
};

const makeHTML = (datas) => {
  let recomUlinnerHtml = "";
  const recomUl = _.$(".area_top__recomList");
  datas.forEach(
    (data, i) => (recomUlinnerHtml += `<li> ${i + 1}  ${data.keyword}</li>`)
  );
  recomUl.innerHTML = recomUlinnerHtml + getFirstLi(datas);
};

const getFirstLi = (datas) => {
  return `<li id="firstClone"> 1  ${datas[0].keyword}</li>`;
};

const startRolling = (datas) => {
  const liHeight = 37;
  let counter = 0;

  const roll = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        searchUl.style.transition = "transform 0.3s ease-in-out";
        counter++;
        searchUl.style.transform = `translateY(-${counter * liHeight}px)`;
        if (counter === 13) {
          searchUl.style.transition = "none";
          counter = 0;
          searchUl.style.transform = `translateY(-${counter * liHeight}px)`;
        }
        resolve();
      }, 2000)
    );

  searchUl.style.transform = `translateY(-${counter * liHeight}px)`;
  // (1) test를 async로 감싸는 대신, for문을 async 즉시실행함수로 감싸도 된다
  (async () => {
    while (1) {
      await roll();
    }
  })();
};

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
  searchUl.classList.remove("flex");
  searchDiv.classList.add("border_red");
  searchInput.focus();
  searchRecBox.classList.remove("none");
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

function requestJsonp(word, callback) {
  const script = document.createElement("script");
  script.src = `https://suggest-bar.daum.net/suggest?callback=${callback}&limit=10&mode=json&code=utf_in_out&q=${word}&id=shoppinghow_suggest`;
  document.body.appendChild(script);
}

window["responseJsonpData"] = function (data) {
  console.log(data);
};

ulDiv.addEventListener("click", (e) => {
  searchUl.classList.remove("flex");
  searchDiv.classList.add("border_red");
  searchInput.focus();
  searchRecBox.classList.remove("none");
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

export { renderSearchRecom, requestJsonp };
