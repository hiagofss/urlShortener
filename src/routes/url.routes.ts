import { Router } from 'express';

import { URLController } from '../controller/URLController';

const urlRouter = Router();

const urlController = new URLController();

urlRouter.post('/shorten', urlController.shorten);
urlRouter.get('/:hash', urlController.redirect);
urlRouter.get('/', urlController.listAll);

export { urlRouter };
