import pool from '../../config/db';

// Definimos la interfaz para EPA
export interface Epa {
    id_epa?: number;
    nombre_epa: string;
    descripcion: string;
}

export async function findAll(): Promise<Epa[]> {
    const result = await pool.query('SELECT * FROM epa');
    return result.rows;
}

export async function findById(id: number): Promise<Epa | undefined> {
    const result = await pool.query('SELECT * FROM epa WHERE id_epa = $1', [id]);
    return result.rows[0];
}

export async function create({ nombre_epa, descripcion }: Epa): Promise<Epa> {
    const result = await pool.query(
        'INSERT INTO epa (nombre_epa, descripcion) VALUES ($1, $2) RETURNING *',
        [nombre_epa, descripcion]
    );
    return result.rows[0];
}

export async function update(
    id: number,
    { nombre_epa, descripcion }: Pick<Epa, 'nombre_epa' | 'descripcion'>
): Promise<Epa> {
    const result = await pool.query(
        'UPDATE epa SET nombre_epa = $1, descripcion = $2 WHERE id_epa = $3 RETURNING *',
        [nombre_epa, descripcion, id]
    );
    return result.rows[0];
}

export async function deleteEpa(id: number): Promise<void> {
    await pool.query('DELETE FROM epa WHERE id_epa = $1', [id]);
}