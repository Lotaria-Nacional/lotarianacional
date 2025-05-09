import { EntityBase } from "../../../../(core)/entity/entity.base";

export type UserProps = {
  id: string
  role: string
  email: string
  last_name: string
  password: string
  first_name: string
  profile_image?: string | null
  created_at: Date
}

export class User extends EntityBase<UserProps> {
 
    static create(props: UserProps,id:string): User {
        return new User({
            ...props,
            created_at: props.created_at ?? new Date(),
        }, id)
    }

    set role(role:string){
        this.props.role = role
    }

    set email(email:string){
        this.props.email = email
    }

    set last_name(last_name:string){
        this.props.last_name = last_name
    }

    set password(password:string){
        this.props.password = password
    }

    set first_name(first_name:string){
        this.props.first_name = first_name
    }

    set profile_image (profile_image :string | null){
        this.props.profile_image  = profile_image 
    }
}