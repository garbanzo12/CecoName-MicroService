var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
import { Entity, Column, PrimaryColumn } from 'typeorm';

// Se especifica la tabla con la que se va a trabajar (CecoName) del schema dbo
export let CompanyEntity = (_dec = Entity({
  name: 'CecoName',
  schema: 'dbo'
}), _dec2 = PrimaryColumn({
  type: 'int'
}), _dec3 = Column({
  type: 'int'
}), _dec4 = Column({
  type: 'nvarchar',
  length: 255
}), _dec5 = Column({
  type: 'int'
}), _dec6 = Column({
  type: 'nvarchar',
  length: 255
}), _dec7 = Column({
  type: 'nvarchar',
  length: 255
}), _dec8 = Column({
  type: 'nvarchar',
  length: 255
}), _dec(_class = (_class2 = class CompanyEntity {
  constructor() {
    _initializerDefineProperty(this, "Id", _descriptor, this);
    _initializerDefineProperty(this, "Cecocode", _descriptor2, this);
    _initializerDefineProperty(this, "Name", _descriptor3, this);
    _initializerDefineProperty(this, "State", _descriptor4, this);
    _initializerDefineProperty(this, "CreatedBy", _descriptor5, this);
    _initializerDefineProperty(this, "UpdatedBy", _descriptor6, this);
    _initializerDefineProperty(this, "UpdateAt", _descriptor7, this);
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Cecocode", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Name", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "State", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CreatedBy", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "UpdatedBy", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "UpdateAt", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);