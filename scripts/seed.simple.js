import "dotenv/config";
import fs from "node:fs";
import path from "node:path";

import sequelize from "../lib/db.js";  
import User from "../models/user.js";

async function main() {
  console.log("Connecting to DB");
  await sequelize.authenticate();

  console.log("Syncing schema");
  await sequelize.sync({ force: true });

  const file = path.join(process.cwd(), "seed", "user.json");
  const users = JSON.parse(fs.readFileSync(file, "utf8"));

  console.log(`Seeding`);
  await User.bulkCreate(users, {validate: true,});

  console.log("Seeding complete!");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Seeding failed:");
  console.error(err);
  process.exit(1);
});
