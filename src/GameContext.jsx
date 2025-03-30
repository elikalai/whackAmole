import { createContext, useContext, useState, useEffect, useRef } from "react";

const HOLES = 9;
const TIMELIMIT = 15

const GameContext = createContext();

export function GameProvider({children}){
    const [field, setfield]  = useState(makefield());
    const [score , setScore] = useState(0);
    const [highscores, setHighScores] = useState([]);
    const [playing,  setPlaying] = useState(false);
    const [time, setTime] = useState(TIMELIMIT);
    const timer = useRef();

    useEffect(() => {
        if (time <= 0) stop();
    }, [time]);
    const whack = () => {
    setfield(makefield());
    setScore(score +  1);
    };
    const start = () => {
        setScore(0);
        setfield(makefield());
        setPlaying(true);
        timer.current = setInterval(() => setTime((time) => time - 1), 1000);
    };
    const stop = () => {
        setPlaying(false);
        const newScores = [...highscores, score].sort((a, z) => z - a);
        setHighScores(newScores.slice(0, 5));
        clearInterval(timer.current);
        setTime(TIMELIMIT);   
    };

    const value = {field, score, highscores, playing, time, whack, start, stop};
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export function useGame(){
    const context = useContext(GameContext);
    if (!context) throw  Error("useGame must be used in GameProvider");
    return context;
}

function makefield(){
    const field = Array(HOLES).fill(false);
    let mole = Math.floor(Math.random() * HOLES);
    while (field[mole]) {
        mole = Math.floor(Math.random() * HOLES)    
    }
    field[mole] = true;
    return field;
}

