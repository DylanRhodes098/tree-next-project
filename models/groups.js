// Import libararies //
import sequelize from "../lib/db.js";

import {Model, DataTypes} from "sequelize";

export class Groups extends Model {}

export const hotReloads = () => {
    if (sequelize.models.Groups) {
        return sequelize.models.Groups;
    }
    }

// Create columns for db using init //
Groups.init (
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // social platforms
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    snapchat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // extra info
    notes: {
      type: DataTypes.TEXT, 
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Groups",
    tableName: "groups",
    freezeTableName: true,   
    underscored: true,     
    timestamps: true, 
            }
        )

        export default Groups;