import { QUESTIONS } from "../constants";
import { TimerIcon } from "./icons";

export default function PlayingGame({
  room,
  onlinePlayers,
  playerName,
  timeLeft,
  answered,
  answer,
}) {
  const q = QUESTIONS[room.currentQuestion];
  const sortedPlayers = [...onlinePlayers].sort((a, b) => b.score - a.score);
  const myPosition = sortedPlayers.findIndex((p) => p.id === playerName) + 1;
  const myScore = sortedPlayers.find((p) => p.id === playerName)?.score || 0;

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      {/* Compact Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="bg-white px-4 py-2 rounded-xl border-2 border-gray-200">
            <span className="text-sm font-black text-indigospark">
              Soal {room.currentQuestion + 1}/{QUESTIONS.length}
            </span>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border-2 border-gray-200">
            <span className="text-sm font-black text-indigospark">
              #{myPosition} · {myScore}
            </span>
          </div>
        </div>
        <div className="bg-indigospark px-4 py-2 rounded-xl border-2 border-indigospark flex items-center gap-2">
          <TimerIcon className="w-4 h-4 text-yellowpulse" />
          <span className="font-black text-lg text-white">{timeLeft}s</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col">
          {/* Question */}
          <div className="bg-yellowpulse/10 border-2 border-yellowpulse/30 rounded-3xl p-8 mb-6">
            <h3 className="text-3xl font-black text-indigospark text-center leading-tight">
              {q.q}
            </h3>
          </div>

          {/* Compact Leaderboard */}
          <div className="mb-8 overflow-hidden">
            <div className="flex gap-2 justify-center">
              {sortedPlayers.slice(0, 3).map((p, index) => (
                <div
                  key={p.id}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border-2 ${
                    p.id === playerName
                      ? "bg-indigospark border-indigospark"
                      : index === 0
                        ? "bg-yellowpulse/20 border-yellowpulse/40"
                        : "bg-white border-gray-200"
                  }`}
                >
                  <span
                    className={`text-xs font-black ${
                      p.id === playerName
                        ? "text-yellowpulse"
                        : index === 0
                          ? "text-indigospark"
                          : "text-indigospark"
                    }`}
                  >
                    #{index + 1}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      p.id === playerName ? "text-white" : "text-indigospark"
                    }`}
                  >
                    {p.name}
                  </span>
                  <span
                    className={`text-xs font-black ${
                      p.id === playerName ? "text-white" : "text-indigospark"
                    }`}
                  >
                    {p.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {q.options.map((o) => (
              <button
                key={o}
                onClick={() => answer(o)}
                disabled={answered || timeLeft === 0}
                className={`py-12 rounded-2xl font-black text-2xl border-2 transition-colors ${
                  answered || timeLeft === 0
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-indigospark text-white border-indigospark hover:bg-indigoflow active:bg-indigonight"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
