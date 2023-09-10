const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, function (err) {
  if (err) {
    console.error(`ERROR WITH STARTING THE SERVER: ${err}`);
  }

  console.log(`SERVER LISTING AT PORT ${PORT}`);
});
