import { zod } from "zod";

const userCreate = zod.object({
    name: zod.string().min(3),
    email:zod.string().email(),
    password:zod.string().min(8),
});

const optionalUsercreate = zod.partial();

export default {userCreate, optionalUsercreate};