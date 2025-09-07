import { NextResponse } from "next/server";
import sequelize from "../../../lib/db.js";

export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    cwd: process.cwd(),
    dialect: sequelize.getDialect(),
    env_db: process.env.DB_DATABASE,
  });
}

