export abstract class AppError extends Error {
    public readonly cause: unknown
    abstract readonly layer: "domain" | "application"

    constructor(message:string, cause?:unknown){
        super(message)
        this.cause = this.cause
        this.name = this.constructor.name
        
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, this.constructor)
        }
    }
}