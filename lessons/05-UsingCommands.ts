// Show Command Palette: Ctrl+Shift+P

/**
 * Exercise 1: Place the fields of the object in ascending order
 */

// 1. Highlight the fields that you would like to shortcut (lines 14-20)
// 2. Open the Command Palette (Press "Ctrl+Shift+P")
// 3. Type "Sort" in the Command Palette
// 4. Highligh "Sort Lines Ascending" with your cursor (Press "↓")
// 5. Press Enter

const exercise1 = {
  f: true,
  d: true,
  g: true,
  c: true,
  a: true,
  b: true,
  e: true,
};

/**
 * Exercise 2: Capitalize the first letter of each field
 */

// 1. Get a cursor on each line of the object (multiple ways to do this. An example would be to highight the first ": " (colon WITH SPACE)) symbol and press "Ctrl+D" until each line has a cursor)
// 2. Bring the cursor to the beginning of the line (Press "Home")
// 3. Highlight the first letter in each line (Press "Shift+→")
// 4. Open the Command Palette (Press "Ctrl+Shift+P")
// 5. Type "Uppercase" in the Command Palette
// 6. Highlight "Transform To Uppercase" with your cursor
// 7. Press Enter

const exercise2 = {
  contentType: '',
  data: {
    status: 'ACCEPT',
    externalObjectId: 'AC00611477',
    processingDate: '2021-06-01T20:30:13.285Z',
    messageId: 'b3b3d968-19d1-4d2c-8ef4-76e0abc099fe',
    tenderWorkflowId: 'some-dummy-value',
    sourceSystem: 'LTC',
    tenderId: '3081545',
  },
  dateTime: '2021-06-01T20:30:18.827Z',
  source: 'com.kochind.kaes.ksg.logistics',
  version: '',
  type: 'com.kochind.kaes.tender.response.received',
  id: '278179f4-983c-41b7-9128-74222a8dd3cf',
};

/**
 * Exercise 3: Remove Duplicate Release Numbers
 */

// 1. Install the DupChecker Plugin (Press "Ctrl+Shift+X" and paste "jianbingfang.dupchecker" in the search bar)
// 2. Highlight the lines that you would like to check for duplicates in (68-75)
// 3. Open the Command Palette (Press "Ctrl+Shift+P")
// 4. Type "Duplicate" in the Command Palette
// 5. Highlight "Check Duplicates" with your cursor
// 6. Press Enter
// 7. In the bottom right of VSCode a popup will say "3 duplicates found, need to remove them?" Press "Yes"

const exercise3 = `
  SELECT * FROM Order_Realease__C
  WHERE Release_Number__C IN (
    123,
    111,
    777,
    777,
    123,
    111,
    777,
    999
  )
`;

export { exercise1, exercise2, exercise3 };
