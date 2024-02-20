module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos';
    let cols = {
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
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    };

    const Productos = sequelize.define(alias, cols, config); 

    Productos.associate = function(models) {
        Productos.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: 'categoria_id'
        });
    };

    return Productos;
};
