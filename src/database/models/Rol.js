module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
        rol_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol_descripcion: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
    }, { timestamps: false});
 Rol.associate = models => {
        Rol.hasMany(models.Users, {
            foreignKey: 'rol_id',
            as: 'user'
        });
    };
    return Rol;
};