import { LotteryResult } from "./lottery-result.entity"
import { EntityBase } from "../../../../(core)/entity/entity.base"


export type DailyLotteryResultProps = {
  id: string
  created_at: Date
  lottery_results: LotteryResult[]
}

export class DailyLotteryResult extends EntityBase<DailyLotteryResultProps> {

  static create(props: DailyLotteryResultProps,id:string) {
    return new DailyLotteryResult({
        ...props,
        created_at: props.created_at ?? new Date(),           
    }, id)
  }

}
