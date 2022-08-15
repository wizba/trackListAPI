/* eslint-disable prettier/prettier */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import * as mongoose from 'mongoose';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const message = exception.message;
    const except = exception.getResponse();

    // const error = except.error;
    const strError = JSON.stringify(except);

    const error = JSON.parse(strError);
    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
      method: request.method,
      message,
      error: error.error,
    };
    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );
    response.status(status).json(errorResponse);
  }
}
