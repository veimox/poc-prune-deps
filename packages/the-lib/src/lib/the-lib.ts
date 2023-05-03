import pino from 'pino';
import { Action } from 'xstate';
import { SNSServiceException } from '@aws-sdk/client-sns';

export function print() {
  console.log('the-lib');
}

export function printWithPino() {
  const logger = pino();
  logger.info('the-lib');
}
