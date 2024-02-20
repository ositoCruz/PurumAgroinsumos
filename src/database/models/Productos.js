module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define('Productos', {
        producto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        producto_descripcion: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        producto_stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        producto_precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        producto_expirationDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        producto_detalle: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        producto_imagen: {
            type: DataTypes.CHAR(250),
            allowNull: true
        }
    }, {
        timestamps: false // Agregar esta opción para desactivar los timestamps
    });

    Productos.associate = models => {
        Productos.belongsTo(models.Categorias, {
            foreignKey: 'categoria_id',
            as: 'categoria'
        });
    };

    return Productos;
};
