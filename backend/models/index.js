// Import libararies //
import sequelize from "../lib/db";
import { DataTypes } from "sequelize";

// Import model files //

import User from "./user.js";
import Group from "./group.js";
import Profile from "./profile.js";
import connections from "./connections.js";


console.log("[models] registered:", Object.keys(sequelize.models));

// Create hasmany relationships //
if (!User.associations?.groups) 
    User.hasMany(Group, {
    foreignKey: 'usersGroup',
    as: 'groups'
});

if (!Group.associations?.profile) 
    Group.hasMany(Profile, {
    foreignKey: 'profiles',
    as: 'profile'
});


// Create belongsto relationships //
if (!Group.associations?.User) 
    Group.belongsTo(User, {
    foreignKey: 'usersGroup',
    as: 'User'
});

if (!Profile.associations?.groups) 
    Profile.belongsTo(Group, {
    foreignKey: 'profiles',
    as: 'groups'
});

// Create belongstoMany relationships //
if (!Profile.associations?.connector) 
Profile.belongsToMany(Profile, {
    through: connections,
    as: 'connector',
    foreignKey: 'connectedToId',
    otherKey: 'connectorId'
  });
  
  if (!Profile.associations?.connectedTo) 
    Profile.belongsToMany(Profile, {
        through: connections,
        as: 'connectedTo',
        foreignKey: 'connectorId',
        otherKey: 'connectedToId'
      });

      export { User, connections, Profile, Group };