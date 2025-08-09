import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './Update';
import * as deleteById from './DeleteById';

export const CidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById,
};