const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

router.post('/', async (req, res) => {
  const note = new Note(req.body);
  try {
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;