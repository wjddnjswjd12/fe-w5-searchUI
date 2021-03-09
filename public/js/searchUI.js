import { _ } from "./utils.js";

const recomKeywordURL =
  "https://shoppinghow.kakao.com/v1.0/shophow/top/recomKeyword.json";

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
  recomUl.innerHTML = str;
};

const getFirstLi = (datas) => {
  //
  return `<li>${datas[0]}</li>`;
};
const getLastLi = () => {
  //
};

export { loadDatas, recomKeywordURL };
