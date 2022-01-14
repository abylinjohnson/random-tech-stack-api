const fs = require("fs");
const express = require("express");
const app = express();
const data = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
const randomStack = (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      frontend:
        data[0]["frontend"][
          Math.floor(Math.random() * data[0]["frontend"].length)
        ],
      backend:
        data[0]["backend"][
          Math.floor(Math.random() * data[0]["backend"].length)
        ],
      database:
        data[0]["database"][
          Math.floor(Math.random() * data[0]["database"].length)
        ],
    },
  });
};

app.route("/").get(randomStack);
const port = 3000;
app.listen(port, () => {
  console.log("Server running on port 3000....");
});
