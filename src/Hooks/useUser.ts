import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { StudyContext } from "../context/StudyContext";

export function useAuth(){
    const context = useContext(userContext);

    if(!context){
        throw new Error("No Context");
    }

    return context;
}

export function useUser(){
    const context = useContext(StudyContext);

    if(!context){
        throw new Error("No Context");
    }

    return context;
}