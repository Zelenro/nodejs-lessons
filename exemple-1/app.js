const express = require('express');

const app = express();

app.get('/', (request, response) => {
	console.log(request.url);
	console.log(request.method);
	response.send('<h1>Home page</h1>');
});

app.get('/contacts', (request, response) => {
	console.log(request.url);
	console.log(request.method);
	response.send('<h1>Contacts page</h1>');
});

app.listen(3000, () => console.log('Server running 3000 PORT'));
