import { _ } from "./utils.js";

const recomKeywordURL =
  "https://shoppinghow.kakao.com/v1.0/shophow/top/recomKeyword.json";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
const searchUl = _.$(".area_top__recomList");
const ulDiv = _.$(".area_top__search_recRoll");
const leftOL = _.$(".recBox_leftOL");
const rightOL = _.$(".recBox_rightOL");
const searchDiv = _.$(".area_top__search");
const searchInput = _.$(".area_top__search_input");
const searchRecBox = _.$(".area_top__search_recBox");

<<<<<<< HEAD
<<<<<<< HEAD
const liHeight = 37;
let counter = 0;

<<<<<<< HEAD
>>>>>>> 1b17b97... [add] setInterval function to move searchUI
const loadDatas = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((res) => res.list)
<<<<<<< HEAD
    .then((result) => makeHTML(result));
>>>>>>> 589b5be... [add] ul in html and make li by javascript
=======
    .then((result) => {
      makeHTML(result);
      renderRecomBox(result);
    });
>>>>>>> 0133fc7... [add] eventListener on searchBox
=======
=======
>>>>>>> bc4598d... [refactor] prReview: change setInterval to setTimeout
=======
>>>>>>> 16e81ed... conflict test
const loadDatas = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};

const renderSearchRecom = async () => {
  const datas = await loadDatas(recomKeywordURL);
  makeHTML(datas.list);
  renderRecomBox(datas.list);
<<<<<<< HEAD
  startRolling();
>>>>>>> 21f3c32... [refactor] PR review:  use async await
=======
  startRolling(datas.list);
<<<<<<< HEAD
>>>>>>> bc4598d... [refactor] prReview: change setInterval to setTimeout
=======
>>>>>>> 16e81ed... conflict test
};

const makeHTML = (datas) => {
  //Ul, Li 만드는 부분...s
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  let recomUlinnerHtml = "";
  const recomUl = _.$(".area_top__recomList");
  datas.forEach(
    (data, i) => (recomUlinnerHtml += `<li> ${i + 1}  ${data.keyword}</li>`)
  );
  recomUl.innerHTML = recomUlinnerHtml + getFirstLi(datas);
=======
  let str = "";
  const recomUl = _.$(".area_top__recomList");
  datas.forEach((data, i) => (str += `<li> ${i + 1}  ${data.keyword}</li>`));
<<<<<<< HEAD
  recomUl.innerHTML = str;
>>>>>>> 589b5be... [add] ul in html and make li by javascript
=======
  recomUl.innerHTML = str + getFirstLi(datas);
>>>>>>> 1b17b97... [add] setInterval function to move searchUI
=======
=======
>>>>>>> 16e81ed... conflict test
  let recomUlinnerHtml = "";
  const recomUl = _.$(".area_top__recomList");
  datas.forEach(
    (data, i) => (recomUlinnerHtml += `<li> ${i + 1}  ${data.keyword}</li>`)
  );
  recomUl.innerHTML = recomUlinnerHtml + getFirstLi(datas);
<<<<<<< HEAD
>>>>>>> 21f3c32... [refactor] PR review:  use async await
=======
>>>>>>> 16e81ed... conflict test
};

const getFirstLi = (datas) => {
  //
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

export { renderSearchRecom };
=======
  return `<li>${datas[0]}</li>`;
=======
  return `<li id="firstClone"> 1  ${datas[0].keyword}</li>`;
>>>>>>> 1b17b97... [add] setInterval function to move searchUI
};
=======
  return `<li id="firstClone"> 1  ${datas[0].keyword}</li>`;
};
>>>>>>> 16e81ed... conflict test

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

<<<<<<< HEAD
export { loadDatas, recomKeywordURL };
>>>>>>> 589b5be... [add] ul in html and make li by javascript
=======
export { renderSearchRecom };
<<<<<<< HEAD
>>>>>>> 21f3c32... [refactor] PR review:  use async await
=======
>>>>>>> 16e81ed... conflict test
