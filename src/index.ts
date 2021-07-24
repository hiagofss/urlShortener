import 'dotenv/config';
import express from 'express';

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (request, response) => {
	response.send('Hello World!');
});

app.listen(port, () => {
	console.log(`API listening in port ${port}`);
});
