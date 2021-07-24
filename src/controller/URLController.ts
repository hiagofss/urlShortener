import { Request, Response } from 'express';
import shortId from 'shortid';

import { URLModel } from '../database/model/URL';

import { config } from '../config/Constants';

export class URLController {
	public async shorten(request: Request, response: Response): Promise<void> {
		const { originURL } = request.body;
		const url = await URLModel.findOne({ originURL });

		if (url) {
			response.json(url);
			return;
		}

		const hash = shortId.generate();

		const shortURL = `${config.API_URL}/${hash}`;

		const newUrl = await URLModel.create({ hash, originURL, shortURL });

		response.json(newUrl);
	}

	public async redirect(request: Request, response: Response): Promise<void> {
		const { hash } = request.params;

		const url = await URLModel.findOne({ hash });

		if (!url) {
			response.status(400).json({ error: 'URL not found!' });
		}

		response.json(url);
	}

	public async listAll(request: Request, response: Response): Promise<void> {
		const allUrls = await URLModel.find();

		response.json(allUrls);
	}
}
