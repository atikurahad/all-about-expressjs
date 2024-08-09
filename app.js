const express = require("express");
const app = express();
const PORT = 3001;

const router = express.Router();
app.use(router);
router.get("/", (req, res) => {
  res.end();
});
router.get("/about", (req, res) => {
  res.cookie("name","Bangladesh");
  res.end();
});
router.post("/", (req, res) => {
  res.end("Hello EXPRESS, I am from Post");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
