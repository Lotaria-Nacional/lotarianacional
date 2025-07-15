import { Optional } from "@prisma/client/runtime/library";
import { createSlug } from "../../../../shared/utils/create-slug";
import { BaseEntity } from "../../../../core/@entity/base-entity";

export type JobOppeningProps = {
  id?: string;
  title: string;
  department: string;
  quantity: number;
  description?: string;
  requirements: string[];
  responsabilities?: string[];
  slug?: string;
  createdAt?: Date;
};

export class JobOppening extends BaseEntity<JobOppeningProps> {
  static create(props: JobOppeningProps, id?: string) {
    return new JobOppening(
      {
        ...props,
        slug: createSlug(props.department),
        department: props.department,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }

  public update(props: Optional<JobOppeningProps>) {
    if (props.responsabilities !== undefined) this._props.responsabilities = props.responsabilities;
    if (props.requirements !== undefined) this._props.requirements = props.requirements;
    if (props.quantity !== undefined) this._props.quantity = props.quantity;
    if (props.description !== undefined) this._props.description = props.description;
    if (props.title !== undefined) this._props.title = props.title;
    if (props.department !== undefined) {
      this._props.department = props.department
      this._props.slug = createSlug(props.department);
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

  get department() {
    return this._props.department;
  }

  set department(value: string) {
    this._props.department = value;
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
