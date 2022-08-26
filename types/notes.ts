interface Note {
  note: string;
  index: number;
}

interface NotesLine {
  index: number;
  notes: Note[];
  length: number;
}

export { NotesLine, Note };