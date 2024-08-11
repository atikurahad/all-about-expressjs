const express = require("express");
const app = express();
const PORT = 3001;

const router = express.Router();
app.use(router);
router.get("/", (req, res) => {
  res.end();
});
router.get("/about", (req, res) => {
  res.send('I am working on ecommerce projects')
  res.end();
});
router.get("/contact", (req, res) => {
  res.send('Please contact hotline:8810965');
});

router.post("/", (req, res) => {
  res.end("Hello EXPRESS, I am from Post");
});
router.put("/", (req, res) => {
  res.end("Hello EXPRESS, I am from put");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
