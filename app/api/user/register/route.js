// Import libraries //


// Import tools //
import { NextResponse } from "next/server";
import User from "../../../../models/user.js";

export const runtime = 'nodejs';

// Create get route to retrieve all users //
export async function GET() {
    try{
const users = await User.findAll();
if (!users) {
    return NextResponse.json({ error: "can not find users" }, { status: 400 });
}

return NextResponse.json(users);

    } catch (err) {
        return NextResponse.json({ error: "failed retrieving user" }, { status: 400 });
    }
}


// Create post route to register user //
export async function POST(req) {
    try{
const { full_name, email, password } = await req.json();
if (!full_name || !email || !password ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
}

const userRegister = await User.create(
    {
    full_name,
    email: email.trim().toLowerCase(),
    password
    })

    return NextResponse.json(userRegister, { status: 200 });

    } catch (err) {
        const msg =
          process.env.NODE_ENV === "development"
            ? err.parent?.sqlMessage || err.message
            : "Error retrieving groups";
        return NextResponse.json(msg, { error: "failed creating user" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic";