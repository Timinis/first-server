const express = require('express');
const app = express();

app.get('/hello', (request, response) => {
  response.send('hello there');
});

app.get('/object', (request, response) => {
  const object = { foo: 'bar', baz: 'code' };
  const sendingJSON = JSON.stringify(object);
  response.send(sendingJSON);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
