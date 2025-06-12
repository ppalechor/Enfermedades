import express from 'express';
import cors from 'cors';

// Fitosanitario
import epaRoutes from './routes/fitosanitario/epa.routes';
import tratamientoRoutes from './routes/fitosanitario/tratamiento.routes';

const app = express();
app.use(express.json());
app.use(cors());

// Fitosanitario
app.use('/api/fitosanitario/epa', epaRoutes);
app.use('/api/fitosanitario/tratamiento', tratamientoRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});