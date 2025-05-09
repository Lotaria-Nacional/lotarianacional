import { EntityBase } from "../../../../(core)/entity/entity.base";

type AgencyProps = {
  id: string;
  name: string;
  phone: number;
  latitude: number;
  longitude: number;
  type: string;
  address: string;
  createdAt: Date;
};
 

export class Agency extends EntityBase<AgencyProps> {


  static create(props: AgencyProps,id:string) {    
    return new Agency(props, id);
  }

    
  set name(name:string){
    this.props.name = name
  }

  set phone(phone:number){
    this.props.phone = phone
  }

  set latitude(latitude:number){
    this.props.latitude = latitude
  }

  set longitude(longitude:number){
    this.props.longitude = longitude
  }

  set type(type:string){
    this.props.type = type
  }

  set address(address:string){
    this.props.address = address
  }

  set createdAt(createdAt:Date){
    this.props.createdAt = createdAt
  }

}
