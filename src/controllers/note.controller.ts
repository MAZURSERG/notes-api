import { Request, Response, NextFunction } from "express";
import { NoteModel } from "../models/note.model";

export async function createNote(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, content } = req.body;

    const note = await NoteModel.create({ title, content });
    return res.status(201).json(note);
  } catch (err) {
    next(err);
  }
}

export async function getNotes(_req: Request, res: Response, next: NextFunction) {
  try {
    const notes = await NoteModel.find().sort({ createdAt: -1 });
    return res.json(notes);
  } catch (err) {
    next(err);
  }
}

export async function getNoteById(req: Request, res: Response, next: NextFunction) {
  try {
    const note = await NoteModel.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.json(note);
  } catch (err) {
    next(err);
  }
}

export async function updateNote(req: Request, res: Response, next: NextFunction) {
  try {
    const note = await NoteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.json(note);
  } catch (err) {
    next(err);
  }
}

export async function deleteNote(req: Request, res: Response, next: NextFunction) {
  try {
    const note = await NoteModel.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}
