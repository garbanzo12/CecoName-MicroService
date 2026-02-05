function _classPrivateFieldLooseBase(e, t) { if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance"); return e; }
var id = 0;
function _classPrivateFieldLooseKey(e) { return "__private_" + id++ + "_" + e; }
import pc from 'picocolors'; // Esta es una librería ligera de colores para colorear los codigos de respuesta (200, 400, etc)
var _log = /*#__PURE__*/_classPrivateFieldLooseKey("log");
export class CecoNameController {
  constructor(getCecoNameUseCase, getCecoNameByIdUseCase) {
    // Este es un helper para centralizar el formato del log
    Object.defineProperty(this, _log, {
      value: _log2
    });
    /* Ejemplos de este log
      ([hora] [icono] [Tipo petición] [endpoint] - [Respuesta] )
      [2:04:04 p. m.] ✅ GET /ceconame/1 - Petición exitosa 
      [2:04:13 p. m.] ❌ GET /ceconame/200 - No encontrado 
      [2:04:23 p. m.] ✅ GET /ceconame - Petición exitosa {"count":178}
    */
    this.getAll = async (req, res) => {
      try {
        const ceconames = await this.getCecoNameUseCase.execute();
        if (!ceconames || ceconames.length === 0) {
          _classPrivateFieldLooseBase(this, _log)[_log]('error', 'GET /ceconame - No se encontraron registros');
          return res.status(404).json({
            message: "ceconames not found"
          });
        }
        _classPrivateFieldLooseBase(this, _log)[_log]('success', 'GET /ceconame - Petición exitosa', {
          count: ceconames.length
        });
        res.json(ceconames);
      } catch (error) {
        _classPrivateFieldLooseBase(this, _log)[_log]('error', 'GET /ceconame - Error crítico', error.message);
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    };
    this.getById = async (req, res) => {
      const {
        id
      } = req.params;
      try {
        const ceconame = await this.getCecoNameByIdUseCase.execute(id);
        if (!ceconame) {
          _classPrivateFieldLooseBase(this, _log)[_log]('error', `GET /ceconame/${id} - No encontrado`);
          return res.status(404).json({
            message: "Ceconame not found"
          });
        }
        _classPrivateFieldLooseBase(this, _log)[_log]('success', `GET /ceconame/${id} - Petición exitosa`);
        res.json(ceconame);
      } catch (error) {
        _classPrivateFieldLooseBase(this, _log)[_log]('error', `GET /ceconame/${id} - Error`, error.message);
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    };
    this.getCecoNameUseCase = getCecoNameUseCase;
    this.getCecoNameByIdUseCase = getCecoNameByIdUseCase;
  }
}
function _log2(type, message, data = '') {
  const time = new Date().toLocaleTimeString();
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️'
  }; // Iconos para exito (✅), error (❌) e info (ℹ️)
  const colors = {
    success: pc.green,
    error: pc.red,
    info: pc.blue
  }; // Los colores son verdes(200), para petición exitosa, rojo para petición fallida(400-500), azul para info (100)

  console.log(`${pc.gray(`[${time}]`)} ${colors[type](icons[type])} ${pc.bold(message)}`, data ? pc.dim(JSON.stringify(data)) : '' // La salida del log se veria asi ([hora] [icono] [Tipo petición] [endpoint] - [Respuesta] )
  );
}