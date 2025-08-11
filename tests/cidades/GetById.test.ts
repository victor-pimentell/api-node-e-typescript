import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

    it('Get cidade By id - StatusCode 200', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias do sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .get(`/cidades/${res1.body}`)
            .send();

        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('nome');
    });

    it('Tenta buscar registro que não existe', async () => {

        const res1 = await testServer
            .get('/cidades/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });

    it('Parâmentro enviado não é um número - StatusCode 400', async () => {

        const idCidade = 'teste';

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`)
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Parâmentro enviado não é um número inteiro - StatusCode 400', async () => {

        const idCidade = 1.2;

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`)
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });

    it('Parâmentro enviado não é maior que 0 - StatusCode 400', async () => {

        const idCidade = 0;

        const res1 = await testServer
            .delete(`/cidades/${idCidade}`)
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.params.id');
    });
});