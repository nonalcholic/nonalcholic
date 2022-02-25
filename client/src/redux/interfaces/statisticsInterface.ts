import { MBTIResultType } from "./progressInterface";

export interface StatisticsDto {
  results: StatisticResult[];
}

export interface StatisticResult {
  Type: MBTIResultType;
  Count: number;
}

export const MockStaticDto: StatisticsDto = {
  results: [
    { Type: "ENTP", Count: 67 }, // 오리연못
    { Type: "ENTJ", Count: 101 }, // 어은동산
    { Type: "ENFP", Count: 276 }, // 휴게실
    { Type: "ENFJ", Count: 404 }, // 신학관 옥상
    { Type: "ESTP", Count: 40 }, // 어은동 길바닥
    { Type: "ESTJ", Count: 61 }, // 도서관 책상
    { Type: "ESFP", Count: 165 }, // 태평소국밥
    { Type: "ESFJ", Count: 187 }, // 택시 승강장
    { Type: "INTP", Count: 67 }, // 연구실
    { Type: "INTJ", Count: 93 }, // 교양분관
    { Type: "INFP", Count: 153 }, // 동측식당
    { Type: "INFJ", Count: 103 }, // 고양이 옆
    { Type: "ISTP", Count: 28 }, // 카이마루
    { Type: "ISTJ", Count: 29 }, // 창의관
    { Type: "ISFP", Count: 105 }, // 기숙사 침대
    { Type: "ISFJ", Count: 236 }, // 문화관 빈백
  ],
};

export const MockTotal = 2115;
