const express = require("express");
const router = express.Router();
const Uploader = require("../utils/upload.js");

let upld = new Uploader();

router.post("/upload", function (req, res) {
  if (upld.checkStatus()) {
    res.status(200);
    res.send({ Message: "Upload in progress" });
  } else {
    upld.startUpload();
    res.status(201);
    res.send({ Message: "Upload Started" });
  }
});

router.post("/upload/pause", function (req, res) {
  if (upld.checkStatus()) {
    upld.pause();
    res.status(200);
    res.send({ Message: "Upload Paused" });
  } else {
    res.status(400);
    res.send({ Message: "Upload process has not started yet" });
  }
});

router.post("/upload/resume", function (req, res) {
  if (upld.checkStatus()) {
    upld.resume();
    res.status(200);
    res.send({ Message: "Upload Resumed" });
  } else {
    res.status(400);
    res.send({ Message: "Upload process has not started yet" });
  }
});

router.post("/upload/terminate", async function (req, res) {
  if (upld.checkStatus()) {
    upld.pause();
    upld.terminate();
    res.send({ Message: "Upload Terminated" });
  } else {
    res.status(400);
    res.send({ Message: "Upload process has not started yet" });
  }
});

module.exports = router;
