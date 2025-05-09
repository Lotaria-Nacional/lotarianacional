import { EntityBase } from "../../../../(core)/entity/entity.base"

export type NewsProps = {
  id: string
  title: string
  image: string
  description: string
  createdAt: Date
}

export class News extends EntityBase<NewsProps>{

  static create(props: NewsProps,id:string): News {
    return new News(props,id)
  }

    set title(title:string){
      this.props.title = title
    }    
    set image(image:string){
      this.props.image = image
    }    
    set description(description:string){
      this.props.description = description
    }    
    set createdAt(createdAt:Date){
      this.props.createdAt = createdAt
    }
}
