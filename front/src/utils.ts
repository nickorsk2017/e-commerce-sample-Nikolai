import {decode} from 'html-entities';
import {useContext} from "react";
import {MobxContext} from "@/store/Provider"

export const useStore = () => {
    const context = useContext(MobxContext);
    return context;
}

export const decodeHTML = (htmlString: string, clearTags?: boolean) => {
    let html = decode(htmlString).replaceAll("&#39;", "'");
    if(clearTags){
        html = html.replace(/(<([^>]+)>)/gi, "")
    }
    return html
}