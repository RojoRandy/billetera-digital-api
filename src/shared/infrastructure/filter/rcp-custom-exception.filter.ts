import { Request, Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { ErrorResponseDto } from '../dto/error-response.dto';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const error = exception.getError() as ErrorResponseDto;

    response
      .status(error.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR)
      .json(error ?? ErrorResponseDto.create({
        httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      }))
  }
}