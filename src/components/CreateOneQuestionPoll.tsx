import { useState } from "react";
import { toast } from "react-hot-toast";
import idGenerator from "../utils/idgenerator";
import axios from "axios";

type Props = {};

type Option = {
  option: string;
  count: 0;
};

const CreatePoll = (props: Props) => {
  const [option, setOption] = useState<Option[]>([]);
  const [optionInput, setOptionInput] = useState("");
  const [title, setPollTitle] = useState("");
  const [surveyLink, setSurveyLink] = useState("");

  const addOption = () => {
    if (optionInput.length < 1) {
      toast.error("Option can't be empty");
      return;
    }

    const newOption: Option = {
      option: optionInput,
      count: 0,
    };

    setOption((prevOptions) => [...prevOptions, newOption]);
    setOptionInput("");
  };

  console.log(option);

  const createPoll = async () => {
    // valitade
    if (option.length < 1) {
      toast.error("Add at least 1 option");
      return;
    }

    if (title.length < 1) {
      toast.error("Enter a title");
      return;
    }
    const newPoll = {
      surveyName: title,
      surveyId: idGenerator(),
      surveyItems: [
        {
          id: idGenerator(),
          question: title,
          options: option,
        },
      ],
    };

    try {
      const res = await axios.post("http://localhost:3000/survey", newPoll);

      if (res) {
        // return a link for votepage
        console.log(res);
        setSurveyLink(`baseurl/${res.data.surveyId}`);
        return toast((t) => (
          <span>
            {surveyLink}
            <button
              onClick={() => {
                navigator.clipboard.writeText(surveyLink);
                toast.success("copied");
                toast.dismiss(t.id);
              }}
            >
              Copy
            </button>
          </span>
        ));
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-5">
      <input
        type="text"
        className="bg-transparent border-0 outline-none text-xl font-semibold tracking-wide w-80 cursor-pointer text-white  max-w-md min-h-8 text-ellipsis break-words p-1  rounded-md "
        placeholder="Enter a title "
        value={title}
        onChange={(e) => setPollTitle(e.target.value)}
      />
      {option.map((optItem, index) => (
        <div
          key={index}
          className="w-80 cursor-pointer text-white hover:contrast-125 max-w-md min-h-8 text-ellipsis break-words p-1  rounded-md bg-slate-800 flex items-center justify-center"
        >
          <h3>{optItem.option}</h3>
        </div>
      ))}
      <div className="flex flex-row space-x-3">
        <input
          value={optionInput}
          className="p-1 rounded-md bg-yellow-300 border-2 border-slate-900"
          type="text"
          onChange={(e) => setOptionInput(e.target.value)}
          placeholder="Option"
        />

        <button
          className="bg-white  text-gray-900 text-sm h-8 w-12 p-1 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            addOption();
          }}
        >
          ADD
        </button>
      </div>
      <button
        className="bg-white  text-gray-900 text-sm h-8 w-32 p-1 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          createPoll();
        }}
      >
        CREATE SURVEY
      </button>
    </div>
  );
};

export default CreatePoll;
