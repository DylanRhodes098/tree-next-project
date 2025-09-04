// Import libraries //

// Import tools //
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/auth";

// Import model files //

import { User } from "@/models/user";

// Create post route to register user //
export async function POST(req) {
    try{
const { email, password } = await req.json();
if (!email || !password ) {
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
        return NextResponse.json({ error: "failed creating user" }, { status: 400 });
    }
}

export const dynamic = "force-dynamic";