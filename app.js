const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
const fs = require("fs");

let homeContents = {};
let planningEvent = {};
homeContents = JSON.parse(
  fs.readFileSync("./public/data/homeContents.json", "utf8")
);
planningEvent = JSON.parse(
  fs.readFileSync("./public/data/planningEvent.json", "utf8")
);

app.get("/homeContents.json", (req, res, next) => {
  res.json(homeContents);
});

app.get("/planningEvent.json", (req, res, next) => {
  res.json(planningEvent);
});

//static files

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentSyntax: false, //true= sass false scss
    sourceMap: true,
    outputStyle: "compressed",
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, res) => {
  res.render("index");
});

// Listen on port 3000
app.listen(port, () =>
  console.info(`Listening on port http://localhost:${3000}`)
);
