// Import libraries //
import {sequelize} from '@/lib/db.js'

// Import tools //
import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

// Import model files //

import { profile } from "@/model/groups.js";

// Create a get route to retrieve all profiles //
export async function GET(req) {
    try {
    const profiles = await profile.findAll({
        include: {
            model: groups,
            as: "profile",
        }
    });

    return NextResponse.json(profiles, {status:200});
    } catch (err) {
        return NextResponse.json({ error: "Error retrieving profiles" }, { status: 500 });
    }
}


// Create a post route to create a profile //
export async function POST(req) {
    try {
    const { full_name, address, mobile_number, email, date_of_birth, linkedin, whatsapp, instagram, snapchat, tiktok, interests, notes } = req.json;

    if (!full_name) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }
         
    const createProfile = await groups.create({
        full_name, address, mobile_number, email, date_of_birth, linkedin, whatsapp, instagram, snapchat, tiktok, interests, notes })
        
        return NextResponse.json(createProfile, { status: 200 });

    } catch (err) {
        return NextResponse.json({ error: "failed creating profile" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic"