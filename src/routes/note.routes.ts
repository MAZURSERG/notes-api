import type { Router } from "express";

const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require("../controllers/note.controller");
const { validateResource } = require("../middlewares/validateResource");
const {
  createNoteSchema,
  updateNoteSchema
} = require("../schemas/note.schema");

const router: Router = express.Router();

router.post("/notes", validateResource(createNoteSchema), createNote);
router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", validateResource(updateNoteSchema), updateNote);
router.delete("/notes/:id", deleteNote);

// ВАЖНО: экспортируем сам router, а не объект { router }
module.exports = router;
export {};
