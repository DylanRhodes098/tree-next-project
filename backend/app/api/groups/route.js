// Import libraries //
import {sequelize} from '@/lib/db.js'

// Import tools //
import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import {groupCreate} from "../../../validation/group";

// Import model files //

import {Group} from "../../../models/group";

// Define node runtime //
export const runtime = 'nodejs';

// Create a get route to retrieve all groups //
export async function GET(req) {
    try {
    const groups = await Group.findAll();

    return NextResponse.json(groups, {status:200});
    } catch (err) {
        const msg =
          process.env.NODE_ENV === "development"
            ? err.parent?.sqlMessage || err.message
            : "Error retrieving groups";
        return NextResponse.json(msg, { error: "Error retrieving groups" }, { status: 500 });
    }
}


// Create a post route to create a group //
export async function POST(req) {
    try {
    const body = await req.json();
    const parsed = groupCreate.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: "Missing fields", message:parsed.error.format() }, { status: 400 });
      }
    
      const { name, linkedin, whatsapp, instagram, snapchat, tiktok, notes } = parsed.data;
         
        const createGroup = await Group.create({
        name, linkedin, whatsapp, instagram, snapchat, tiktok, notes })
        
        return NextResponse.json(createGroup, { status: 200 });

    } catch (err) {
        const msg =
          process.env.NODE_ENV === "development"
            ? err.parent?.sqlMessage || err.message
            : "Error retrieving groups";
        return NextResponse.json({ msg, error: "failed creating group" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic"
