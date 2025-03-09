const mongoose = require("mongoose");
const app = require("./app");

// connection to the database-------------------------------------------------------
const db = "mongodb://localhost:27017/bountybalance";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to database eshtablished 😀🔥");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 8000;
//server start----------------------------------------------------------------------
app.listen(port, () => {
  console.log("Server started ✔️");
});
