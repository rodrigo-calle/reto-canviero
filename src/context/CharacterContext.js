import React, { useState, createContext, useContext, useEffect } from "react";
import { getAllCharacters } from "../services/api/api.data";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const initialState = [];
    
    // getAllCharacters()
    //     .then((data) => initialState.push(data))
    

    const [charact, setCharact] = useState(initialState);
    useEffect(()=> {
        getAllCharacters()
        .then((data) => setCharact(data))
    }, [])

    
    const valuesToPass = {
        charact,
        setCharact,
    };
    
    return(
        <CharacterContext.Provider value={valuesToPass}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacterContext = () => {
    const context = useContext(CharacterContext);
    if(context === undefined) {
        throw new Error('useCharacterContext is generating an error');
    }
    return context;
}