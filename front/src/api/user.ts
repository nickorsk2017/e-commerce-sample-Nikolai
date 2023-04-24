import fetchNode from 'node-fetch';
import data from "@/mock/userData.mock";
const env = process.env.NODE_ENV

const api = {
    user: {
        getData: async () => {
            // для теста production версии
            // так как в качестве сервера API используется сам app next.js
            // на production версии не работает next.js api так он запускается одним процессом из packages
            if(env !== "production") {
                const response = await fetchNode("http://localhost:3000/api/user-data");
                const data = await response.json() as Entity.UserData;
                return data;
            } else {
                return data;
            }
        }
    }
}

export default api;