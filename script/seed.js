// Import libraries //
import path from "node:path";
import { promises as fs } from "node:fs";

// Import files //
import sequelize from "@/lib/db";               
import User from "@/models/user";               
import Post from "@/models/post";               

// - - - Configuration - - - //

// Define SEED_ENV //
const ENV = process.env.SEED_ENV || process.env.NODE_ENV || "development";

// Define SEED_FORCE //
const FORCE =
  String(process.env.SEED_FORCE || "").toLowerCase() === "true" &&
  ENV !== "production";

// Define seed data folder locaiton //
const DATA_BASE = path.join(process.cwd(), "seed", "data");

// Define seed data files //
const FILES = {
  users: "users.json",
  groups: "groups.json",
  profile: "profile.json"
};

// - - - helpers - - - //

// Initiate funciton to check if file exists //
async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

// Initiate funciton to locate seed files //
async function resolveDataFile(fileName) {
  const envPath = path.join(DATA_BASE, ENV, fileName);
  if (await fileExists(envPath)) return envPath;

  const fallbackPath = path.join(DATA_BASE, "default", fileName);
  if (await fileExists(fallbackPath)) return fallbackPath;

  return null; 
}

// Initiate funciton to read located seed files //
async function loadJSON(fileName) {
  const fullPath = await resolveDataFile(fileName);
  if (!fullPath) return null;
  const raw = await fs.readFile(fullPath, "utf8");
  return JSON.parse(raw);
}

// --- Seed routine -------------------------------------------------------

async function seed() {
  console.log(`\n🌱 Seeding environment: ${ENV}`);
  console.log(`- FORCE sync: ${FORCE ? "ON (tables will be dropped)" : "OFF"}\n`);

  await sequelize.authenticate();

  await sequelize.sync({ force: FORCE });

  const userData = await loadJSON(FILES.users);
  if (userData && userData.length) {
  
    await User.bulkCreate(userData, { validate: true, individualHooks: true });
    console.log(`✅ Users inserted: ${userData.length}`);
  } else {
    console.log("➡️  Skipping users: no data file found");
  }

  const groupsData = await loadJSON(FILES.groups);
  if (groupsData && postsData.length) {
    await Post.bulkCreate(groupsData, { validate: true, individualHooks: true });
    console.log(`✅ Posts inserted: ${groupsData.length}`);
  } else {
    console.log("➡️  Skipping groups: no data file found");
  }

const profileData = await loadJSON(FILES.profile);
  if (profileData && postsData.length) {
    await Post.bulkCreate(profileData, { validate: true, individualHooks: true });
    console.log(`✅ profile inserted: ${groupsData.length}`);
  } else {
    console.log("➡️  Skipping profile: no data file found");
  }

  console.log("\n✅ Seeding complete!\n");
}

// - - - Run - - - //

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });
