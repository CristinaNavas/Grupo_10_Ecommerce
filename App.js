const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(3100, () => {
    console.log("Servidor corriendo en Http://localhost:3100");
  });


app.get("/", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
});



app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/Index.html");
    res.sendFile(htmlPath);
  });

app.get("/login", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/login.html");
  res.sendFile(htmlPath);
});

app.get("/register", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/register.html");
  res.sendFile(htmlPath);
});
app.get("/productCart", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/productCart.html");
    res.sendFile(htmlPath);
  });
  app.get("/productDetail.html", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/productDetail.html");
    res.sendFile(htmlPath);
  });