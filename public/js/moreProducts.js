class MoreProducts {
  constructor() {
<<<<<<< HEAD
=======
    //
>>>>>>> aaa55f3... [first commit] 이전 html, css 저장 및 express환경 새로 구축
    this.rawData = {};
    this.seeMoreBtn = document.querySelector(".section_products_seeMore");
    this.addEvents();
  }

  loadItems() {
    return fetch("http://localhost:3000/homeContents.json").then((data) =>
      data.json()
    );
  }
  getHtmlWithData(datas, start, end) {
    let string = "";
    for (let i = start; i < end; i++) {
      string += `<li>
          <img src="${datas[i].eventContent.imgurl}"></img>
          <span class="ellipsis">${datas[i].eventContent.title}</span>
          <span>${datas[i].eventContent.subtitle}</span>
          <span class="span_theme">테마</span>
          </li>`;
    }
    return string;
  }

  renderHTML() {
    this.loadItems().then((v) => {
      document.querySelector(
        ".section_products_list"
      ).innerHTML = this.getHtmlWithData(v.contents, 0, 5);
      this.rawData = v.contents;
    });
  }
  addEvents() {
    this.seeMoreBtn.addEventListener("click", () => {
      if (this.seeMoreBtn.innerHTML === "더보기 ▼") {
        document.querySelector(
          ".section_products_list"
        ).innerHTML += this.getHtmlWithData(this.rawData, 5, 10);
        this.seeMoreBtn.innerHTML = "접기 ▲";
      } else if (this.seeMoreBtn.innerHTML === "접기 ▲") {
        document.querySelector(
          ".section_products_list"
        ).innerHTML = this.getHtmlWithData(this.rawData, 0, 5);
        this.seeMoreBtn.innerHTML = "더보기 ▼";
      }
    });
  }
}

<<<<<<< HEAD
export { MoreProducts };
=======
const mBtn = new MoreProducts();
mBtn.renderHTML();
>>>>>>> aaa55f3... [first commit] 이전 html, css 저장 및 express환경 새로 구축
