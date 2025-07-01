import { Left } from "./left"

export class Right<L,R> {
    public readonly value:R 

    constructor(value:R){
        this.value = value
    }

    isRight(): this is Right<L,R>{
        return true
    }

    isLeft(): this is Left<L,R>{
        return true
    }
}
