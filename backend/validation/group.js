import { z } from "zod";

export const groupCreate = z.object({
    name: z.string().min(1, "Name required"),
    linkedin: z.string().optional(),
    whatsapp: z.string().optional(),
    instagram: z.string().optional(),
    snapchat: z.string().optional(),
    tiktok: z.string().optional(),
    notes: z.string().optional(),
});

export const groupUpdate = groupCreate.partial();

export const groupUpdateWithId = groupUpdate
  .extend({ id: z.string().uuid() })
  .refine((d) => {
    if (d.name !== undefined) return true;
    if (d.linkedin !== undefined) return true;
    if (d.whatsapp !== undefined) return true;
    if (d.instagram !== undefined) return true;
    if (d.snapchat!== undefined) return true;
    if (d.tiktok !== undefined) return true;
    if (d.notes !== undefined) return true;
    return false;
  }, { message: "No fields to update" })  

export const groupDelete = z.object({
    id: z.string().uuid(),
})

export const optionalgroupDelete = groupDelete.partial();

export default {
    groupCreate, 
    groupDelete, 
    groupUpdate, 
    optionalgroupDelete,
    groupUpdateWithId
};

