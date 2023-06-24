"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const behaviors = (target, _context) => {
    console.log(`${target.name}, 在吃饭`);
    console.log(`${target.name}, 在睡觉`);
    console.log(`${target.name}, 在打豆豆`);
};
let Cat = (() => {
    let _classDecorators = [behaviors];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Cat = _classThis = class {
    };
    __setFunctionName(_classThis, "Cat");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Cat = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Cat = _classThis;
})();
let Dog = (() => {
    let _classDecorators_1 = [behaviors];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var Dog = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "Dog");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Dog = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Dog = _classThis_1;
})();
const cat = new Cat();
console.log(cat);
const dog = new Dog();
console.log(dog);
exports.default = { cat, dog };
