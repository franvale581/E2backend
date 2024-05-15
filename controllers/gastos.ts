import { Request, Response } from 'express';
import Gasto, { IGasto } from '../models/gastos';


export const getGastos = async (req: Request, res: Response) => {
    try {

        const gastos: IGasto[] = await Gasto.find({ estado: true });

        res.json({ gastos });
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener los gastos:', error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

export const getGastoById = async (req: Request, res: Response) => {

    const { id } = req.params;

    const gasto: IGasto | null = await Gasto.findById(id);
    
    res.json({ gasto });

};

export const crearGasto = async (req: Request, res: Response) => {

    const gastoData: IGasto = req.body;

    const gasto = new Gasto(gastoData);

    await gasto.save();

    res.json({
      msg: 'Reporte de gasto creado exitosamente',
      gasto,
    });
    console.log('Gasto creado con éxito');

};

export const actualizarGasto = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { estado, ...data } = req.body;

    const gasto = await Gasto.findByIdAndUpdate(id, data, { new: true });

    res.json({ gasto });

};

export const eliminarGasto = async (req: Request, res: Response) => {
    const { id } = req.params;

    const gasto = await Gasto.findByIdAndDelete(id);

    if (!gasto) {
      res.json({ msg: 'El gasto no fue encontrado en la base de datos' });
      return;
    }
    
    res.json({ gasto });
};