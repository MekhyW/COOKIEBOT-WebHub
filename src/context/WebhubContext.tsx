import { createContext, useContext, useState } from "react"

const WebhubContext = createContext({} as any);

export const WebhubProvider = (props: any) => {

    const [language, setLanguage] = useState(navigator.language);
    const [userId, setUserId] = useState("");
    const [groups, setGroups] = useState([]);


    const data = {
        language: language,
        setLanguage: (lang:any) => setLanguage(lang),
        userId: userId,
        setUserId: (id:any) => setUserId(id),
        groups: groups,
        setGroups: (gr:any) => setGroups(gr)
    }

    return (
        <WebhubContext.Provider value={data}>
            {props.children}
        </WebhubContext.Provider>

    )
}
export const useWebhubContext = () => useContext(WebhubContext);