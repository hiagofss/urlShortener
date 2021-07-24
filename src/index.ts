import 'dotenv/config';
import express from 'express';

import { router } from './routes';
import { MongoConnection } from './database/MongoConnection';

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const port = process.env.PORT || 8080;

app.use(router);

app.listen(port, () => {
	console.log(`API listening in port ${port}`);
});
