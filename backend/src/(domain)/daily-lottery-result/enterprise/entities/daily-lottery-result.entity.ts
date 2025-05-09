import { LotteryResult } from "./lottery-result.entity"
import { EntityBase } from "../../../../(core)/entity/entity.base"


export type DailyLotteryResultProps = {
  id: string
  createdAt: Date
  lottery_results: LotteryResult[]
}

export class DailyLotteryResult extends EntityBase<DailyLotteryResultProps> {

  static create(props: DailyLotteryResultProps,id:string) {
    return new DailyLotteryResult({
        ...props,
        createdAt: props.createdAt ?? new Date(),           
    }, id)
  }

}
