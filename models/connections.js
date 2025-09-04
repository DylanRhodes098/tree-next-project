// Import libararies //
import {sequelize} from "@/lib/db/";

import {Model, DataTypes} from "seqeulize";

export class connections extends Model {}

export const hotReloads = () => {
    if (sequelize.models.connections) {
        return sequelize.models.connections;
    }
    }

    connections.init(
    {
        connectorId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'profile',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
        connectedToId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'profile',
            key: 'id',
          },
          onDelete: 'CASCADE',
        },
    },
        {
            sequelize,
            modelName: "connecitons",
            tableName: "connections",
            timestamps: true,
            underscored: true,
          }
    )

    return connections;