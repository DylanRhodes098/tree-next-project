// Import libararies //
import sequelize from "../lib/db.js";

import {Model, DataTypes} from "sequelize";

export class Profile extends Model {}

export const hotReloads = () => {
if (sequelize.models.Profile) {
    return sequelize.models.Profile;
}
}

Profile.init ({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 255],
    },
  },

  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9+\-\s()]{7,20}$/i,
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, 
    },
  },

  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
      isBefore: new Date().toISOString(), // must be in the past
    },
  },

  // social platforms
  linkedin: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  whatsapp: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
  
    },
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
  
    },
  },
  snapchat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
  
    },
  },
  tiktok: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {

    },
  },

  // extra info
  interests: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
    
    },
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
     
    },
  },

  // foreign key
  groupsId: {
    type: DataTypes.UUID,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUUID: 4,
    },
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
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