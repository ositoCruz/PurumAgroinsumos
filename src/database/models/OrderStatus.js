module.exports = (sequelize, DataTypes) => {
    let alias = 'order_status';
    let cols = {
        order_status_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_status_descripcion: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    };
    let config = {
        timestamps: false
    };

    const order_status = sequelize.define(alias, cols, config); 

    return order_status;
};
