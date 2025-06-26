import { Request, Response } from "express";
import { HttpRequest, IController } from "../infrastucture/http/controller";

export function expressAdapterController(controller:IController){
    return async(request:Request,response:Response)=> {
        const HttpRequest:HttpRequest = {
            body:request.body,
            file:request.file,
            params:request.params,
            query:request.query,
        }

        const httpResponse = await controller.handle(HttpRequest)
        
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}