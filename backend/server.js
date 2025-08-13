const express = require('express');
const cors = require('cors');
const songRoutes = require('./src/routes/songs');
const chordRoutes = require('./src/routes/chords');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/songs', songRoutes);
app.use('/api/chords', chordRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
