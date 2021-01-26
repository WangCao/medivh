import chalk from 'chalk';

const console_info = (msg: string) => {
  console.log(chalk.green(`[INFO] ${msg}`));
};

const console_warn = (msg: string) => {
  console.log(chalk.yellow(`[WARN] ${msg}`));
};

const console_log = (msg: string) => {
  console.log(chalk.green(`[LOG] ${msg}`));
};

const console_err = (msg: string) => {
  console.log(chalk.red(`[ERROR] ${msg}`));
};

export {
  console_info,
  console_warn,
  console_log,
  console_err,
  // exist,
};
