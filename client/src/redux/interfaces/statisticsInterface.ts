import { MBTIResultType } from "./progressInterface";

export interface StatisticsDto {
  results: { Type: MBTIResultType; Count: number };
}
