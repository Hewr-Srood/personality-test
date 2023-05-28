export interface IQuestion {
  id: number;
  title: string;
  answers: {
    id: number;
    answer: string;
    personalityTrait: string;
  }[];
}
export interface IResult {
  [key: string]: {
    id: number;
    title: string;
    answer: string;
    personalityTrait: string;
  };
}
export interface IAnswer {
  id: number;
  question_id: number;
  title: string;
  answer: string;
  personalityTrait: string;
}
