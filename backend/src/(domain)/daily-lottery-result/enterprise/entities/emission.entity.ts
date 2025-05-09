import { EntityBase } from "../../../../(core)/entity/entity.base";

export type EmissionProps = {
  id: string;
  created_at: Date;
  url?: string | null;
  description?: string | null;
  lottery_result_id?: string | null;    
};

export class Emission extends EntityBase<EmissionProps> {
  
  static create(props: EmissionProps, id:string): Emission {
    const currentDate = new Date();

    return new Emission({
        ...props,
        created_at: props.created_at ?? currentDate
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

  set created_at (created_at: Date){
    this.props.created_at = created_at;
  }

  set description (description: string | null){
    this.props.description = description;
  }

}
