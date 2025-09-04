// Import libararies //

import sequelize from "@/lib/db";
import { DataTypes } from "sequelize";

// Import model files //

import { User, profile, connections, groups } from "@/models/";

// Create hasmany relationships //
if (!User.associations.groups) 
    User.hasmany(groups, {
    foreignKey: 'usersGroup',
    as: 'groups'
});

if (!groups.associations.profile) 
    groups.hasmany(profile, {
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
    profile.belongTo(groups, {
    foreignKey: 'profiles',
    as: 'groups'
});

// Create belongstoMany relationships //
if (!profile.associations.connector) 
profile.belongsToMany(profile, {
    through: connections,
    as: 'connector',
    foreignKey: 'connectedToId',
    otherKey: 'connectorId'
  });
  
  if (!profile.associations.connectedTo) 
    profile.belongsToMany(profile, {
        through: connections,
        as: 'connectedTo',
        foreignKey: 'connectorId',
        otherKey: 'connectedToId'
      });

      export { User, connections, profile, groups };