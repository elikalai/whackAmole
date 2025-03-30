import { useGame } from "./GameContext";

export default function ScoreBoard(){
    const {score, time, stop} = useGame();
    return (
        <section>
            <p>Score: {score}</p>
            <p>Time: {time}</p>
            <button onClick={stop}>Resart</button>
        </section>
    );
}