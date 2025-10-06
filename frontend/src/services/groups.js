import api from "../api"

export async function listGroups() {
    const { data } = await api.get("/groups");
    return data;
  }

export async function createGroup (payload) {
    const {data} = await api.post("/groups", payload);
    return data;
}