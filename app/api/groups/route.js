// Import libraries //
import {sequelize} from '@/lib/db.js'

// Import tools //
import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

// Import model files //

import { groups } from "@/model/groups.js";

// Create a get route to retrieve all groups //
export async function GET(req) {
    try {
    const groups = await groups.findAll({
        include: {
            model: User,
            as: "groups",
        }
    });

    return NextResponse.json(groups, {status:200});
    } catch (err) {
        return NextResponse.json({ error: "Error retrieving groups" }, { status: 500 });
    }
}


// Create a post route to create a group //
export async function POST(req) {
    try {
    const { name, linkedin, whatsapp, instagram, snapchat, tiktok, notes } = req.json;

    if (!name) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }
         
    const createGroup = await groups.create({
        name, linkedin, whatsapp, instagram, snapchat, tiktok, notes })
        
        return NextResponse.json(createGroup, { status: 200 });

    } catch (err) {
        return NextResponse.json({ error: "failed creating group" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic"
