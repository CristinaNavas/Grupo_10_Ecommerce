module.exports = (sequelize, dataTypes) => {
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type:dataTypes.STRING(500),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        productsCategory_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "productsCategories",
                key: "id",}
        }
    };

    let config = {
        tableName:"products",
        timestamps: false,
    };

    const Producto = sequelize.define(alias,cols,config);
    //Asociación relación de muchos a uno 
    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, { 
            as: "categorias",
            foreignKey: "productsCategory_id"
        })
    }
    return Producto;
}