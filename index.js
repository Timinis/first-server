const express = require('express');
const app = express();
app.use(express.json());

let array = ['apple', 'banana', 'cat', 'dog', 'car'];
let contactInfo = [
  { name: 'tim', phone: '123' },
  { name: 'ali', phone: '456' },
  { name: 'mustaf', phone: '789' },
  { name: 'ahmed', phone: '001' },
  { name: 'samson', phone: '002' }
];

app.get('/hello', (request, response) => {
  response.send('hello there');
});

app.get('/object', (request, response) => {
  const object = { foo: 'bar', baz: 'code' };
  const sendingJSON = JSON.stringify(object);
  response.send(sendingJSON);
});

app.get('/array', (request, response) => {
  if (request.query.item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === request.query.item) {
        response.send(array[i]);
      }
    }
    response.send('cannot find item');
  }

  if (!request.query.item) {
    response.send(array);
  }
});

app.get('/phonebook', (request, response) => {
  if (request.query.person) {
    for (let i = 0; i < contactInfo.length; i++) {
      if (contactInfo[i].name === request.query.person) {
        return response.send(contactInfo[i].phone);
      }
    }
    return response.send(`cannot find person`);
  }
  return response.send('please enter a person query parameter');
});

app.post('/addtoarray', (request, response) => {
  array.push(request.body.item);
  response.send(array);
});

app.put('/updatePhonebook', (request, response) => {
  for (let i = 0; i < contactInfo.length; i++) {
    if (contactInfo[i].name === request.body.name) {
      contactInfo[i].phone = request.body.newNumber;
      console.log(contactInfo);
      return response.send('updated number successfully');
    }
  }
  return response.send('cannot find name please try again');
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
