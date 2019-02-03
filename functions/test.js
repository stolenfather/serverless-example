exports.handler = function(event, context, callback) {
  const { name } = JSON.parse(event.body)

  if (name === 'test') {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `Thanks for visiting ${name}` }),
    })
  } else {
    callback(new Error("You're not the test!"))
  }
}
