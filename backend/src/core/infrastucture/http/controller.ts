export type HttpRequest<T = any> = {
    body?:T
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
export interface IController<T = any> {
    handle(request:HttpRequest<T>, response?:HttpResponse):Promise<HttpResponse>
}