import { useGame } from "./GameContext";

export default function Welcome(){
    const {start, highscores} = useGame();
    return (
        <>
        <section>
        <p>Welcome to Whack-A-Mole</p>
        <p>Whack a mole to earn points</p>
        <button onClick={start}>Play</button>
        </section>
        <section>
            <h2>High Scores</h2>
            <ul>
                {highscores.length > 0 ? (
                    highscores.map((score, i) => <li key={i}>{score}</li>)
                ) : (
                    <li>No score yet...press play to earn some points!</li>
                )}
            </ul>
        </section>
        </>
    );
}