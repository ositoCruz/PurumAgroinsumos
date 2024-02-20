module.exports = (sequelize, DataTypes) => {
    let alias = 'order';
    let cols = {
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
        },
        user_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_status_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    };

    const order = sequelize.define(alias, cols, config); 

    order.associate = function(models) {
        order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_user_id'
        });
        order.belongsTo(models.OrderStatus, {
            as: 'order_status',
            foreignKey: 'order_status_id'
        });
    };

    return order;
};
