const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const UploadRoutes = require("./routes/upload_routes.js");
const DownloadRoutes = require("./routes/dowanload_routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(UploadRoutes);
app.use(DownloadRoutes);

app.listen(port, function () {
  console.log("APP IS RUNNING ON PORT " + port);
});
