import { ResultEntity } from "../types";

export  function getResultNumbers(data: ResultEntity) {
    return [
      data.number_1,
      data.number_2,
      data.number_3,
      data.number_4,
      data.number_5,
    ];
  }