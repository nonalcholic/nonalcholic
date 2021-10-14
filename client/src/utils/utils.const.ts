import {
  MBTIResultType,
  MBTIType,
  QuestionData,
} from "../redux/interfaces/progressInterface";

export const AlcholicColor = {
  Blue: "#3a6ba5",
  White: "#fdfdfd",
  Yellow: "#e9e999",
  Black: "#2e2e2e",
};
export const IP_ADDRESS = process.env.REACT_APP_IP_ADDRESS; // "54.180.146.18";
export const TOTAL_PROGRESS_NUMBER = 12;
export const QuestionInfo: QuestionData[] = [
  {
    id: 0,
    type: "EI",
    question:
      "🍺\n새로 들어간 동아리의 첫 술자리…\n처음 보는 선배와 동기들이 잔뜩 있다!",
    choiceA: { text: "저 사람은 누구지?\n빨리 친해져서 놀고싶다!", type: "E" },
    choiceB: { text: "즐겁기는 한데…\n음... 방 가고 싶네...", type: "I" },
  },
  {
    id: 1,
    type: "EI",
    question: "📧\n[CS330 운영체제 및 실험]\n10월 7일 휴강 안내 메일입니다.",
    choiceA: { text: "와우 누구 놀사람 없나?", type: "E" },
    choiceB: { text: "미쳤다 유튜브 정주행 각", type: "I" },
  },
  {
    id: 2,
    type: "EI",
    question: "🎉\n드디어 종강이다! 뭐하지?",
    choiceA: {
      text: "(카톡방을 열고)\n야 나 종강했다 놀러 갈 사람?",
      type: "E",
    },
    choiceB: {
      text: "(침대에 누운 후)\n오늘은 밖으로 나가지 않을 것",
      type: "I",
    },
  },
  {
    id: 3,
    type: "SN",
    question: "🧑‍🏫\n이 교양 과목 어때?",
    choiceA: { text: "(일단 추천한다)\n꿀과목이니까\n무조건 들어", type: "S" },
    choiceB: {
      text: "(상세하게 설명한다)\n장점은 어쩌구~,\n단점은 어쩌구~",
      type: "I",
    },
  },
  {
    id: 4,
    type: "SN",
    question: "📖\n언어 교양 과목을 듣고 싶은데...",
    choiceA: { text: "고등학교 때 어느정도 배웠던\n일본어 회화", type: "S" },
    choiceB: { text: "살면서 처음 배우는\n스페인어 회화", type: "N" },
  },
  {
    id: 5,
    type: "SN",
    question: "😱\n막막할만큼 큰 플젝이 생겼다!",
    choiceA: {
      text: "일단 뭐든 시작해보자\n하다보면 어떻게든 되겠지",
      type: "S",
    },
    choiceB: {
      text: "일단 전체적인 구조부터 잡자\n그러면 뭔가 떠오르겠지",
      type: "N",
    },
  },
  {
    id: 6,
    type: "TF",
    question: "친구에게서 카톡이 왔다\n🧒: 나 오늘 파팔에서 수액 맞았어",
    choiceA: {
      text: "헐 그래? 어때?\n돈 내야돼? 얼마야?\n몇 분동안 맞아?",
      type: "T",
    },
    choiceB: { text: "헐 무슨일이야 어디 아파?\n지금은 괜찮아?", type: "F" },
  },
  {
    id: 7,
    type: "TF",
    question: "배달음식이 왔을 때 친구가\n🙋: 나 혼자 얼른 받아올게!",
    choiceA: { text: "그래? 고마워\n다음엔 내가 갈게", type: "T" },
    choiceB: {
      text: "음...\n혼자 가지 말고 같이 갔다오자!",
      type: "F",
    },
  },
  {
    id: 8,
    type: "TF",
    question: "🌝\n(썸남/썸녀/애인): 오늘 달 진짜 예뻐서 너 생각이 났어~",
    choiceA: {
      text: "달이 예쁜데 왜 내 생각이 나?\n(진짜 궁금한거임 화난거 아님)",
      type: "T",
    },
    choiceB: { text: "(두근두근)\n그것 참 듣기 좋은 소리네 ㅎㅎ", type: "F" },
  },
  {
    id: 9,
    type: "JP",
    question: "🏫\n다음 학기 시간표를 짜는\n당신의 자세는?",
    choiceA: {
      text: "(OTL이 열리자마자)\n꼼꼼하게 비교해서\n최적의 전공/교양 시간표를 완성!",
      type: "J",
    },
    choiceB: {
      text: "엥 수강신청이 내일이라고?\n와 나 강제 휴학 휴학할뻔 ㅋㅋㅋ",
      type: "P",
    },
  },
  {
    id: 10,
    type: "JP",
    question: "🧑‍💻\n엄청난 과제를 받음",
    choiceA: { text: "뭐부터 해야할지 계획을 세우고\n과제 시작", type: "J" },
    choiceB: { text: "자료조사를 최대한 많이 하고\n과제 시작", type: "P" },
  },
  {
    id: 11,
    type: "JP",
    question: "🏠\n오랜만에 방 정리 중...",
    choiceA: { text: "필요 없는건 싸그리 가져다 버린다!", type: "J" },
    choiceB: {
      text: "이거 버릴까..?\n아냐 혹시 모르니 일단 챙겨둬!",
      type: "P",
    },
  },
];

export const EachMBTIText: { [mbti: string]: string } = {
  E: "외향",
  I: "내향",
  N: "직관",
  S: "감각",
  T: "사고",
  F: "감정",
  J: "판단",
  P: "인식",
};

export const MBTIResult: {
  [mbti: string]: {
    abstract: string;
    title: string;
    subtitle: string;
    description: string;
  };
} = {
  ENTP: {
    abstract: "오리연못",
    title: "(파스쿠치 아메리카노 테이크아웃 후)\n오리연못 벤치",
    subtitle: "아무리 생각해도 내가 최고야,\n자화자찬 스타일이에요!",
    description:
      "아주 즉흥적이고 추진력이 강한 당신. 혼자서 노는 것이 가장 편한 마이웨이 타입이네요. 자기 스스로를 아주 사랑하고, 지나간 일에 후회가 없는 편이에요. 내가 좋아하는 사람에게는 한없이 다정하지만, 그렇지 않으면 무섭게 쳐내버리기도 해요. 친구가 많은듯 보이지만, 사실 가장 편안함을 느낄 때는 바로 화창한 날씨를 혼자 즐길 때랍니다. 직설적이고 솔직한 당신과 꼭 친구하고 싶어요!",
  },
  ENTJ: {
    abstract: "어은동산",
    title: "(자연을 즐기자! 산책하러 올라간)\n어은동산",
    subtitle:
      "세상에 믿을 사람은 나 하나라고 생각하는,\n인생의 개척자 스타일이에요!",
    description:
      "활동적이고 새로운 사람들을 만나는걸 즐기지만, 더 깊은 관계를 맺는건 별로 좋아하지 않는 당신. 외출을 하더라도 친구들과의 약속보다는 자연 속에서 사색하는 걸 더 즐기는 타입이네요. 그럴 때마다 어은동산은 당신의 좋은 안식처가 되겠어요. 가끔은 공감 능력이 부족하다는 이야기를 듣기도 하지만, 현실적이고 논리적인 당신을 응원해요!",
  },
  ENFP: {
    abstract: "기숙사 휴게실",
    title: "(친구들과 수다떠는게 제일 좋아)\n기숙사 휴게실",
    subtitle: "의욕과 열정이 넘치는,\n얼렁뚱땅 빙글빙글 짱구 스타일이에요!",
    description:
      "순수하고 예술적이면서 하고 싶은게 참 많은 당신. 다재다능한 능력을 가지고 있어 어디에서든 주목받는 타입이네요. 사람 만나는 것을 좋아해 기숙사에서도 쉬지 않고 친구들을 만나며 스스로의 매력 에너지를 발산하고는 해요. 무엇이든 쉽게 몰두했다가 또 금방 포기하기도 해 다소 산만하다는 인상을 줄수도 있지만, 뭐 어때요. 당신과 함께 기숙사에서 수다 떠는 친구들은 귀여운 당신 덕분에 행복하지 않을까요?",
  },
  ENFJ: {
    abstract: "신학관 옥상",
    title: "(다같이 캔맥 사들고 가자! 별이 보이는)\n신학관 옥상",
    subtitle: "사람을 좋아해도 너무 좋아하는,\n골든 리트리버 스타일이에요!",
    description:
      "따뜻하고 적극적이며 사교성이 풍부한 당신. 사람들과의 모임을 좋아해 약속을 주기적으로 잡는 타입이네요. 친구들과 신학관 옥상에 올라가 맥주 마시는 상상을 해볼까요? 이 공기, 습도, 날씨… 너무 좋네요. 다른 사람들의 생각이나 의견을 적극적으로 지지하고 듣는 편이지만, 가끔은 비판적인 모습이 필요할 때도 있다는 것을 잊지 말아요. 상냥한 당신과 친구인 사람들은 정말 부럽네요!",
  },
  ESTP: {
    abstract: "어은동 길바닥",
    title: "(학생.. 여기서 자면 입돌아가...)\n어은동 길바닥",
    subtitle: "인생은 흘러가는 대로 사는 것,\n냇가의 시냇물 스타일이에요!",
    description:
      "센스 있고 유머러스하며, 삶을 즐기며 사는 당신. 사람을 좋아하고 관심받는 것도 좋아하지만, 또 막상 만사가 귀찮아질 때도 있겠네요. 술 먹고 기숙사까지 들어가기가 귀찮아서, 어은동 바닥에 그냥 누워버린 적은 없나요? 흘러가는 대로 살면서 다른 사람 눈치도 별로 보지 않는, 어쩌면 말썽꾸러기 같은 그대. 다소 위험한 일들도 거침없이 도전하는 모습에 홀딱 반하는 사람이 분명 있을 것 같아요!",
  },
  ESTJ: {
    abstract: "도서관",
    title: "(이번 학기 딘즈는 나야...)\n도서관",
    subtitle: "자신의 목표를 향해 달리는,\n야망의 경주마 스타일이에요!",
    description:
      "현실적이고 이성적이면서 호불호가 확실한 당신. 나가서 노는 것보단 이것저것 뭐라도 배우는 게 낫다고 생각하는 당신은 도서관에서 공부에 열중한 모습으로 자주 발견되곤 하죠. 자기 시간을 방해받는 것을 매우 싫어하고 남에게 관심 없는 타입이지만, 팀 활동에서 1인분을 못하는 팀원들 대신 3인분도 거뜬히 해내는 당신은 리더의 자질이 충분하네요!",
  },
  ESFP: {
    abstract: "태평소국밥",
    title: "(밤새 달리고 도착한 6시의)\n태평소",
    subtitle: "인생은 무조건 즐기는 것, \n자유로운 영혼 스타일이에요!",
    description:
      "모임을 사랑하며 하고 싶은 일은 모조리 해내고 마는 당신. 친구의 친구의 친구도 모두 내 친구처럼 생각하는 당신은 사람들 사이에서 가장 빛나요. 밤새 술을 마시고 해장까지도 친구들과 다함께 딱 마무리 해야 직성이 풀리겠네요. 성격이 급하면서도 귀찮음이 많은 그대, 안읽씹한 메신저가 쌓여있지는 않나요? 이 테스트가 끝나면 얼른 다 답장해주세요. 친구들이 당신을 기다리고 있다구요!",
  },
  ESFJ: {
    abstract: "택시 승강장",
    title: "(어제도 밥약, 오늘도 밥약, 내일도 밥약)\n택승",
    subtitle: "너가 아프면 나도 아파,\n따뜻한 쿠크다스 스타일이에요!",
    description:
      "가족, 친구, 내 주변 사람들을 모두 챙겨야만 스스로 마음이 편한 당신. 언제나 상대방을 편하게 해주는 당신은 사람들의 호감을 쉽게 얻을 수 있는 따뜻한 타입이네요. 밀려오는 밥약을 차마 거절하지 못해 꾸역꾸역 약속을 잡지만, 모든 사람들에게 맞추려고 하다가 스스로 스트레스 받고 있지는 않나요? 가끔은 눈치 보지 말고 혼자만을 위한 시간을 가져도 좋을 것 같아요!",
  },
  INTP: {
    abstract: "교수님 오피스",
    title: "(대학원 상담하러 간)\n교수님 오피스",
    subtitle:
      "혼자 있는 게 제일 편하고 행복한,\n자발적 아웃사이더 스타일이에요!",
    description:
      "사람 많고 시끄러운 곳을 싫어하고, 어리석은 사람들을 보면 화가 나는 당신. 자기 자신을 사랑하고 잘 상처받지 않으면서 논리적이기까지 한 당신은 대학원생이 참 잘 어울리네요. 주변에 사람들이 아주 많은건 아니지만, 남아있는 친구들과는 아주 찰떡처럼 잘 맞아요. 가끔은 게으르고 미루는 것을 좋아하지만, 지식에 대한 욕망이 누구보다 강한 만큼 반드시 좋은 결과를 낼 수 있을 거예요.",
  },
  INTJ: {
    abstract: "교양분관",
    title: "(매일 출근하는 내 자리)\n교분 2층 B-22",
    subtitle:
      "자신만의 시간과 공간을 즐기는,\n혼자 노는 게 제일 좋아 스타일이에요!",
    description:
      "자신이 좋아하는 책이나 그림, 작품들과 있을 때 행복감과 안도감을 느끼는 당신. 항상 같은 곳에 출근하며 혼자만의 시간을 즐기는 데에는 교분 구석 자리가 최고죠. 하루하루 세세한 계획을 짜두고, 외로움을 느낄 새도 없이 할 일에 몰두하는 타입이네요. 하지만 친구들과의 소소한 수다도 즐기는 편이에요. 가끔 무신경할 때도 있지만, 캠퍼스 안 고양이들에게는 한없이 친절한 당신을 알아요!",
  },
  INFP: {
    abstract: "교실 맨 뒤",
    title: "(동라나 먹으러 가실?)\n출튀를 노리는 창의관 교실 맨 뒷자리",
    subtitle:
      "혼자 있고 싶지만 외로운건 싫은,\n게으른 완벽주의자 스타일이에요!",
    description:
      "관심 받고 싶지만 부끄럽고, 하고 싶은게 많지만 귀찮고, 나가기 싫지만 막상 나가면 잘 노는 모순적인 당신. 열정 가득하게 수강 신청한 과목이지만, 막상 듣다보니 너무 지루해져서 종종 출튀를 하고 있지는 않나요? 시작은 창대하나 끝은 미약했던 상황들이 종종 있었겠지만, 당신이 진짜 좋아하는 일을 만나면 불꽃 튀는 집중력을 보여주기도 해요. 다음에 동라 먹으러 갈 때는 저도 껴주세요!",
  },
  INFJ: {
    abstract: "문화관 빈백",
    title: "문화관\n(빈백에서 자는 중)",
    subtitle: "나 혼자 노는게 제일 좋아,\n독립적인 뽀로로 스타일이에요!",
    description:
      "항상 계획적이고, 뭐든 미리미리 해치우는 당신. 어디서 무엇을 하든 혼자서 생각을 정리할 시간이 꼭 필요한 타입이네요. 친구들과 다같이 노는게 무의미하게 느껴질 때가 종종 있어, 소수의 친구들과 어울리는 것을 더 좋아해요. 할 일을 쌓아두지 않기 때문에 도서관이나 문화관에 NPC처럼 상주하곤 해요. 과제를 미루는 짜릿함 따위는 모르는 당신… 저와 함께 팀플 해주세요!",
  },
  ISTP: {
    abstract: "기숙사 방", // 바꾸세요
    title: "(헤드폰과 노트북만 있으면 어디든 갈 수 있어)\n기숙사 방",
    subtitle: "다음 생에는 돌로 태어날래,\n모든게 귀찮아 스타일이에요!",
    description:
      "숨 쉬는 것 빼고는 전부 귀찮다고 생각하는 당신. 다른 사람에게 큰 관심이 없고, 내 얘기도 굳이 해야할 필요를 못느끼는 타입이네요. 시끄러운 것도 싫고, 혼자만의 문화생활이 훨씬 더 행복하게 느껴지는 당신에게 굳이 다른 사람들은 필요하지 않겠네요! 시험 공부도 귀찮게 느껴져 미루고 미루다 결국 벼락치기 하는 당신이지만, 뛰어난 관찰력과 논리력으로 기대 이상의 성과를 내곤 해요. 부러워요!",
  },
  ISTJ: {
    abstract: "교실 맨 앞",
    title: "(교수님의 사랑을 독차지 하겠어...)\n창의관 교실 맨 앞자리",
    subtitle: "계획한건 무조건 해낸다,\n욕망의 불도저 스타일이에요!",
    description:
      "원리원칙적이고 계획적인 당신. 즉흥적인 이벤트도, 시간 약속을 어기는 것도 싫어하는 당신은 혼자 있을 때 가장 편안함을 느끼는 타입이네요. 다른 사람들이 내게 관심 가지지 않았으면 좋겠고 나 역시 남들에게 큰 관심이 없어요. 가끔은 공감능력이 부족한 것 같다는 소리도 듣지만, 다 함께 하는 일에 가장 책임감을 갖고 임하는 사람도 바로 당신이네요. 한 번 시작한 일은 반드시 해내는 당신에게 반할 것 같아요!",
  },
  ISFP: {
    abstract: "기숙사 방 침대", // 바꾸세요
    title: "(마음만은 교분에 있어...)\n기숙사 방 침대",
    subtitle: "침대와 물아일체,\n집돌이/집순이 스타일이에요!",
    description:
      "겸손하고 낙천적인 당신. 누워있는 것 빼고는 모두 귀찮은 당신은 침대에 누워있을 때가 가장 행복한 타입이에요. 친구들과의 약속이 있었는데 갑자기 취소되면 속으로 내심 기뻐하기도 하나요? 미룰 수 있는 모든 일을 미루는 당신은 시험 기간에도 침대의 유혹을 뿌리치기 힘들어요. 성격도 침대처럼 폭신한 당신은 배려심이 깊어 많은 사람들에게 사랑받겠네요!",
  },
  ISFJ: {
    abstract: "잔디밭",
    title: "(딸기 파티 하는)\n중도 앞 잔디밭",
    subtitle: "온화한 원칙주의자,\n봄날의 햇살 스타일이에요!",
    description:
      "다른 사람을 챙기는 것을 좋아하는 당신. 혹시 딸기파티 때 필요한 준비물들을 솔선수범하여 챙기고 있지는 않았나요? 많은 사람들과 함께 노는 걸 크게 좋아하는 편은 아니지만, 가끔 소규모로 옹기종기 모여서 하는 작은 딸기파티는 즐겁게 참여하는 타입이에요. 계획 세우는 걸 좋아해 이런 이벤트가 있으면 앞장서서 주도하기도 해요. 배려심 가득한 당신과 저도 딸기파티 하고 싶어요. 막걸리는 필수!",
  },
};

export interface MBTIListElem {
  type: MBTIResultType;
}
export const MBTIList: MBTIListElem[] = [
  { type: "ENTP" },
  { type: "ENTJ" },
  { type: "ENFP" },
  { type: "ENFJ" },
  { type: "ESTP" },
  { type: "ESTJ" },
  { type: "ESFP" },
  { type: "ESFJ" },
  { type: "INTP" },
  { type: "INTJ" },
  { type: "INFP" },
  { type: "INFJ" },
  { type: "ISTP" },
  { type: "ISTJ" },
  { type: "ISFP" },
  { type: "ISFJ" },
];
