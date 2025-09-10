// Import libararies //

import sequelize from "../lib/db";
import { DataTypes } from "sequelize";

// Import model files //

import User from "./user.js";
import Groups from "./groups.js";
import Profile from "./profile.js";


// Create hasmany relationships //
if (!User.associations.Groups) 
    User.hasMany(Groups, {
    foreignKey: 'usersGroup',
    as: 'groups'
});

if (!Groups.associations.profile) 
    Groups.hasMany(Profile, {
    foreignKey: 'profiles',
    as: 'profile'
});


// Create belongsto relationships //
if (!Groups.associations.User) 
    Groups.belongTo(User, {
    foreignKey: 'usersGroup',
    as: 'User'
});

if (!Profile.associations.Groups) 
    Profile.belongTo(Groups, {
    foreignKey: 'profiles',
    as: 'groups'
});

// Create belongstoMany relationships //
if (!Profile.associations.connector) 
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