const express = require("express");
const router = express.Router();
const Downloader = require("../utils/download.js");
let dnld = new Downloader();

router.post("/download", function (req, res) {
  if (dnld.fileExists()) {
    if (dnld.checkStatus()) {
      res.status(200);
      res.send({ Message: "Download in progress" });
    } else {
      dnld.startDownload();
      res.status(201);
      res.send({ Message: "Download process started" });
    }
  } else {
    res.status(400);
    res.send({ Message: "Invalid Request, File doesn't exists" });
  }
});

router.post("/download/pause", function (req, res) {
  if (dnld.checkStatus()) {
    dnld.pause();
    res.status(200);
    res.send({ Message: "Download Paused" });
  } else {
    res.status(400);
    res.send({ Message: "Download process has not started yet" });
  }
});

router.post("/download/resume", function (req, res) {
  if (dnld.checkStatus()) {
    dnld.resume();
    res.status(200);
    res.send({ Message: "Download Resumed" });
  } else {
    res.status(400);
    res.send({ Message: "Download process has not started yet" });
  }
});

router.post("/download/terminate", function (req, res) {
  if (dnld.checkStatus()) {
    dnld.pause();
    dnld.terminate();
    res.send({ Message: "Download Terminated" });
  } else {
    res.status(400);
    res.send({ Message: "Download process has not started yet" });
  }
});

module.exports = router;
