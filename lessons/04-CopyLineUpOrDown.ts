// Copy Line Up/Down: Shift+Alt + ↓ / ↑

/**
 * Exercise 1: Map the rest of the Date fields to DateTime fields
 */

/**
 * ❗❗❗
 * WARNING THIS EXERCISE IS MORE DIFFICULT/INVOLVED 😁
 * ❗❗❗
 */

// 1. Highlight the section of code that you would like to copy to a new line (lines 19-21)
// 2. Copy those lines 3 times (1 for each new field we need to map) (Press "Shift+Alt+↓")
// 3. For each field change the name of the "mappedExercise1Shipment" object key and the field that you are mapping from exercise1Shipment
//    3a. Example: change "earlyPickup" to "latePickup" on line 21 and "earlyPickupDate" to "latePickupDate" on lines 22 and 23
//    3b. You can do this quickly by utilizing the Add Selection To Next Find Match Shortcut ("Ctrl+D")

const exercise1Shipment = {
  earlyPickupDate: '2021-07-08',
  latePickupDate: '2021-07-12',
  earliestPickupDate: '2021-07-07',
  latestPickupDate: '2021-07-13',
};

const mappedExercise1Shipment = {
  earlyPickup: {
    date: exercise1Shipment.earlyPickupDate,
    dateTime: new Date(exercise1Shipment.earlyPickupDate).toISOString(),
  },
};

/**
 * Exercise 1 Solution (this is what you final mappedExercise1Shipment should look like)
 */

const mappedExercise1ShipmentSolution = {
  earlyPickup: {
    date: exercise1Shipment.earlyPickupDate,
    dateTime: new Date(exercise1Shipment.earlyPickupDate).toISOString(),
  },
  latePickup: {
    date: exercise1Shipment.latePickupDate,
    dateTime: new Date(exercise1Shipment.latePickupDate).toISOString(),
  },
  earliestPickup: {
    date: exercise1Shipment.earliestPickupDate,
    dateTime: new Date(exercise1Shipment.earliestPickupDate).toISOString(),
  },
  latestPickup: {
    date: exercise1Shipment.latestPickupDate,
    dateTime: new Date(exercise1Shipment.latestPickupDate).toISOString(),
  },
};

export { mappedExercise1Shipment, mappedExercise1ShipmentSolution };
