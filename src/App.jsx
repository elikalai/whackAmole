import { useGame } from "./GameContext";
import Field from "./Field";
import ScoreBoard from "./ScoreBoard";
import Welcome from "./Welcome";

export default function App() {
  const {playing} = useGame();
  return (
    <>
    <h1>Whack-a-Mole</h1>
    {playing ? (
      <>
      <ScoreBoard/>
      <Field/>
      </>
    ) : (
      <Welcome/>
    )}
    </>
  );
}

