import { Request, Response } from 'express';
import multer, { StorageEngine } from 'multer';
import * as EpaModel from '../../models/fitosanitario/epa.model';

// Configuración de Multer para guardar imágenes en uploads/epa
const storage: StorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/epa'); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});
export const upload = multer({ storage: storage });

export async function getAll(req: Request, res: Response): Promise<void> {
    const epas = await EpaModel.findAll();
    res.json(epas);
}

export async function getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const epa = await EpaModel.findById(id);
    if (!epa) {
        res.status(404).json({ message: 'No encontrado' });
        return;
    }
    res.json(epa);
}


export async function update(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const actualizado = await EpaModel.update(id, req.body);
    if (!actualizado) {
        res.status(404).json({ message: 'No encontrado' });
        return;
    }
    res.json(actualizado);
}

export async function deleteEpa(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    await EpaModel.deleteEpa(id);
    res.json({ message: 'Eliminado' });
}

export async function create(req: Request, res: Response): Promise<void> {
    const { nombre_epa, descripcion } = req.body;
    const nuevo = await EpaModel.create({ nombre_epa, descripcion });
    res.status(201).json(nuevo);
}
