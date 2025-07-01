import { Right } from "./right"

export class Left<L,R> {
    public readonly value:L

    constructor(value:L){
        this.value = value
    }

    isLeft():this is Left<L,R>{
        return true
    }

    isRight():this is Right<L,R>{
        return false
    }
  }