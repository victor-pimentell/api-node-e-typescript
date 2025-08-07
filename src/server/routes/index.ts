import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {

    return res.send('Olá, Mundo!');
});

router.post('/teste', (req, res) => {

    console.log(req.query.teste);
    return res.status(StatusCodes.CONFLICT).json(req.body);
});

export { router };