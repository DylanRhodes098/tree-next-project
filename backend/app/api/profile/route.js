// Import libraries //


// Import tools //
import { NextResponse } from "next/server";
import { profileCreate } from "../../../validation/profile";


// Import model files //

import Profile from "../../../models/profile";

// Define node runtime //
export const runtime = 'nodejs';

// Create a get route to retrieve all profiles //
export async function GET(req) {
    try {
    const profiles = await Profile.findAll();

    return NextResponse.json(profiles, {status:200});
    } catch (err) {
        console.error("GET /api/groups failed:", err);
        const msg =
          process.env.NODE_ENV === "development"
            ? err.parent?.sqlMessage || err.message
            : "Error retrieving groups";
        return NextResponse.json(msg, { error: "Error retrieving profiles" }, { status: 500 });
    }
}


// Create a post route to create a profile //
export async function POST(req) {
    try {
    const body = await req.json();
    const parsed = profileCreate.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: "Missing fields", message: parsed.error.format() }, { status: 400 });
      }
         
      const createProfile = await Profile.create(parsed.data);
        
        return NextResponse.json(createProfile, { status: 200 });

    } catch (err) {
        const msg =
        process.env.NODE_ENV === "development"
          ? err.parent?.sqlMessage || err.message
          : "Error retrieving groups";
        return NextResponse.json(msg, { error: "failed creating profile" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic"