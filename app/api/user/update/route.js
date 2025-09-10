// Import tools //
import { NextResponse } from "next/server";

// Import files //
import User from "../../../../models/user";

// Initiate PUT function to edit user //
export async function PUT(req) {
    try {
        const { id, full_name, email, password } = await req.json();
        const user = await User.update ({full_name, email, password }, { where: {id}});

        if (!user) {
            return NextResponse.json({ error: "can not find user id" }, { status: 400 });
        }

        const updatedUser = await User.findByPk(id); 

        return NextResponse.json ({message: "user updated", user: updatedUser }, { status: 200 });

        } catch (err) {
            return NextResponse.json({ error: "failed updating user" }, { status: 400 });
        }
    }


// define force dunamic //
export const dynamic = "force-dynamic";