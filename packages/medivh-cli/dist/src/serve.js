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
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const tools_1 = require("./tools");
const internal_ip_1 = __importDefault(require("internal-ip"));
const open_1 = __importDefault(require("open"));
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const app = new koa_1.default();
const logger = koa_logger_1.default();
app.use(koa_static_1.default(process.cwd()));
app.use(logger);
function default_1(options) {
    app.listen(options.port, () => __awaiter(this, void 0, void 0, function* () {
        const ip = yield internal_ip_1.default.v4();
        tools_1.console_info(`静态服务器启动`);
        tools_1.console_info(`路径：${process.cwd()}`);
        tools_1.console_info(`IP：${ip}`);
        tools_1.console_info(`端口：${options.port}`);
        const spinner = ora_1.default(chalk_1.default.green(`[LOADING] 打开浏览器中...`)).start();
        yield handleOpen(`http:${ip}:${options.port}`);
        spinner.stop();
        tools_1.console_info(`使用默认浏览器打开`);
        tools_1.console_log(`日志： `);
    }));
}
exports.default = default_1;
function handleOpen(path) {
    return __awaiter(this, void 0, void 0, function* () {
        yield open_1.default(path);
    });
}
//# sourceMappingURL=serve.js.map