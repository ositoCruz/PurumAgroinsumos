module.exports = (sequelize, DataTypes) => {
    let alias = 'Categorias';
    let cols = {
        categoria_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria_descripcion: {
            type: DataTypes.STRING(150),
            allowNull: true
        }
    };
    let config = {
        timestamps: false
    };

    const Categorias = sequelize.define(alias, cols, config); 

    return Categorias;
};
