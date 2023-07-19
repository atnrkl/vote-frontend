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
