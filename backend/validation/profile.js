import { z } from "zod";

export const profileCreate = z.object({
    linkedin: z.string().optional(),
    whatsapp: z.string().optional(),
    instagram: z.string().optional(),
    snapchat: z.string().optional(),
    tiktok: z.string().optional(),
    notes: z.string().optional(),
    interests: z.string().optional(),
    full_name: z.string().min(1, "Name required"),
    address: z.string().optional(),
    mobile_number: z.int().optional(),
    email: z.string().email().optional(),
    date_of_birth: z.coerce.date().optional(),
    groupsId: z.string().uuid(),
});

export const profileUpdate = profileCreate.partial();

export const profileUpdateWithId = profileUpdate
  .extend({ id: z.string().uuid() })
  .refine((d) => {
    if (d.full_name !== undefined) return true;
    if (d.linkedin !== undefined) return true;
    if (d.whatsapp !== undefined) return true;
    if (d.instagram !== undefined) return true;
    if (d.snapchat!== undefined) return true;
    if (d.tiktok !== undefined) return true;
    if (d.date_of_birth !== undefined) return true;
    if (d.email !== undefined) return true;
    if (d.address !== undefined) return true;
    if (d.mobile_number !== undefined) return true;
    if (d.interests !== undefined) return true;
    if (d.groupsId !== undefined) return true;
    return false;
  }, { message: "No fields to update" })  

export const profileDelete = z.object({
    id: z.string().uuid(),
})

export const optionalProfileDelete = profileDelete.partial();

export default {
    profileCreate, 
    profileDelete, 
    profileUpdate, 
    optionalProfileDelete,
    profileUpdateWithId
};
