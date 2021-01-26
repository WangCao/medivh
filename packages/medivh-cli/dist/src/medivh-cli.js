"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const serve_1 = __importDefault(require("./serve"));
const package_json_1 = __importDefault(require("../package.json"));
commander_1.program.version(package_json_1.default.version);
commander_1.program
    .command('help')
    .description('显示使用帮助')
    .action(function () {
    commander_1.program.outputHelp();
});
commander_1.program
    .command('start [dir]')
    .description('启动静态服务器')
    .action(() => {
    serve_1.default({
        port: 3000,
    });
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=medivh-cli.js.map