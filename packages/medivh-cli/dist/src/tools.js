"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.console_err = exports.console_log = exports.console_warn = exports.console_info = void 0;
const chalk_1 = __importDefault(require("chalk"));
const console_info = (msg) => {
    console.log(chalk_1.default.green(`[INFO] ${msg}`));
};
exports.console_info = console_info;
const console_warn = (msg) => {
    console.log(chalk_1.default.yellow(`[WARN] ${msg}`));
};
exports.console_warn = console_warn;
const console_log = (msg) => {
    console.log(chalk_1.default.green(`[LOG] ${msg}`));
};
exports.console_log = console_log;
const console_err = (msg) => {
    console.log(chalk_1.default.red(`[ERROR] ${msg}`));
};
exports.console_err = console_err;
//# sourceMappingURL=tools.js.map