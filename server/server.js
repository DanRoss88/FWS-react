const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.status(200).json("Success");
}
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});