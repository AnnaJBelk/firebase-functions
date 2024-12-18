/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");

exports.addNumbers = onRequest((req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send("Invalid numbers");
    return;
  }

  res.send(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
});

/*
Local Test in Browser (Before Deployment)
firebase emulators:start     (in terminal)
us-central1: default for firebase functions

http://127.0.0.1:5001/mit-24-3-study-github-actions/us-central1/addNumbers?num1=3&num2=5

Test in Browser (After Deployment)
https://us-central1-<project-id>.cloudfunctions.net/addNumbers?num1=3&num2=5

https://us-central1-mit-24-3-study-github-actions.cloudfunctions.net/addNumbers?num1=3&num2=5
*/
