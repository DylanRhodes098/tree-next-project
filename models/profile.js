// Import libararies //
import sequelize from "../lib/db.js";

import {Model, DataTypes} from "sequelize";

export class Profile extends Model {}

export const hotReloads = () => {
if (sequelize.models.Profile) {
    return sequelize.models.Profile;
}
}

Profile.init (
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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
          },

          // social platforms //
        linkedin: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        whatsapp: {
            type: DataTypes.STRING,
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
        interests: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          // metadata
          groupsId: {
            type: DataTypes.UUID,
            allowNull: false, 
          },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
          },
        },
          {
            sequelize,
            modelName: "Profile",
            tableName: "profile",
            freezeTableName: true,
            timestamps: true,
            underscored: false,
          }
        );
    
export default Profile;