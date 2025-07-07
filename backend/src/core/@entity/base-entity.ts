import crypto from "node:crypto" 

export abstract class BaseEntity<T> {
    protected _id:string
    protected _props:T

    constructor(props:T, id?:string){
        this._props = props
        this._id = id ?? crypto.randomUUID()
    }

    get id(){
        return this._id
    }

    toJSON(){
        return {
            id:this.id,
            ...this._props
        }
    }
}