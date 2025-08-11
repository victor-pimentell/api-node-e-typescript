import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - DeleteById', () => {

    it('Request de todas as cidades - StatusCode 200', async () => {

        const res1 = await testServer
            .get(`/cidades`);
        
        expect(res1.statusCode).toEqual(StatusCodes.OK);
        expect(typeof res1.body).toEqual('object');
    });
});