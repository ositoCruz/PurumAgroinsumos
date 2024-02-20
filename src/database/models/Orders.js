module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_address: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        order_total: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    });

    Orders.associate = models => {
        Orders.belongsTo(models.Users, {
            foreignKey: 'user_id',
            as: 'user'
        });
        Orders.belongsTo(models.OrdersStatus, {
            foreignKey: 'orderStatus_id',
            as: 'orderStatus'
        });
    };

    return Orders;
};
