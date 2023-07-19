import { useState } from "react";
import { toast } from "react-hot-toast";
import { Poll, Question } from "../../typings";
import idGenerator from "../utils/idgenerator";
type Props = {};

const CreatePoll = (props: Props) => {
  const [option, setOption] = useState("");
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>();
  const [pollElements, setPollElements] = useState<Poll>();

  const addPollElement = () => {
    if (option.length < 1) {
      toast.error("Option can't be empty");
      return;
    }

    const newPollElement: Poll = {
      title: "good poll",
      id: idGenerator(),
      totalVote: 32,
      question: questions!,
    };

    setPollElements(newPollElement);
    setOption("");
  };

  const addQuestion = () => {
    setQuestions((prevQuestions) => {
      if (prevQuestions) {
        if (questions) {
          return [
            ...prevQuestions,
            {
              id: idGenerator(),
              title: "",
            },
          ];
        }
        return prevQuestions;
      }
      return questions || [];
    });
  };

  console.log(pollElements);

  return (
    <div className="space-y-5">
      <div>
        <input
          type="text"
          value={title}
          className="w-80 bg-transparent  outline-none border-b-2   ring-0 active:ring-0"
          placeholder="Enter a title"
          onChange={(val) => setTitle(val.target.value)}
        />
      </div>
      {pollElements?.question.map((question, index) => (
        <div
          key={index}
          className="w-80 cursor-pointer text-white hover:contrast-125 hover: max-w-md min-h-8 text-ellipsis break-words p-1  rounded-md bg-slate-800 flex items-center justify-center"
        >
          <h1>{question?.title}</h1>
          {question &&
            question?.options?.map((option) => <h2>{option.option}</h2>)}
        </div>
      ))}

      <div className="space-x-2 flex flex-col space-y-5 items-center justify-center">
        {
          <form className="space-x-2 flex items-center justify-center">
            <input
              value={option}
              className="p-1 rounded-md bg-yellow-300 border-2 border-slate-900"
              type="text"
              onChange={(e) => setOption(e.target.value)}
              placeholder="Option"
            />

            <button
              type="submit"
              className="bg-white  text-gray-900 text-sm h-8 w-12 p-1 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                addPollElement();
              }}
            >
              ADD
            </button>
          </form>
        }

        <button
          type="submit"
          className="bg-white text-gray-900 text-sm h-8 w-32 p-1  rounded-md"
          onClick={(e) => {
            e.preventDefault();
            addQuestion();
          }}
        >
          New Question
        </button>
        <button
          type="submit"
          className="bg-white text-gray-900 text-sm h-8 w-full p-1  rounded-md"
          onClick={(e) => {
            e.preventDefault();
            addPollElement();
          }}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreatePoll;
