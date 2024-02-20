module.exports = (sequelize, DataTypes) => {
    const OrdersItems = sequelize.define('OrdersItems', {
        producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orderItem_id: {
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
    });

    OrdersItems.associate = models => {
        OrdersItems.belongsTo(models.Productos, {
            foreignKey: 'producto_id',
            as: 'producto'
        });
        OrdersItems.belongsTo(models.Orders, {
            foreignKey: 'order_id',
            as: 'order'
        });
    };

    return OrdersItems;
};
