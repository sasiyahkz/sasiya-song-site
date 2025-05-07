const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const songs = [
  {
    id: 1,
    title: "Sample Song 1",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    download: "https://www.example.com/sample1.mp3",
  },
  {
    id: 2,
    title: "Sample Song 2",
    video: "https://www.w3schools.com/html/movie.mp4",
    download: "https://www.example.com/sample2.mp3",
  },
];

app.get("/api/songs", (req, res) => {
  const search = req.query.q?.toLowerCase() || "";
  const filtered = songs.filter((song) => song.title.toLowerCase().includes(search));
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`Sasiya Song API running on port ${port}`);
});
