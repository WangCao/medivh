import { program } from 'commander';
import serve from './serve';

import pkg from '../package.json';

program.version(pkg.version);

program
  .command('start [dir]')
  .description('启动静态服务器')
  .action(() => {
    console.log('aaaa');
    serve({
      port: 3000,
    });
  });
