"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Fitosanitario
const epa_routes_1 = __importDefault(require("./routes/fitosanitario/epa.routes"));
const tratamiento_routes_1 = __importDefault(require("./routes/fitosanitario/tratamiento.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Fitosanitario
app.use('/api/fitosanitario/epa', epa_routes_1.default);
app.use('/api/fitosanitario/tratamiento', tratamiento_routes_1.default);
app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});
