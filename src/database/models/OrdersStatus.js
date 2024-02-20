module.exports = (sequelize, DataTypes) => {
    const OrdersStatus = sequelize.define('OrdersStatus', {
        orderStatus_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderStatus_descripcion: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });

    return OrdersStatus;
};

