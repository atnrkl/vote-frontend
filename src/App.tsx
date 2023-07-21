import "./App.css";
import CreateOnePoll from "./components/CreateOneQuestionPoll";

function App() {
  return (
    <main className="flex min-h-screen w-full min-w-screen flex-col items-center justify-between p-24 bg-yellow-400">
      <CreateOnePoll />
    </main>
  );
}

export default App;
