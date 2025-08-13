const express = require('express');
const router = express.Router();
const chords = require('../../data/chords.json');

router.get('/', (req, res) => res.json(chords));

module.exports = router;
