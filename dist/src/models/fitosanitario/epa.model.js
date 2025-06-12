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
exports.deleteEpa = deleteEpa;
const db_1 = __importDefault(require("../../config/db"));
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.query('SELECT * FROM epa');
        return result.rows;
    });
}
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.default.query('SELECT * FROM epa WHERE id_epa = $1', [id]);
        return result.rows[0];
    });
}
function create(_a) {
    return __awaiter(this, arguments, void 0, function* ({ nombre_epa, descripcion }) {
        const result = yield db_1.default.query('INSERT INTO epa (nombre_epa, descripcion) VALUES ($1, $2) RETURNING *', [nombre_epa, descripcion]);
        return result.rows[0];
    });
}
function update(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { nombre_epa, descripcion }) {
        const result = yield db_1.default.query('UPDATE epa SET nombre_epa = $1, descripcion = $2 WHERE id_epa = $3 RETURNING *', [nombre_epa, descripcion, id]);
        return result.rows[0];
    });
}
function deleteEpa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.default.query('DELETE FROM epa WHERE id_epa = $1', [id]);
    });
}
