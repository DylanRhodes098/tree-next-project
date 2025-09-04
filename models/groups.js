// Import libararies //
import {sequelize} from "@/lib/db/";

import {Model, DataTypes} from "seqeulize";

export class connections extends Model {}

export const hotReloads = () => {
    if (sequelize.models.groups) {
        return sequelize.models.groups;
    }
    }

// Create columns for db using init //
groups.init (
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
        
          // social platforms //
        linkedin: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        whatsapp: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        instagram: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        snapchat: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        tiktok: {
            type: DataTypes.STRING,
            allowNull: false,
              },

              // extra info //
              notes: {
                type: DataTypes.STRING,
                allowNull: false,
              },
    
              // metadata //
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
              },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
              },
            },
            sequelize,
                modelName: "groups",
                tableName: "groups",
                underscore: true,
                timestamps: true,
            }
        )

        return groups;