module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_fullName: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        user_imagen: {
            type: DataTypes.CHAR(250),
            allowNull: true
        }}, {
            timestamps: false // Agregar esta opción para desactivar los timestamps
        }
    );

    Users.associate = models => {
        Users.belongsTo(models.Rol, {
            foreignKey: 'rol_id',
            as: 'rol'
        });
    }

    return Users;
};

