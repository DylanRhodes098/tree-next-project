import api from "../api";

export async function listProfiles () {
const {data} = await api.get ("/profile");
return data;
}

export async function createProfiles (payload) {
    const {data} = await api.post ("/profile", payload);
    return data;
    }
    

