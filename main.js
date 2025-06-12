var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var EPA = 'http://localhost:3000/api/fitosanitario/epa/crear';
var TRATAMIENTO = 'http://localhost:3000/api/fitosanitario/tratamiento/crear';
// --- EPAS ---
function cargarEpas() {
    return __awaiter(this, void 0, void 0, function () {
        var res, epas, tbody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(EPA, "/listar"))];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    epas = _a.sent();
                    tbody = document.querySelector('#epaTable tbody');
                    tbody.innerHTML = '';
                    epas.forEach(function (epa) {
                        tbody.innerHTML += "\n      <tr>\n        <td>".concat(epa.id_epa, "</td>\n        <td>").concat(epa.nombre_epa, "</td>\n        <td>").concat(epa.descripcion, "</td>\n        <td>\n          <button onclick=\"editarEpa(").concat(epa.id_epa, ")\">Editar</button>\n          <button onclick=\"eliminarEpa(").concat(epa.id_epa, ")\">Eliminar</button>\n        </td>\n      </tr>\n    ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
document.getElementById('epaForm').onsubmit = function (e) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    id = document.getElementById('epaId').value;
                    data = {
                        nombre_epa: document.getElementById('nombreEpa').value,
                        descripcion: document.getElementById('descripcionEpa').value
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!id) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("".concat(EPA, "/actualizar/").concat(id), {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fetch("".concat(EPA, "/crear"), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    resetEpaForm();
                    cargarEpas();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    alert('Error al guardar EPA: ' + error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
};
window.editarEpa = function (id) {
    fetch("".concat(EPA, "/buscar/").concat(id))
        .then(function (res) { return res.json(); })
        .then(function (epa) {
        document.getElementById('epaId').value = epa.id_epa;
        document.getElementById('nombreEpa').value = epa.nombre_epa;
        document.getElementById('descripcionEpa').value = epa.descripcion;
    });
};
window.eliminarEpa = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('¿Eliminar EPA?')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("".concat(EPA, "/eliminar/").concat(id), { method: 'DELETE' })];
                case 1:
                    _a.sent();
                    cargarEpas();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
};
function resetEpaForm() {
    document.getElementById('epaForm').reset();
    document.getElementById('epaId').value = '';
}
document.getElementById('btnLimpiarEpa').onclick = resetEpaForm;
// --- TRATAMIENTOS ---
function cargarTratamientos() {
    return __awaiter(this, void 0, void 0, function () {
        var res, tratamientos, tbody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(TRATAMIENTO, "/listar"))];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    tratamientos = _a.sent();
                    tbody = document.querySelector('#tratamientoTable tbody');
                    tbody.innerHTML = '';
                    tratamientos.forEach(function (t) {
                        tbody.innerHTML += "\n      <tr>\n        <td>".concat(t.id_tratamiento, "</td>\n        <td>").concat(t.descripcion, "</td>\n        <td>").concat(t.dosis, "</td>\n        <td>").concat(t.frecuencia, "</td>\n        <td>").concat(t.id_epa, "</td>\n        <td>\n          <button onclick=\"editarTratamiento(").concat(t.id_tratamiento, ")\">Editar</button>\n          <button onclick=\"eliminarTratamiento(").concat(t.id_tratamiento, ")\">Eliminar</button>\n        </td>\n      </tr>\n    ");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
document.getElementById('tratamientoForm').onsubmit = function (e) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    id = document.getElementById('tratamientoId').value;
                    data = {
                        descripcion: document.getElementById('descripcionTratamiento').value,
                        dosis: document.getElementById('dosisTratamiento').value,
                        frecuencia: document.getElementById('frecuenciaTratamiento').value,
                        id_epa: Number(document.getElementById('epaIdTratamiento').value)
                    };
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("".concat(TRATAMIENTO, "/actualizar/").concat(id), { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetch("".concat(TRATAMIENTO, "/crear"), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    resetTratamientoForm();
                    cargarTratamientos();
                    return [2 /*return*/];
            }
        });
    });
};
window.editarTratamiento = function (id) {
    fetch("".concat(TRATAMIENTO, "/buscar/").concat(id))
        .then(function (res) { return res.json(); })
        .then(function (t) {
        document.getElementById('tratamientoId').value = t.id_tratamiento;
        document.getElementById('descripcionTratamiento').value = t.descripcion;
        document.getElementById('dosisTratamiento').value = t.dosis;
        document.getElementById('frecuenciaTratamiento').value = t.frecuencia;
        document.getElementById('epaIdTratamiento').value = t.id_epa;
    });
};
window.eliminarTratamiento = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('¿Eliminar tratamiento?')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("".concat(TRATAMIENTO, "/eliminar/").concat(id), { method: 'DELETE' })];
                case 1:
                    _a.sent();
                    cargarTratamientos();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
};
function resetTratamientoForm() {
    document.getElementById('tratamientoForm').reset();
    document.getElementById('tratamientoId').value = '';
}
document.getElementById('btnLimpiarTratamiento').onclick = resetTratamientoForm;
// Inicializar
cargarEpas();
cargarTratamientos();
