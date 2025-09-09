// Import libararies //
import sequelize from "../lib/db.js";

import {Model, DataTypes} from "sequelize";

import bcrypt from "bcryptjs";

// Define User container for db //
export class User extends Model {

// Define toJSON to delete sensitive info //
toJSON() {
const values = {...this.get()} 
delete values.password
return values;
}
} 

// Initiate hot reloads function //
export const hotReloads = () => {
 // Create it for hot reloads //
if (sequelize.models.User) {
    return sequelize.models.User;
}
}


if (!sequelize.models.User) {
// Create columns for db using init //
User.init (
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
          },
          full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
              name: "unique_email",
              msg: "Email must be unique"
            }
          },
          avatar: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
          }
        },
          {
            hooks: {
              beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
              },
              beforeUpdate: async (user) => {
                if (user.changed("password")) {
                  if (user.password && user.password.trim() !== "") {
                    user.password = await bcrypt.hash(user.password, 10);
                  } else {
                    // If frontend sent empty password, keep the old one
                    user.password = user.previous("password");
                  }
                }
              },
            },
            sequelize,
                modelName: "User",
                tableName: "Users",
                freezeTableName: true,
                underscored: false,
                timestamps: true,
        
          
            }
        )
      };

        export default sequelize.models.User;

