
import { randomUUID } from "node:crypto";

export abstract class EntityBase<Props> {
    protected readonly _id:string
    protected readonly props:Props

    protected constructor(props: Props, id: string) {
        this.props = props;
        this._id = id ?? randomUUID();
    }

    get id(): string {
        return this._id;
    }

    get toJSON():Props {
        return this.props;
    }
}