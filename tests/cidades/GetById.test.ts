import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

    it('Get cidade By id - StatusCode 200', async () => {

        const idCidade = 1;

        const res1 = await testServer
            .get(`/cidades/${idCidade}`);
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(res1.body).toEqual({"nome": "Paripiranga"});
    });

    it('Parâmentro enviado não é um número - StatusCode 400', async () => {

        const idCidade = 'teste';

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`);
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Parâmentro enviado não é um número inteiro - StatusCode 400', async () => {

        const idCidade = 1.2;

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`);
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Parâmentro enviado não é maior que 0 - StatusCode 400', async () => {

        const idCidade = 0;

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`);
        
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });
});