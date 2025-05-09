import { EntityBase } from "../../../../(core)/entity/entity.base";

export type EmissionProps = {
  id: string;
  createdAt: Date;
  url?: string | null;
  description?: string | null;
  lottery_result_id?: string | null;    
};

export class Emission extends EntityBase<EmissionProps> {
  
  static create(props: EmissionProps, id:string): Emission {
    const currentDate = new Date();

    return new Emission({
        ...props,
        createdAt: props.createdAt ?? currentDate
    }, id);
  }

  set id (id: string){
    this.props.id = id;
  }
  
  set lottery_result_id (lottery_result_id: string){
    this.props.lottery_result_id = lottery_result_id;
  }

  set url (url: string | null){
    this.props.url = url;
  }

  set createdAt (createdAt: Date){
    this.props.createdAt = createdAt;
  }

  set description (description: string | null){
    this.props.description = description;
  }

}
