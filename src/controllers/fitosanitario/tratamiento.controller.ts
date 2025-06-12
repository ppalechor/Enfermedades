import { Request, Response } from 'express';
import * as TratamientoModel from '../../models/fitosanitario/tratamiento.model';

// Obtiene todos los tratamientos
export async function getAll(req: Request, res: Response): Promise<void> {
    const tratamientos = await TratamientoModel.findAll();
    res.json(tratamientos);
}

// Obtiene un tratamiento por su ID
export async function getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const tratamiento = await TratamientoModel.findById(id);
    if (!tratamiento) {
        res.status(404).json({ message: 'No encontrado' });
        return;
    }
    res.json(tratamiento);
}

// Crea un nuevo tratamiento
export async function create(req: Request, res: Response): Promise<void> {
    const nuevo = await TratamientoModel.create(req.body);
    res.status(201).json(nuevo);
}

// Actualiza un tratamiento existente
export async function update(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const actualizado = await TratamientoModel.update(id, req.body);
    if (!actualizado) {
        res.status(404).json({ message: 'No encontrado' });
        return;
    }
    res.json(actualizado);
}

// Elimina un tratamiento por su ID
export async function deleteTratamiento(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    await TratamientoModel.deleteTratamiento(id);
    res.json({ message: 'Eliminado' });
}