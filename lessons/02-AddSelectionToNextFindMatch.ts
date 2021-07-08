// Add Selection To Next Find Match: Ctrl+D

// make sure you have the "case matching" on which is in the top right corner of VSCode after you press "Ctrl+D" for the first time

/**
 * Exercise 1: Delete All of the fields that start with "deleteMe"
 */

// 1. select all of the keys that start with "deleteMe" (highlight "deleteMe" on the first item and then press "Ctrl+D" until you have all the items selected)
// 2. bring the curser to the start of the line (Press "Home")
// 3. select the text to the end of the line (Press "Shift+End")
// 4. delete the text, spaces, and new line characters (Press "Backspace" repeatedly)

const exercise1 = {
  deleteMe1: null,
  dontDeleteMe1: null,
  deleteMe2: null,
  deleteMe3: null,
  dontDeleteMe2: null,
  dontDeleteMe3: null,
  deleteMe4: null,
  dontDeleteMe4: null,
};

/**
 * Exercise 2: Delete All of the fields that start with "deleteMe" while also using the "Delete Line" shortcut
 */

// 1. select all of the keys that start with "deleteMe" (highlight "deleteMe" on the first item and then press "Ctrl+D" until you have all the items selected)
// 2. delete the lines that each of your cursors are on (Press "Ctrl+Shift+K")

const exercise2 = {
  reallyDeleteMe1: null,
  dontDeleteMe1: null,
  reallyDeleteMe2: null,
  reallyDeleteMe3: null,
  dontDeleteMe2: null,
  dontDeleteMe3: null,
  reallyDeleteMe4: null,
  dontDeleteMe4: null,
};

// As a side note, if you over-press "Ctrl+D" and you select too many items you can press "Ctrl+U" to undo your previous cursor selection action

export { exercise1, exercise2 };
