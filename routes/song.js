const express = require('express');
const router = express.Router();
const songs = require('../../data/songs.json');

router.get('/', (req, res) => res.json(songs));
router.get('/:id', (req, res) => {
  const song = songs.find(s => s.id === parseInt(req.params.id));
  if (!song) return res.status(404).json({ message: 'Song not found' });
  res.json(song);
});

module.exports = router;
