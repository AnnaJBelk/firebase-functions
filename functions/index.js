/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {helloWorld} = require("./helloWorld.js");
const {addNumbers} = require("./addNumbers.js");

exports.helloWorld = helloWorld;
exports.addNumbers = addNumbers;
