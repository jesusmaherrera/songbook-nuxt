# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.


// let lines_html: string[] = [];
  // let line_notes: Note[] = [];
  // let line_notes_length: number = null;

  // lines.forEach(function (line: any) {
  //   const isNotesLine = line.indexOf("  ") !== -1;
  //   if (!isNotesLine) {
  //     const isLongest = line.length < line_notes_length;
  //     if (line_notes_length !== null && isLongest) {
  //       const diferenceLength = line_notes_length - line.length;
  //       for (let index = 0; index < diferenceLength; index++) {
  //         line += " ";
  //       }
  //     }
  //     if (line_notes.length !== 0) {
  //       let extraLength = 0;
  //       line_notes.forEach((line_note) => {
  //         const baseLetter = line[line_note.index + extraLength];
  //         const newString = `<span class="relative">${baseLetter}<span class="absolute -top-5 left-0 text-red-600 text-sm font-semibold">${line_note.note}</span></span>`;
  //         const startString = line.substring(0, line_note.index + extraLength);
  //         const endString = line.substring(line_note.index + extraLength + 1);
  //         line = startString + newString + endString;
  //         extraLength += newString.length - 1;
  //       });
  //     }
  //     line += "<br />";
  //     if (line_notes.length > 0) line += "<br />";
  //     lines_html.push(line);
  //     line_notes = [];
  //     line_notes_length = null;
  //   }
  //   if (isNotesLine) {
  //   }
  // });
  // const returnValue = lines_html.join("");
  // return returnValue;