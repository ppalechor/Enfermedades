"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = findAll;
exports.findById = findById;
exports.create = create;
exports.update = update;
exports.deleteTratamiento = deleteTratamiento;
const db_1 = __importDefault(require("../../config/db"));
// Obtiene todos los registros de la tabla tratamientos
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.query('SELECT * FROM tratamientos');
        return result.rows;
    });
}
// Busca un tratamiento por su ID
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.query('SELECT * FROM tratamientos WHERE id_tratamiento = $1', [id]);
        return result.rows[0];
    });
}
// Crea un nuevo tratamiento
function create(_a) {
    return __awaiter(this, arguments, void 0, function* ({ descripcion, dosis, frecuencia, id_epa }) {
        const result = yield db_1.default.query('INSERT INTO tratamientos (descripcion, dosis, frecuencia, id_epa) VALUES ($1, $2, $3, $4) RETURNING *', [descripcion, dosis, frecuencia, id_epa]);
        return result.rows[0];
    });
}
// Actualiza un tratamiento existente por su ID
function update(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { descripcion, dosis, frecuencia, id_epa }) {
        const result = yield db_1.default.query('UPDATE tratamientos SET descripcion = $1, dosis = $2, frecuencia = $3, id_epa = $4 WHERE id_tratamiento = $5 RETURNING *', [descripcion, dosis, frecuencia, id_epa, id]);
        return result.rows[0];
    });
}
// Elimina un tratamiento por su ID
function deleteTratamiento(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.default.query('DELETE FROM tratamientos WHERE id_tratamiento = $1', [id]);
    });
}
