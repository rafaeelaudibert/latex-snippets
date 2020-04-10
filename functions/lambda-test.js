/* code from functions/todos-create.js */
const faunadb = require('faunadb') /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log("Function  invoked", data)

  /* Success! return the response with statusCode 200 */
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })

}