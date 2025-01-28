import React, { createContext, useState } from "react";
import { Elevels } from "../types/@types";


export interface IGameMode {
    level: Elevels;
}

export interface IGameModeContext{
    gameMode: IGameMode;
    setGameMode: React.Dispatch<React.SetStateAction<IGameMode>>;
}

export const GameModeContext = createContext<IGameModeContext>({gameMode: {level: Elevels.MEDIUM }, setGameMode: () => {} });

export const GameModeProvider = (props: {children: React.ReactNode}) => {
   const[gameMode, setGameMode] = useState<IGameMode>({level: Elevels.MEDIUM })


    return <GameModeContext.Provider value={{gameMode, setGameMode}}>{props.children}</GameModeContext.Provider>
}