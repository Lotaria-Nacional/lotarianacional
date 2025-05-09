import { EntityBase } from "../../../../(core)/entity/entity.base";

export type LotteryResultProps = {
  id: string;
  hour: string;
  name: string;
  created_at: Date;
  sorted_numbers:number[];
  emisison?: string | null;
  daily_lottery_result_id: string;
};
 
export class LotteryResult extends EntityBase<LotteryResultProps> {

  static create(props: LotteryResultProps, id:string) {

    const currentDate = new Date();
    
    return new LotteryResult({
        ...props,
        emisison: props.emisison ?? null,
        created_at:props.created_at ??  currentDate,      
    }, id);
  }

  set hour(hour:string) {
    this.props.hour = hour;
  }

  set name(name:string) {
    this.props.name = name;
  }

  set sorted_numbers(sorted_numbers:number[]) {
    this.props.sorted_numbers = sorted_numbers;
  }

  set emission(emission:string | null) {
    this.props.emisison = emission;
  }

  set daily_lottery_result_id(daily_lottery_result_id:string) {
    this.props.daily_lottery_result_id = daily_lottery_result_id;
  }
}
