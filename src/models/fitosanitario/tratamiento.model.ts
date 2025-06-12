import pool from '../../config/db';

// Definimos la interfaz para Tratamiento
export interface Tratamiento {
    id_tratamiento?: number;
    descripcion: string;
    dosis: string;
    frecuencia: string;
    id_epa: number;
}

// Obtiene todos los registros de la tabla tratamientos
export async function findAll(): Promise<Tratamiento[]> {
    const result = await pool.query('SELECT * FROM tratamientos');
    return result.rows;
}

// Busca un tratamiento por su ID
export async function findById(id: number): Promise<Tratamiento | undefined> {
    const result = await pool.query('SELECT * FROM tratamientos WHERE id_tratamiento = $1', [id]);
    return result.rows[0];
}

// Crea un nuevo tratamiento
export async function create({ descripcion, dosis, frecuencia, id_epa }: Omit<Tratamiento, 'id_tratamiento'>): Promise<Tratamiento> {
    const result = await pool.query(
        'INSERT INTO tratamientos (descripcion, dosis, frecuencia, id_epa) VALUES ($1, $2, $3, $4) RETURNING *',
        [descripcion, dosis, frecuencia, id_epa]
    );
    return result.rows[0];
}

// Actualiza un tratamiento existente por su ID
export async function update(
    id: number,
    { descripcion, dosis, frecuencia, id_epa }: Omit<Tratamiento, 'id_tratamiento'>
): Promise<Tratamiento> {
    const result = await pool.query(
        'UPDATE tratamientos SET descripcion = $1, dosis = $2, frecuencia = $3, id_epa = $4 WHERE id_tratamiento = $5 RETURNING *',
        [descripcion, dosis, frecuencia, id_epa, id]
    );
    return result.rows[0];
}

// Elimina un tratamiento por su ID
export async function deleteTratamiento(id: number): Promise<void> {
    await pool.query('DELETE FROM tratamientos WHERE id_tratamiento = $1', [id]);
}