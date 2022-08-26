import { Note, NotesLine } from "~~/types/notes";

function getNoteLines(lines: any): NotesLine[] {
  let notesLines: NotesLine[] = [];

  lines.forEach(function (line: any, index: number) {
    const isNotesLine = line.indexOf("  ") !== -1;

    if (isNotesLine) {
      let notesLine: NotesLine = {
        index: index,
        length: line.length,
        notes: [],
      } as NotesLine;

      let note = "";
      let currentNote: Note = { note: "", index: null } as Note;

      for (var letterIndex in line) {
        const isLastIndex = Number(letterIndex) === line.length - 1;
        const currentValue = line[letterIndex];
        const hasCurrentValue: boolean = currentValue != " ";

        if (hasCurrentValue) {
          if (currentNote.index === null) {
            currentNote.index = Number(letterIndex);
          }
          currentNote.note += currentValue;

          if (isLastIndex) {
            notesLine.notes.push(currentNote);
          }
        } else if (currentNote.index != null || isLastIndex) {
          notesLine.notes.push(currentNote);
          note = "";
          currentNote = { note: "", index: null } as Note;
        }
      }
      notesLines.push(notesLine);
    }
  });

  return notesLines;
}

export { getNoteLines }