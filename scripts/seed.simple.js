import "dotenv/config";
import fs from "node:fs";
import path from "node:path";

import sequelize from "../lib/db.js";  

import User from "../models/user.js";
import Groups from "../models/groups.js";
import Profile from "../models/profile.js";

async function main() {
  console.log("Connecting to DB");
  await sequelize.authenticate();

  console.log("Syncing schema");
  await sequelize.sync({ force: true });

  const userfile = path.join(process.cwd(), "seed", "user.json");
  const users = JSON.parse(fs.readFileSync(userfile, "utf8"));

  const groupsfile = path.join(process.cwd(), "seed", "groups.json");
  const groups = JSON.parse(fs.readFileSync(groupsfile, "utf8"));

  const profilefile = path.join(process.cwd(), "seed", "profile.json");
  const profile = JSON.parse(fs.readFileSync(profilefile, "utf8"));

  console.log(`Seeding`);
  await User.bulkCreate(users, {validate: true,});
  await Groups.bulkCreate(groups, {validate: true,});
  await Profile.bulkCreate(profile, {validate: true,});

  console.log("Seeding complete!");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Seeding failed:");
  console.error(err);
  process.exit(1);
});
