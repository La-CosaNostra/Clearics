const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Sample song data (expandable to database)
const songs = [
  {
    id: 1,
    title: "Sample Song",
    artist: "Sample Artist",
    lyrics: "[C]Hello [G]world, [Am]this is a [F]test.\n[G]Another [C]line here."
  }
];

// API endpoint to get songs
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on [invalid url, do not cite]);
});
