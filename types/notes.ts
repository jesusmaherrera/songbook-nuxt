interface Note {
  note: string;
  index: number;
}

interface NotesLine {
  index: number;
  notes: Note[];
  length: number;
}
interface Line {
  notes: Note[],
  notesText: string,
  line: string,
}

export { NotesLine, Note, Line };