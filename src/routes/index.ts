import { Router } from 'express';

import { urlRouter } from './url.routes';

const router = Router();

router.use('/url', urlRouter);

export { router };
