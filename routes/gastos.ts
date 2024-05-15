import { Router } from 'express';
import { getGastos, getGastoById, crearGasto, actualizarGasto, eliminarGasto } from '../controllers/gastos';

const gastoRoutes = Router();

gastoRoutes.get('/', getGastos);

gastoRoutes.get('/:id', getGastoById);

gastoRoutes.post('/', crearGasto);

gastoRoutes.put('/:id', actualizarGasto);

gastoRoutes.patch('/:id', actualizarGasto);

gastoRoutes.delete('/:id', eliminarGasto);

export default gastoRoutes;