// Import libararies //

import sequelize from "../lib/db";
import { DataTypes } from "sequelize";

// Import model files //

import User from "./user.js";
import Groups from "./groups.js";
import Profile from "./profile.js";


// Create hasmany relationships //
if (!User.associations.groups) 
    User.hasmany(Groups, {
    foreignKey: 'usersGroup',
    as: 'groups'
});

if (!groups.associations.profile) 
    groups.hasmany(Profile, {
    foreignKey: 'profiles',
    as: 'profile'
});


// Create belongsto relationships //
if (!groups.associations.User) 
    groups.belongTo(User, {
    foreignKey: 'usersGroup',
    as: 'User'
});

if (!profile.associations.groups) 
    Profile.belongTo(Groups, {
    foreignKey: 'profiles',
    as: 'groups'
});

// Create belongstoMany relationships //
if (!profile.associations.connector) 
Profile.belongsToMany(Profile, {
    through: connections,
    as: 'connector',
    foreignKey: 'connectedToId',
    otherKey: 'connectorId'
  });
  
  if (!Profile.associations.connectedTo) 
    Profile.belongsToMany(Profile, {
        through: connections,
        as: 'connectedTo',
        foreignKey: 'connectorId',
        otherKey: 'connectedToId'
      });

      export { User, connections, Profile, Groups };