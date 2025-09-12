import { z } from "zod";

export const userCreate = z.object({
    full_name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
});

export const userUpdate = userCreate.partial();

export const userDelete = z.object({
    id: z.string().uuid()({ version: "uuidv4" })
})

export const optionalUserDelete = userDelete.partial();

export default {
    userCreate, 
    userDelete, 
    userUpdate, 
    optionalUserDelete,
};