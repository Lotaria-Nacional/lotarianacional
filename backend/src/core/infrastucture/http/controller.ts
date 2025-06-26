export type HttpRequest = {
    body?:any
    file?:any
    query?:any
    params?:any
    cookies?:any
}

export type HttpResponse = {
    body?:any
    statusCode:number,
    clearCookie?:(name:string,options:Record<any,any>)=>void
    
}
export interface IController {
    handle(request:HttpRequest, response?:HttpResponse):Promise<HttpResponse>
}