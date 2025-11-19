import mongoose, { Document, Schema } from "mongoose";

export interface NoteDocument extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<NoteDocument>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

export const NoteModel = mongoose.model<NoteDocument>("Note", noteSchema);
