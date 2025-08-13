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

const chords = {
  "C": { frets: ["x", "3", "2", "0", "1", "0"], fingers: ["x", "3", "2", "0", "1", "0"] },
  "G": { frets: ["3", "2", "0", "0", "0", "3"], fingers: ["2", "1", "0", "0", "0", "3"] },
  "Am": { frets: ["x", "0", "2", "2", "1", "0"], fingers: ["x", "0", "2", "2", "1", "0"] }
};

app.get('/api/songs', (req, res) => res.json(songs));
app.get('/api/chords', (req, res) => res.json(chords));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
