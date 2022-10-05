const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/users/:id/update", (res, rej) => {
  setTimeout(() => {
    res.send(req.body);
  }, [2000]);
});

app.listen(5000, () => {
  console.log("Connected Backend");
});
