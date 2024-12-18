/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

/*
Local Test in Browser (Before Deployment)
firebase emulators:start     (in terminal)
us-central1: default for firebase functions

http://127.0.0.1:5001/mit-24-3-study-github-actions/us-central1/helloWorld

Test in Browser (After Deployment)
https://us-central1-<project-id>.cloudfunctions.net/helloWorld

https://us-central1-mit-24-3-study-github-actions.cloudfunctions.net/helloWorld

*/
