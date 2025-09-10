import { NextResponse } from "next/server";
import { User } from "@/models";

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user id" }, { status: 400 });
    }

    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted successfully", id }, { status: 200 });
  } catch (err) {
    const msg =
      process.env.NODE_ENV === "development"
        ? err.parent?.sqlMessage || err.message
        : "Failed deleting user";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}


// export force dynamic //
export const dynamic = "force-dynamic";
