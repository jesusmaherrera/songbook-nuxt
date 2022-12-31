import { Note, NotesLine, Line } from "~~/types/notes";

// function getLineNotes (line, index) {
//    let notesLine: NotesLine = {
//       index: index,
//       length: line.length,
//       notes: [],
//     } as NotesLine;

//     let note = "";
//     let currentNote: Note = { note: "", index: null } as Note;

//     for (var letterIndex in line) {
//       const isLastIndex = Number(letterIndex) === line.length - 1;
//       const currentValue = line[letterIndex];
//       const hasCurrentValue: boolean = currentValue != " ";

//       if (hasCurrentValue) {
//         if (currentNote.index === null) {
//           currentNote.index = Number(letterIndex);
//         }
//         currentNote.note += currentValue;

//         if (isLastIndex) {
//           return currentNote;
//         }
//       } else if (currentNote.index != null || isLastIndex) {
//         var lastNote = currentNote
//         note = "";
//         currentNote = { note: "", index: null } as Note;
//         return lastNote;
//       }
//     }
// }

// function getNoteLines(lines: any): NotesLine[] {
//   let notesLines: NotesLine[] = [];

//   lines.forEach(function (line: any, index: number) {
//     const isNotesLine = line.indexOf("  ") !== -1;
//     if (!isNotesLine) return;

//     let lineNotes = getLineNotes(line, index)
//     notesLines.push(lineNotes);
//   });

//   return notesLines;
// }

function getNotes(line: string): Note [] {
  let notes: Note[] = []

  let currentNote: Note = { note: "", index: null } as Note;
  let note = "";
  [...line].forEach((charValue, index) => {
     console.log(charValue, index)
     const isLastIndex = Number(index) === line.length - 1;
     const currentValue = line[index];
     const hasCurrentValue: boolean = currentValue != " ";
     if (hasCurrentValue) {
        if (currentNote.index === null) {
          currentNote.index = Number(index);
        }
        currentNote.note += currentValue;

        if (isLastIndex) {
          notes.push(currentNote);
          return ;
        }
      } else if (currentNote.index != null || isLastIndex) {
        var lastNote = currentNote
        note = "";
        currentNote = { note: "", index: null } as Note;
        notes.push(lastNote);
      }
  })
   
    // for (var letterIndex in line) {
    //   const isLastIndex = Number(letterIndex) === line.length - 1;
    //   const currentValue = line[letterIndex];
    //   const hasCurrentValue: boolean = currentValue != " ";

    //   if (hasCurrentValue) {
    //     if (currentNote.index === null) {
    //       currentNote.index = Number(letterIndex);
    //     }
    //     currentNote.note += currentValue;

    //     if (isLastIndex) {
    //       return currentNote;
    //     }
    //   } else if (currentNote.index != null || isLastIndex) {
    //     var lastNote = currentNote
    //     note = "";
    //     currentNote = { note: "", index: null } as Note;
    //     return lastNote;
    //   }
    // }
  return notes
}

function getNotesFromLine(line: any): NotesLine {
    let notesLine: NotesLine = {
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

    return notesLine;
}

function getLines (lines: any): string {
    let lastNotesLine:string = null
    let linesList: Line[] = [];
    lines.forEach(function (line: any, index: number) {
        const isNotesLine = line.indexOf("  ") !== -1;
        if (isNotesLine) {
            lastNotesLine = line
            return
        }
        let notes: Note[] = getNotes(lastNotesLine) 
        linesList.push({
          notes: notes,
          notesText: lastNotesLine,
          line: line
        } as Line)
        lastNotesLine = ""

    })
    let htmlstring = ""
    debugger
    linesList.forEach(function (line: any, index: number) {
       htmlstring += '<span style="color: red">' + line.notesText + '</span><br>' + line.line + '<br>' 
    })

    return htmlstring 
  }

export { getLines }