const functions = require('firebase-functions');

console.log("Value of ENV:", process.env.ENV)

exports.test = functions.https.onRequest(async (req, res) => {
  console.log("Value of ENV:", process.env.ENV)
  res.send()
});