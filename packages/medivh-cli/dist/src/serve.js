"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const app = new koa_1.default();
const logger = koa_logger_1.default();
app.use(koa_static_1.default(process.cwd()));
app.use(logger);
function default_1(options) {
    app.listen(options.port);
}
exports.default = default_1;
//# sourceMappingURL=serve.js.map