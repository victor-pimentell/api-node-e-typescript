import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, Mundo!');
});

router.post('/cidades', CidadesController.createBodyValidator, CidadesController.createQueryValidator, CidadesController.create);

export { router };