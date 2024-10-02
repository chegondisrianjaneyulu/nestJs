import { Catch, ArgumentsHost, HttpStatus, HttpException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import  { Request, Response } from "express";

type MyResponseObj = {
   statusCode : number,
   timestamp :string,
   path: string,
   response:  string | object
}

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
      
    catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const myResponseObj: MyResponseObj = {
            statusCode : 200,
            timestamp: new Date().toISOString(),
            path: request.url,
            response:''
        }


        if ( exception instanceof HttpException ) {
            myResponseObj.statusCode = exception.getStatus();
            myResponseObj.response = exception.getResponse();
        }
        else if ( exception instanceof PrismaClientValidationError ) {
            myResponseObj.statusCode = 422
            myResponseObj.response = exception.message.replaceAll(/\n/g, '')
        }
        else {
            myResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR
            myResponseObj.response = 'Internal Server Error'
        }

        response.status(myResponseObj.statusCode).json(myResponseObj);

    }
}