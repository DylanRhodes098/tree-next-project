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
      validate: {
        isUUID: 4,
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,   
        len: [2, 100],    
      },
    },

    // social platforms
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,      
      },
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
       
      },
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        
      },
    },
    snapchat: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        
      },
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        
      },
    },

    // extra info
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 1000], 
      },
    },
  },
  {
    sequelize,
    modelName: "Groups",
    tableName: "groups",
    freezeTableName: true,   
    underscored: false,     
    timestamps: true, 
            }
        )

        export default Groups;