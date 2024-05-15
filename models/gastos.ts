import { Model, Schema, model } from 'mongoose';

export interface IGasto {
  descripcion: string;
  monto: number;
}

const GastoSchema = new Schema<IGasto>({
  descripcion: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
});

const Gasto: Model<IGasto> = model<IGasto>('Gasto', GastoSchema);

export default Gasto;