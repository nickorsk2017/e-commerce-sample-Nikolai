import {useContext} from "react";
import {MobxContext} from "@/store/Provider"

export const useStore = () => {
    const context = useContext(MobxContext);
    return context;
}