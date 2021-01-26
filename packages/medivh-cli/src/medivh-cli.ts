import { program } from 'commander';
import serve from './serve';

import pkg from '../package.json';

program.version(pkg.version);

program
  .command('help')
  .description('显示使用帮助')
  .action(function () {
    program.outputHelp();
  });

program
  .command('start [dir]')
  .description('启动静态服务器')
  .action(() => {
    serve({
      port: 3000,
    });
  });

program.parse(process.argv);
