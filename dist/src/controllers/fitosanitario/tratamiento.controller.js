"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.deleteTratamiento = deleteTratamiento;
const TratamientoModel = __importStar(require("../../models/fitosanitario/tratamiento.model"));
// Obtiene todos los tratamientos
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tratamientos = yield TratamientoModel.findAll();
        res.json(tratamientos);
    });
}
// Obtiene un tratamiento por su ID
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const tratamiento = yield TratamientoModel.findById(id);
        if (!tratamiento) {
            res.status(404).json({ message: 'No encontrado' });
            return;
        }
        res.json(tratamiento);
    });
}
// Crea un nuevo tratamiento
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const nuevo = yield TratamientoModel.create(req.body);
        res.status(201).json(nuevo);
    });
}
// Actualiza un tratamiento existente
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const actualizado = yield TratamientoModel.update(id, req.body);
        if (!actualizado) {
            res.status(404).json({ message: 'No encontrado' });
            return;
        }
        res.json(actualizado);
    });
}
// Elimina un tratamiento por su ID
function deleteTratamiento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        yield TratamientoModel.deleteTratamiento(id);
        res.json({ message: 'Eliminado' });
    });
}
