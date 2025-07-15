import { Optional } from "@prisma/client/runtime/library";
import { createSlug } from "../../../../shared/utils/create-slug";
import { BaseEntity } from "../../../../core/@entity/base-entity";

export type PartnerJobOppeningProps = {
  id?: string;
  title: string;
  quantity: number;
  type: string;
  location: string;
  description?: string;
  requirements: string[];
  responsabilities?: string[];
  slug?: string;
  createdAt?: Date;
};

export class PartnerJobOppening extends BaseEntity<PartnerJobOppeningProps> {
  static create(props: PartnerJobOppeningProps, id?: string) {
    return new PartnerJobOppening(
      {
        ...props,
        slug: createSlug(props.title),
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }

  public update(props: Optional<PartnerJobOppeningProps>) {
    if (props.responsabilities !== undefined) this._props.responsabilities = props.responsabilities;
    if (props.requirements !== undefined) this._props.requirements = props.requirements;
    if (props.quantity !== undefined) this._props.quantity = props.quantity;
    if (props.description !== undefined) this._props.description = props.description;
    if (props.location !== undefined) this._props.location = props.location.toUpperCase();
    if (props.type !== undefined) this._props.type = props.type.toUpperCase();
    if (props.title !== undefined) {
      this._props.title = props.title;
      this._props.slug = createSlug(props.title);
    }
  }

  get title() {
    return this._props.title;
  }

  set title(value: string) {
    this._props.title = value;
  }

  get quantity() {
    return this._props.quantity;
  }

  set quantity(value: number) {
    this._props.quantity = value;
  }

  get location() {
    return this._props.location;
  }

  set location(value: string) {
    this._props.location = value;
  }
  get type() {
    return this._props.type;
  }

  set type(value: string) {
    this._props.type = value;
  }

  get description() {
    return this._props.description;
  }

  set description(value: string | undefined) {
    this._props.description = value;
  }

  get requirements() {
    return this._props.requirements;
  }

  set requirements(value: string[]) {
    this._props.requirements = value;
  }

  get responsabilities() {
    return this._props.responsabilities;
  }

  set responsabilities(value: string[] | undefined) {
    this._props.responsabilities = value;
  }

  get slug() {
    return this._props.slug;
  }

  set slug(value: string | undefined) {
    this._props.slug = value;
  }

  get createdAt() {
    return this._props.createdAt;
  }
}
