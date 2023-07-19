import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router, useParams, useNavigate } from "react-router-dom";
import dataDummy from "../assets/resdata.json";
import { toast } from "react-hot-toast";

type Props = {};

const VotePoll = (props: Props) => {
  const [isVoted, setIsVoted] = useState(false);
  const navigate = useNavigate();
  let { surveyId } = useParams();

  useEffect(() => {
    if (isVoted) {
      navigate(`/result/${surveyId}`);
    }
  }, [isVoted]);
  //   useEffect(() => {
  //     axios.get("");
  //   }, [surveyId]);

  const handleVote = async (qIndex: number, oIndex: number) => {
    const votes = {
      qIndex,
      oIndex,
    };

    const res = await axios.post("url to post", votes);

    if (res.status === 200) {
      toast.success(" VOTED ");
      setIsVoted(true);
    }
  };

  console.log(surveyId);
  return (
    <main>
      <div>
        {dataDummy.surveyItems.map((question, qIndex) => {
          return (
            <div key={qIndex}>
              <h1 className="mb-5 font-semibold text-lg bg-slate-100 p-2 rounded-md">
                {question.question}
              </h1>
              <div className="space-y-3">
                {question.options.map((option, oIndex) => (
                  <div
                    key={oIndex}
                    onClick={() => handleVote(qIndex, oIndex)}
                    className="w-80 cursor-pointer text-white hover:contrast-125 hover: max-w-md min-h-8 text-ellipsis break-words p-1  rounded-md bg-slate-800 flex items-center justify-center"
                  >
                    <h1>{option.option}</h1>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default VotePoll;
