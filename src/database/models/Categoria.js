module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
    };

    let config = {
        tableName:"productCategory",
        timestamps: false,
    };

    const Categoria = sequelize.define(alias,cols,config);

    //Asociación relación de uno a muchos 

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, { 
            as: "productos",
            foreignKey: "productsCategory_id"
        })
    }
    return Categoria;
}