import express from 'express';
import cors from 'cors';

import routes from '../api';
import config from '../config';

export default ({ app }: { app: express.Application }) => {
	app.get('/', (req, res) => {
		res.send({ msg: '/ HOME' }).status(200).end();
	});
	app.head('/', (req, res) => {
		res.status(200).end();
	});

	app.enable('trust proxy');
	app.use(cors());
	app.use(express.json());
	app.use(config.api.prefix, routes());
};
