import { MBTIResultType } from "./progressInterface";

export interface StatisticsDto {
  results: StatisticResult[];
}

export interface StatisticResult {
  Type: MBTIResultType;
  Count: number;
}
