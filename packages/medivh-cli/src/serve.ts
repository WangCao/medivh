import koa from 'koa';
import serve from 'koa-static';
import koa_logger from 'koa-logger';
import { console_info, console_log } from './tools';
import internalIp from 'internal-ip';
import open from 'open';
import ora from 'ora';
import chalk from 'chalk';

type CommandOptions = {
  port: number;
};

const app = new koa();
const logger = koa_logger();

app.use(serve(process.cwd()));
app.use(logger);

export default function (options: CommandOptions) {
  app.listen(options.port, async () => {
    const ip = await internalIp.v4();
    console_info(`静态服务器启动`);
    console_info(`路径：${process.cwd()}`);
    console_info(`IP：${ip}`);
    console_info(`端口：${options.port}`);
    const spinner = ora(chalk.green(`[LOADING] 打开浏览器中...`)).start();
    await handleOpen(`http:${ip}:${options.port}`);
    spinner.stop();
    console_info(`使用默认浏览器打开`);
    console_log(`日志： `);
  });
}

async function handleOpen(path: string) {
  await open(path);
}
