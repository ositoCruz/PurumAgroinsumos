module.exports = (sequelize, DataTypes) => {
    let alias = 'order_item';
    let cols = {
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    };

    const orderItem = sequelize.define(alias, cols, config); 

    orderItem.associate = function(models) {
        orderItem.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });
        orderItem.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'order_id'
        });
    };

    return orderItem;
};
