import pino from 'pino';

export function print() {
  console.log('the-lib');
}

export function printWithPino() {
  const logger = pino();
  logger.info('the-lib');
}
