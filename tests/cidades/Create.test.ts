import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

    it('Criar Cidade - StatusCode 201', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Paripiranga' });
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });

    it('Nome da cidade muito curto - StatusCode 400', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Pa' });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Nome não presente no body - StatusCode 400', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ });
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });
});