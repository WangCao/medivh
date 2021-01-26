import koa from 'koa';
import serve from 'koa-static';
import koa_logger from 'koa-logger';

type CommandOptions = {
  port: number;
};

const app = new koa();
const logger = koa_logger();

app.use(serve(process.cwd()));
app.use(logger);

export default function (options: CommandOptions) {
  app.listen(options.port);
}
