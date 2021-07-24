import 'dotenv/config';
import express from 'express';

import { MongoConnection } from './database/MongoConnection';

import { URLController } from './controller/URLController';

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const port = process.env.PORT || 8080;

const urlController = new URLController();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(port, () => {
	console.log(`API listening in port ${port}`);
});
