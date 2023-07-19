import VotePoll from "../components/VotePoll";

type Props = {};

const VoteSurveyPage = (props: Props) => {
  return (
    <main className="flex min-h-screen w-full min-w-screen flex-col items-center justify-between p-24 bg-yellow-400">
      <VotePoll />
    </main>
  );
};

export default VoteSurveyPage;
