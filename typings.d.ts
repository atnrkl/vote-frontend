export type Poll = {
  id: string;
  title: string;
  question: Question[];
  totalVote: number;
};

export type Option = {
  option?: string;
  voteCount?: number;
};
export type Question = {
  questionTotalVote?: number;
  id?: string;
  title?: string;
  options?: Option[];
};

export interface SurveyResData {
  surveyId: string;
  surveyName: string;
  surveyItems: SurveyResDataQuestions[];
}

export interface SurveyResDataQuestions {
  id: string;
  question: string;
  options: SurveyResDataOptions[];
}

export interface SurveyResDataOptions {
  option: string;
  voteCount: number;
}
