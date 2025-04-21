const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.array("files"), (req, res) => {
  res.json(req.files);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
